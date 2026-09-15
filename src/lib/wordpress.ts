import "server-only";

const ENDPOINT = process.env.WORDPRESS_GRAPHQL_URL ?? "http://localhost/faisalhills/fhwordpress/graphql";

interface GraphQLResponse<T> {
  data?: T;
  errors?: { message: string }[];
}

/**
 * Query the headless WordPress backend over GraphQL.
 *
 * `revalidate` defaults to 60s so content edited in wp-admin shows up on the
 * live site within a minute without needing a full rebuild.
 */
export async function fetchGraphQL<T>(
  query: string,
  variables: Record<string, unknown> = {},
  { revalidate = 60 }: { revalidate?: number | false } = {}
): Promise<T> {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: revalidate === false ? { revalidate: false } : { revalidate },
  });

  if (!res.ok) {
    throw new Error(`WordPress GraphQL request failed: ${res.status} ${res.statusText}`);
  }

  const json: GraphQLResponse<T> = await res.json();

  if (json.errors?.length) {
    throw new Error(`WordPress GraphQL error: ${json.errors.map((e) => e.message).join("; ")}`);
  }

  if (!json.data) {
    throw new Error("WordPress GraphQL response had no data.");
  }

  return json.data;
}
