import { fetchGraphQL } from "./wordpress";
import type { BlogPost, Block, BookingStep, Faq, HomePageData, Landmark, Plot } from "./types";

const SITE_OPTIONS_FIELDS = `
  heroTitle
  heroSubtitle
  heroImage
  chairmanName
  chairmanTitle
  chairmanBio
  chairmanPhoto
  overviewTitle
  overviewText
  locationTitle
  locationText
  masterPlanImage
  masterPlanPdfUrl
  paymentPlanIntro
  paymentPlanImage
  paymentPlanPdfUrl
  bookingIntro
  benefitsIntro
  amenitiesIntro
  galleryIntro
  ctaTitle
  ctaText
  phoneNumber
  whatsappNumber
  email
  address
  facebookUrl
  instagramUrl
  youtubeUrl
  tiktokUrl
`;

const HOME_QUERY = /* GraphQL */ `
  query HomePage {
    siteOptions {
      ${SITE_OPTIONS_FIELDS}
    }
    stats(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 20) {
      nodes {
        title
        value
        group
      }
    }
    zedemProjects(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 20) {
      nodes {
        title
        link
      }
    }
    landmarks(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 20) {
      nodes {
        title
        driveTime
        category
      }
    }
    blocks(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 20) {
      nodes {
        title
        content
        status
        link
        slug
      }
    }
    plots(first: 12) {
      nodes {
        title
        slug
        plotNumber
        size
        price
        facing
        status
        plotBlocks {
          nodes {
            name
            slug
          }
        }
        plotTypes {
          nodes {
            name
            slug
          }
        }
      }
    }
    flagships(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 10) {
      nodes {
        title
        content
        link
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
    bookingSteps(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 10) {
      nodes {
        title
        content
        stepNumber
        stepLabel
      }
    }
    benefits(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 10) {
      nodes {
        title
        content
      }
    }
    amenities(first: 50) {
      nodes {
        title
        content
        amenityCategories {
          nodes {
            name
            slug
          }
        }
      }
    }
    testimonials(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 20) {
      nodes {
        title
        content
        role
        rating
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
    galleryItems(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 24) {
      nodes {
        title
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        galleryCategories {
          nodes {
            name
            slug
          }
        }
      }
    }
    faqs(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 20) {
      nodes {
        title
        content
      }
    }
    posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export async function getHomePageData(): Promise<HomePageData> {
  const data = await fetchGraphQL<Omit<HomePageData, "faisaltownStats" | "stats"> & { stats: HomePageData["stats"] }>(
    HOME_QUERY
  );

  const allStats = data.stats.nodes;

  return {
    ...data,
    stats: { nodes: allStats.filter((s) => s.group !== "faisaltown") },
    faisaltownStats: { nodes: allStats.filter((s) => s.group === "faisaltown") },
  };
}

const FAQS_QUERY = /* GraphQL */ `
  query Faqs {
    faqs(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 50) {
      nodes {
        title
        content
      }
    }
  }
`;

export async function getFaqs(): Promise<Faq[]> {
  const data = await fetchGraphQL<{ faqs: { nodes: Faq[] } }>(FAQS_QUERY);
  return data.faqs.nodes;
}

const PLOTS_QUERY = /* GraphQL */ `
  query Plots {
    plots(first: 100) {
      nodes {
        title
        slug
        plotNumber
        size
        price
        facing
        status
        plotBlocks {
          nodes {
            name
            slug
          }
        }
        plotTypes {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export async function getPlots(): Promise<Plot[]> {
  const data = await fetchGraphQL<{ plots: { nodes: Plot[] } }>(PLOTS_QUERY);
  return data.plots.nodes;
}

const GALLERY_QUERY = /* GraphQL */ `
  query Gallery {
    galleryItems(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 100) {
      nodes {
        title
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        galleryCategories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export async function getGalleryItems() {
  const data = await fetchGraphQL<{ galleryItems: HomePageData["galleryItems"] }>(GALLERY_QUERY);
  return data.galleryItems.nodes;
}

const POSTS_QUERY = /* GraphQL */ `
  query Posts {
    posts(first: 50, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        title
        slug
        excerpt
        content
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export async function getPosts(): Promise<BlogPost[]> {
  const data = await fetchGraphQL<{ posts: { nodes: BlogPost[] } }>(POSTS_QUERY);
  return data.posts.nodes;
}

const POST_BY_SLUG_QUERY = /* GraphQL */ `
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      slug
      excerpt
      content
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const data = await fetchGraphQL<{ post: BlogPost | null }>(POST_BY_SLUG_QUERY, { slug });
  return data.post;
}

const PAGE_BY_SLUG_QUERY = /* GraphQL */ `
  query PageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
`;

export async function getPageBySlug(slug: string) {
  const data = await fetchGraphQL<{
    page: { title: string; content: string; featuredImage?: { node: { sourceUrl: string; altText: string } } } | null;
  }>(PAGE_BY_SLUG_QUERY, { slug });
  return data.page;
}

const SITE_OPTIONS_QUERY = /* GraphQL */ `
  query SiteOptionsOnly {
    siteOptions {
      ${SITE_OPTIONS_FIELDS}
    }
  }
`;

export async function getSiteOptions() {
  const data = await fetchGraphQL<{ siteOptions: HomePageData["siteOptions"] }>(SITE_OPTIONS_QUERY);
  return data.siteOptions;
}

const LANDMARKS_QUERY = /* GraphQL */ `
  query Landmarks {
    landmarks(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 50) {
      nodes {
        title
        driveTime
        category
      }
    }
  }
`;

export async function getLandmarks(): Promise<Landmark[]> {
  const data = await fetchGraphQL<{ landmarks: { nodes: Landmark[] } }>(LANDMARKS_QUERY);
  return data.landmarks.nodes;
}

const BLOCKS_QUERY = /* GraphQL */ `
  query Blocks {
    blocks(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 50) {
      nodes {
        title
        content
        status
        link
        slug
      }
    }
  }
`;

export async function getBlocks(): Promise<Block[]> {
  const data = await fetchGraphQL<{ blocks: { nodes: Block[] } }>(BLOCKS_QUERY);
  return data.blocks.nodes;
}

const BLOCK_BY_SLUG_QUERY = /* GraphQL */ `
  query BlockBySlug($slug: ID!) {
    block(id: $slug, idType: SLUG) {
      title
      content
      status
      link
      slug
    }
  }
`;

export async function getBlockBySlug(slug: string): Promise<Block | null> {
  const data = await fetchGraphQL<{ block: Block | null }>(BLOCK_BY_SLUG_QUERY, { slug });
  return data.block;
}

const BOOKING_STEPS_QUERY = /* GraphQL */ `
  query BookingSteps {
    bookingSteps(where: { orderby: { field: MENU_ORDER, order: ASC } }, first: 10) {
      nodes {
        title
        content
        stepNumber
        stepLabel
      }
    }
  }
`;

export async function getBookingSteps(): Promise<BookingStep[]> {
  const data = await fetchGraphQL<{ bookingSteps: { nodes: BookingStep[] } }>(BOOKING_STEPS_QUERY);
  return data.bookingSteps.nodes;
}
