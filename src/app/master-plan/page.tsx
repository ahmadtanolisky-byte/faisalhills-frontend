  import type { Metadata } from "next";
  import { getBlocks, getSiteOptions } from "@/lib/queries";
  import MasterPlanMap from "@/components/home/MasterPlanMap";
  import BlocksSectors from "@/components/home/BlocksSectors";

import Link from "next/link";

export const metadata: Metadata = {
  title: "Master Plan | Faisal Hills Islamabad",
  description:
    "Explore the Faisal Hills Islamabad master plan, blocks, landmarks, facilities and amenities.",
};

const blocks = [
  {
    number: "01",
    title: "Executive Block",
    tag: "RESIDENTIAL + COMMERCIAL",
    text: "The Faisal Hills Executive Block offers a balanced blend of residential and commercial land plots. There are residential plots in varied sizes, as well as several commercial projects. It also comprises a 225-ft boulevard, a large mosque, a cricket stadium, and various other necessary facilities.",
  },
  {
    number: "02",
    title: "Block A",
    tag: "FULLY DEVELOPED",
    text: "Faisal Hills Block A is a fully developed block with functional infrastructure and facilities. The block comprises possession able plots in different sizes, making it a good choice for buyers and investors. Block A has provisions for wide roads, parks, mosques, playgrounds, health care services, recreational facilities, and other amenities.",
  },
  {
    number: "03",
    title: "Block B",
    tag: "MARGALLA HILLS VIEWS",
    text: "Faisal Hills Block B offers a peaceful environment in contrast to the liveliness of the city. It provides access to modern living with remarkable views of the Margalla Hills. Block B Layout Plan includes provisions for residential plots of various sizes, a commercial project, infrastructure, amenities, and recreational facilities.",
  },
  {
    number: "04",
    title: "Block B Extension",
    tag: "LIFESTYLE LIVING",
    text: "Faisal Hills B Extension Block is designed to meet growing demand for modern, lifestyle-oriented living. It is located right at the foothills of the Margalla Hills and offers a peaceful living experience with views of the surrounding green hills. This block offers a limited number of plots in different sizes, with immediate availability.",
  },
  {
    number: "05",
    title: "C Block",
    tag: "RAPIDLY DEVELOPING",
    text: "Block C in Faisal Hills is rapidly developing. Roads, streets, and infrastructure are being built, and people are constructing houses. It offers various types of residential and commercial plots, along with necessary amenities. The layout of Block C includes parks, mosques, fueling stations, healthcare centers, and many other amenities.",
  },
  {
    number: "06",
    title: "D Block",
    tag: "M-1 ACCESS",
    text: "Faisal Hills D Block is the closest to the M-1 Motorway, providing easy access to Islamabad for residents of KPK and the northern parts. It is developing rapidly and attracting many buyers and investors. Its layout includes various residential and commercial plots, along with many other amenities.",
  },
];

const landmarks = [
  {
    number: "01",
    title: "Arc Monument",
    text: "The Arc Monument is one of the most significant landmarks of Faisal Hills, constructed to give the area a unique identity. With its eye-catching structure and strategic placement, this monument is a recognizable feature of the society.",
  },
  {
    number: "02",
    title: "Hill Walk",
    text: "The Hill Walk offers residents a refreshing outdoor activity, surrounded by the natural beauty of the surroundings. It is a place where people can take leisurely walks, relax, and enjoy their time amidst scenic surroundings.",
  },
  {
    number: "03",
    title: "Faisal Jewel",
    text: "The Faisal Jewel is one of the most prominent landmarks, proposed to enhance the prestige of Faisal Hills. Its striking presence has made it a part of Faisal Hills' contemporary identity.",
  },
  {
    number: "04",
    title: "Miyawaki Forest",
    text: "The Miyawaki Forest reflects Faisal Hills' concern for the environment and its development. Built as a dense plantation, this forest brings natural beauty and supports the development of a greener environment.",
  },
  {
    number: "05",
    title: "Glow Garden",
    text: "Glow Garden is an appealing landmark created specifically to foster a lively environment in Faisal Hills. The illuminated surroundings provide residents and tourists alike with an inviting place for leisurely walks, rest, and family time.",
  },
  {
    number: "06",
    title: "Sports Complex",
    text: "The Sports Complex is another landmark created to promote an active lifestyle among the residents of Faisal Hills. This recreational landmark provides residents with facilities for sports and physical exercise.",
  },
  {
    number: "07",
    title: "Hazrat Ali (R.A) Masjid",
    text: "Hazrat Ali (R.A) Masjid is an essential religious landmark in Faisal Hills, serving as a place of worship for residents. Its presence adds spiritual and community value to the development.",
  },
];

const facilities = [
  {
    number: "01",
    title: "Gated Community",
    text: "The housing society has controlled access with checking at the entrance gate to provide a secure living environment for residents.",
  },
  {
    number: "02",
    title: "Health Care",
    text: "The community includes hospitals, pharmacies, and other healthcare facilities to provide solutions for emergency situations.",
  },
  {
    number: "03",
    title: "Mosques",
    text: "Jamia masjid and spacious mosques are spread over the society, providing places for daily, Friday, Eid, and occasional prayers.",
  },
  {
    number: "04",
    title: "Educational Institutes",
    text: "As the community expands, schools and educational institutes are establishing campuses within the community.",
  },
  {
    number: "05",
    title: "Parks",
    text: "To foster eco-friendly living, the society includes lush green and manicured parks in each block where residents can relax and unwind.",
  },
  {
    number: "06",
    title: "Wide Roads",
    text: "The society road network features a 225-ft boulevard, wide roads, and spacious streets designed to help reduce traffic congestion.",
  },
];

export default function MasterPlanPage() {
  return (
    <main className="fh-master-page">

      {/* HERO */}
      <section className="fh-master-hero">
        <div className="fh-master-hero-overlay" />

        <div className="fh-master-container fh-master-hero-content">
          <p className="fh-master-eyebrow">
            FAISAL HILLS ISLAMABAD
          </p>

          <h1>
            A master plan
            <br />
            <span>designed for living.</span>
          </h1>

          <p className="fh-master-hero-text">
            Explore the planning, blocks, landmarks, facilities and amenities
            that shape Faisal Hills into a modern residential community.
          </p>

          <div className="fh-master-actions">
            <a
              href="#overview"
              className="fh-master-btn fh-master-btn-primary"
            >
              Explore Master Plan <span>↓</span>
            </a>

            <a
              href="#blocks"
              className="fh-master-btn fh-master-btn-outline"
            >
              View Blocks
            </a>
          </div>
        </div>

        <div className="fh-master-hero-bottom">
          <span>11,823.5 KANALS</span>
          <span>GT ROAD · M-1 MOTORWAY</span>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="fh-master-overview" id="overview">
        <div className="fh-master-container fh-master-overview-grid">

          <div>
            <p className="fh-master-eyebrow fh-master-dark-eyebrow">
              MASTER PLAN OVERVIEW
            </p>

            <h2>
              Planned with
              <br />
              <em>purpose.</em>
            </h2>
          </div>

          <div className="fh-master-copy">
            <p>
              Faisal Hills is a housing society located in the
              Rawalpindi-Islamabad area, known for its planning and modern
              development. The housing society was developed with the help of
              planners, designers, and architects.
            </p>

            <p>
              The society covers an area of approximately 11,823.5 Kanals and
              has been divided into different blocks. Its location between
              the M-1 Motorway and GT Road provides convenient access to major
              destinations in the Twin Cities.
            </p>

            <p>
              The development incorporates modern facilities and sustainable
              practices to create a planned environment for residents,
              families and businesses.
            </p>

            <div className="fh-master-divider" />

            <div className="fh-master-overview-facts">
              <div>
                <strong>11,823.5</strong>
                <span>KANALS</span>
              </div>

              <div>
                <strong>06+</strong>
                <span>MAIN BLOCKS</span>
              </div>

              <div>
                <strong>M-1</strong>
                <span>MOTORWAY ACCESS</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* MASTER PLAN VISUAL */}
      <section className="fh-master-visual-section">
        <div className="fh-master-container">

          <div className="fh-master-section-heading">
            <div>
              <p className="fh-master-eyebrow fh-master-dark-eyebrow">
                MASTER PLAN
              </p>

              <h2>
                One community.
                <br />
                <em>Distinct zones.</em>
              </h2>
            </div>

            <p>
              The master plan divides Faisal Hills into distinct blocks,
              creating organized residential and commercial areas supported
              by roads, parks, mosques and other facilities.
            </p>
          </div>

          <div className="fh-master-plan-visual">

            <div className="fh-master-road master-road-1">
              <span>225 FT BOULEVARD</span>
            </div>

            <div className="fh-master-road master-road-2">
              <span>GT ROAD</span>
            </div>

            <div className="fh-master-road master-road-3">
              <span>M-1 MOTORWAY</span>
            </div>

            <div className="fh-master-zone zone-executive">
              <span>01</span>
              EXECUTIVE
            </div>

            <div className="fh-master-zone zone-a">
              <span>02</span>
              BLOCK A
            </div>

            <div className="fh-master-zone zone-b">
              <span>03</span>
              BLOCK B
            </div>

            <div className="fh-master-zone zone-b-extension">
              <span>04</span>
              B EXT.
            </div>

            <div className="fh-master-zone zone-c">
              <span>05</span>
              BLOCK C
            </div>

            <div className="fh-master-zone zone-d">
              <span>06</span>
              BLOCK D
            </div>

            <div className="fh-master-plan-center">
              <strong>FAISAL HILLS</strong>
              <span>MASTER PLAN</span>
            </div>

          </div>
        </div>
      </section>

      {/* BLOCKS */}
      <section className="fh-master-blocks" id="blocks">
        <div className="fh-master-container">

          <div className="fh-master-section-heading fh-master-heading-light">
            <div>
              <p className="fh-master-eyebrow">
                BLOCKS IN FAISAL HILLS
              </p>

              <h2>
                Every block has
                <br />
                <em>its own character.</em>
              </h2>
            </div>

            <p>
              Faisal Hills is divided into different blocks, each planned
              around residential, commercial, recreational and community
              requirements.
            </p>
          </div>

          <div className="fh-master-block-grid">
            {blocks.map((block) => (
              <article
                className="fh-master-block-card"
                key={block.title}
              >
                <div className="fh-master-card-top">
                  <span>{block.number}</span>
                  <span>{block.tag}</span>
                </div>

                <div className="fh-master-block-body">
                  <h3>{block.title}</h3>

                  <p>{block.text}</p>
                </div>

                <div className="fh-master-card-bottom">
                  <span>FAISAL HILLS</span>
                  <span>↗</span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* LANDMARKS */}
      <section className="fh-master-landmarks">
        <div className="fh-master-container">

          <div className="fh-master-section-heading">
            <div>
              <p className="fh-master-eyebrow fh-master-dark-eyebrow">
                ATTRACTIONS & LANDMARKS
              </p>

              <h2>
                Places that give
                <br />
                <em>Faisal Hills identity.</em>
              </h2>
            </div>

            <p>
              From recreational spaces to architectural landmarks, Faisal
              Hills includes features designed to create a distinctive
              community environment.
            </p>
          </div>

          <div className="fh-master-landmark-grid">
            {landmarks.map((landmark) => (
              <article
                className="fh-master-landmark-card"
                key={landmark.title}
              >
                <div className="fh-master-landmark-number">
                  {landmark.number}
                </div>

                <div className="fh-master-landmark-icon">
                  +
                </div>

                <h3>{landmark.title}</h3>

                <p>{landmark.text}</p>

                <div className="fh-master-landmark-line" />
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* FACILITIES */}
      <section className="fh-master-facilities">
        <div className="fh-master-container">

          <div className="fh-master-section-heading fh-master-heading-light">
            <div>
              <p className="fh-master-eyebrow">
                FACILITIES & AMENITIES
              </p>

              <h2>
                Designed around
                <br />
                <em>everyday life.</em>
              </h2>
            </div>

            <p>
              The master plan includes facilities intended to support
              comfortable, secure and community-focused living.
            </p>
          </div>

          <div className="fh-master-facility-grid">
            {facilities.map((facility) => (
              <article
                className="fh-master-facility-card"
                key={facility.title}
              >
                <div className="fh-master-facility-number">
                  {facility.number}
                </div>

                <div>
                  <h3>{facility.title}</h3>
                  <p>{facility.text}</p>
                </div>

                <span className="fh-master-facility-arrow">
                  ↗
                </span>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* PLANNING APPROACH */}
      <section className="fh-master-approach">
        <div className="fh-master-container fh-master-approach-grid">

          <div>
            <p className="fh-master-eyebrow fh-master-dark-eyebrow">
              THE BIGGER PICTURE
            </p>

            <h2>
              Built around
              <br />
              <em>people and place.</em>
            </h2>
          </div>

          <div className="fh-master-copy">
            <p>
              The Faisal Hills master plan brings together residential and
              commercial plots with infrastructure, recreational areas,
              religious facilities, healthcare and green spaces.
            </p>

            <p>
              Wide roads and major access routes connect the different parts
              of the community, while landmarks and recreational facilities
              add character to the development.
            </p>

            <p>
              The result is a planned environment that combines residential
              living, commercial activity and community facilities within a
              connected development.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="fh-master-cta">
        <div className="fh-master-container">

          <p className="fh-master-eyebrow">
            EXPLORE FAISAL HILLS
          </p>

          <h2>
            See the plan.
            <br />
            <em>Imagine the future.</em>
          </h2>

          <p>
            Explore Faisal Hills, its location, blocks and development in
            greater detail.
          </p>

          <div className="fh-master-actions fh-master-actions-center">
            <Link
              href="/location"
              className="fh-master-btn fh-master-btn-primary"
            >
              Explore Location <span>↗</span>
            </Link>

            <Link
              href="/about"
              className="fh-master-btn fh-master-btn-outline"
            >
              About Faisal Hills
            </Link>
          </div>

        </div>
      </section>

      <style>{`
        
.fh-master-page {
  --fh-navy: #0E1B2A;
  --fh-navy-light: #14263D;
  --fh-burgundy: #872228;
  --fh-orange: #F4A236;
  --fh-beige: #F5E9DB;
  --fh-cream: #FBF7F1;
  --fh-white: #ffffff;
  --fh-black: #111820;
  --fh-muted: #625F5A;
  --fh-border: #DED4C7;

  background: var(--fh-beige);
  color: var(--fh-black);
  overflow: hidden;
}

.fh-master-page *,
.fh-master-page *::before,
.fh-master-page *::after {
  box-sizing: border-box;
}

.fh-master-container {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.fh-master-page h1,
.fh-master-page h2,
.fh-master-page h3,
.fh-master-page p {
  margin-top: 0;
}

.fh-master-page h1,
.fh-master-page h2,
.fh-master-page h3 {
  letter-spacing: -0.045em;
}

.fh-master-page h1,
.fh-master-page h2 {
  font-weight: 500;
  line-height: 1.05;
}

.fh-master-page h1 span,
.fh-master-page h2 em {
  color: var(--fh-burgundy);
  font-family: Georgia, serif;
  font-weight: 400;
}

/* =========================
   EYEBROW
========================= */

.fh-master-eyebrow {
  color: var(--fh-orange);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .18em;
  margin-bottom: 22px;
}

.fh-master-dark-eyebrow {
  color: var(--fh-burgundy);
}

/* =========================
   HERO
========================= */

.fh-master-hero {
  min-height: 700px;
  position: relative;
  display: flex;
  align-items: center;
  color: var(--fh-white);

  background:
    radial-gradient(
      circle at 78% 25%,
      rgba(244,162,54,.22),
      transparent 30%
    ),
    linear-gradient(
      120deg,
      #08121E 0%,
      #0E1B2A 48%,
      #1B3148 100%
    );
}

.fh-master-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: .10;

  background-image:
    linear-gradient(
      135deg,
      transparent 48%,
      rgba(244,162,54,.35) 49%,
      transparent 50%
    ),
    linear-gradient(
      45deg,
      transparent 48%,
      rgba(255,255,255,.12) 49%,
      transparent 50%
    );

  background-size: 130px 130px;
}

.fh-master-hero-overlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgba(8,18,30,.96),
      rgba(14,27,42,.55)
    );
}

.fh-master-hero-content {
  position: relative;
  z-index: 2;
  padding: 120px 0 100px;
}

.fh-master-hero h1 {
  font-size: clamp(48px, 7vw, 88px);
  max-width: 900px;
  margin-bottom: 30px;
}

.fh-master-hero h1 span {
  color: var(--fh-orange);
}

.fh-master-hero-text {
  max-width: 550px;
  color: #E6E0D7;
  font-size: 15px;
  line-height: 1.9;
  margin-bottom: 35px;
}

/* =========================
   BUTTONS
========================= */

.fh-master-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.fh-master-actions-center {
  justify-content: center;
}

.fh-master-btn {
  min-height: 54px;
  padding: 15px 23px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 22px;

  text-decoration: none;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;

  transition: .25s ease;
}

.fh-master-btn-primary {
  color: #ffffff;
  background: var(--fh-orange);
}

.fh-master-btn-primary:hover {
  color: #ffffff;
  background: var(--fh-burgundy);
}

.fh-master-btn-outline {
  color: #ffffff;
  border: 1px solid rgba(255,255,255,.45);
}

.fh-master-btn:hover {
  transform: translateY(-2px);
}

/* =========================
   HERO BOTTOM
========================= */

.fh-master-hero-bottom {
  position: absolute;
  z-index: 2;
  bottom: 27px;
  left: 50%;
  transform: translateX(-50%);

  width: min(1180px, calc(100% - 48px));

  display: flex;
  justify-content: space-between;

  color: #B8B0A8;
  font-size: 8px;
  letter-spacing: .16em;
}

/* =========================
   LIGHT SECTIONS
========================= */

.fh-master-overview,
.fh-master-visual-section,
.fh-master-landmarks,
.fh-master-approach {
  padding: 115px 0;
}

.fh-master-overview {
  background: var(--fh-beige);
}

.fh-master-overview-grid,
.fh-master-approach-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
  align-items: start;
}

.fh-master-page h2 {
  font-size: clamp(40px, 5vw, 68px);
  margin-bottom: 30px;
}

.fh-master-copy {
  color: var(--fh-muted);
  font-size: 15px;
  line-height: 1.9;
}

.fh-master-copy p {
  margin-bottom: 23px;
}

.fh-master-divider {
  width: 65px;
  height: 2px;
  background: var(--fh-orange);
  margin: 30px 0;
}

.fh-master-overview-facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.fh-master-overview-facts div {
  padding-top: 16px;
  border-top: 1px solid #D6CEC3;
}

.fh-master-overview-facts strong {
  display: block;
  color: var(--fh-burgundy);
  font-size: 25px;
  font-weight: 500;
}

.fh-master-overview-facts span {
  display: block;
  margin-top: 6px;
  color: #77716A;
  font-size: 8px;
  letter-spacing: .1em;
}

/* =========================
   SECTION HEADING
========================= */

.fh-master-section-heading {
  display: grid;
  grid-template-columns: 1fr .75fr;
  gap: 80px;
  align-items: end;
  margin-bottom: 60px;
}

.fh-master-section-heading > p {
  color: var(--fh-muted);
  font-size: 14px;
  line-height: 1.9;
  margin-bottom: 0;
}

/* =========================
   MASTER PLAN VISUAL
========================= */

.fh-master-visual-section {
  background: var(--fh-cream);
}

.fh-master-plan-visual {
  height: 570px;
  position: relative;
  overflow: hidden;

  background:
    linear-gradient(
      35deg,
      transparent 48%,
      rgba(135,34,40,.09) 49%,
      transparent 50%
    ),
    #EEE8DF;

  border: 1px solid #DCD2C5;
}

.fh-master-plan-visual::before {
  content: "";
  position: absolute;
  inset: 0;

  background-image:
    linear-gradient(
      rgba(14,27,42,.04) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(14,27,42,.04) 1px,
      transparent 1px
    );

  background-size: 45px 45px;
}

/* Roads */

.fh-master-road {
  position: absolute;
  height: 3px;
  background: var(--fh-burgundy);
  z-index: 1;
}

.fh-master-road span {
  position: absolute;
  top: -18px;
  left: 10px;

  white-space: nowrap;

  color: var(--fh-burgundy);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: .12em;
}

.master-road-1 {
  width: 110%;
  left: -5%;
  top: 52%;
  transform: rotate(-12deg);
}

.master-road-2 {
  width: 100%;
  left: 0;
  top: 25%;
  transform: rotate(12deg);
  opacity: .65;
}

.master-road-3 {
  width: 75%;
  right: -5%;
  top: 75%;
  transform: rotate(24deg);
  opacity: .45;
}

/* Zones */

.fh-master-zone {
  position: absolute;
  z-index: 2;

  border: 1px solid rgba(135,34,40,.32);
  background: rgba(255,255,255,.62);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7px;

  color: var(--fh-navy);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .08em;

  transition: .25s ease;
}

.fh-master-zone:hover {
  background: rgba(244,162,54,.18);
  border-color: var(--fh-orange);
}

.fh-master-zone span {
  color: var(--fh-burgundy);
  font-size: 9px;
}

.zone-executive {
  width: 27%;
  height: 35%;
  left: 8%;
  top: 13%;
}

.zone-a {
  width: 25%;
  height: 31%;
  left: 38%;
  top: 10%;
}

.zone-b {
  width: 23%;
  height: 31%;
  right: 8%;
  top: 11%;
}

.zone-b-extension {
  width: 22%;
  height: 27%;
  left: 10%;
  bottom: 10%;
}

.zone-c {
  width: 24%;
  height: 27%;
  left: 38%;
  bottom: 10%;
}

.zone-d {
  width: 23%;
  height: 27%;
  right: 8%;
  bottom: 10%;
}

/* Center */

.fh-master-plan-center {
  position: absolute;
  z-index: 4;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 155px;
  height: 155px;

  border-radius: 50%;

  background: var(--fh-navy);
  color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  border: 4px solid var(--fh-orange);
  box-shadow: 0 15px 40px rgba(14,27,42,.18);
}

.fh-master-plan-center strong {
  font-size: 13px;
  letter-spacing: .08em;
}

.fh-master-plan-center span {
  margin-top: 7px;
  color: #C8C3BC;
  font-size: 8px;
  letter-spacing: .14em;
}

/* =========================
   BLOCKS
========================= */

.fh-master-blocks,
.fh-master-facilities {
  padding: 115px 0;
  background: var(--fh-navy);
  color: #ffffff;
}

.fh-master-heading-light > p {
  color: #B7B0A8;
}

.fh-master-heading-light h2 em {
  color: var(--fh-orange);
}

.fh-master-block-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.fh-master-block-card {
  min-height: 390px;
  padding: 28px;

  border: 1px solid #26394D;
  background: var(--fh-navy-light);

  display: flex;
  flex-direction: column;

  transition: .25s ease;
}

.fh-master-block-card:hover {
  border-color: var(--fh-orange);
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(0,0,0,.16);
}

.fh-master-card-top,
.fh-master-card-bottom {
  display: flex;
  justify-content: space-between;
  gap: 15px;

  font-size: 9px;
  letter-spacing: .12em;
}

.fh-master-card-top span:first-child {
  color: var(--fh-orange);
  font-size: 12px;
}

.fh-master-card-top span:last-child {
  color: #A7A19A;
}

.fh-master-block-body {
  margin-top: auto;
}

.fh-master-block-body h3 {
  color: #ffffff;
  font-size: 30px;
  margin-bottom: 18px;
  font-weight: 500;
}

.fh-master-block-body p {
  color: #B4B0A9;
  font-size: 12px;
  line-height: 1.85;
  margin-bottom: 30px;
}

.fh-master-card-bottom {
  padding-top: 18px;
  border-top: 1px solid #314356;
  color: #8E8982;
}

.fh-master-card-bottom span:last-child {
  color: var(--fh-orange);
  font-size: 18px;
}

/* =========================
   LANDMARKS
========================= */

.fh-master-landmarks {
  background: var(--fh-cream);
}

.fh-master-landmark-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.fh-master-landmark-card {
  min-height: 340px;
  padding: 27px;

  background: #ffffff;
  border: 1px solid var(--fh-border);

  display: flex;
  flex-direction: column;

  transition: .25s ease;
}

.fh-master-landmark-card:hover {
  transform: translateY(-3px);
  border-color: var(--fh-orange);
}

.fh-master-landmark-number {
  color: var(--fh-orange);
  font-size: 10px;
}

.fh-master-landmark-icon {
  margin: 40px 0 25px;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  border: 1px solid #D8CEC1;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--fh-burgundy);
  font-size: 20px;
}

.fh-master-landmark-card h3 {
  color: var(--fh-navy);
  font-size: 23px;
  font-weight: 500;
  margin-bottom: 15px;
}

.fh-master-landmark-card p {
  color: #69645D;
  font-size: 12px;
  line-height: 1.8;
}

.fh-master-landmark-line {
  width: 32px;
  height: 2px;
  background: var(--fh-orange);
  margin-top: auto;
}

/* =========================
   FACILITIES
========================= */

.fh-master-facility-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.fh-master-facility-card {
  min-height: 190px;
  padding: 25px;

  border: 1px solid #26394D;
  background: var(--fh-navy-light);

  display: grid;
  grid-template-columns: 50px 1fr 25px;
  gap: 20px;
  align-items: start;

  transition: .25s ease;
}

.fh-master-facility-card:hover {
  border-color: var(--fh-orange);
}

.fh-master-facility-number {
  color: var(--fh-orange);
  font-size: 11px;
}

.fh-master-facility-card h3 {
  color: #ffffff;
  font-size: 22px;
  margin-bottom: 12px;
  font-weight: 500;
}

.fh-master-facility-card p {
  color: #B4B0A9;
  font-size: 12px;
  line-height: 1.8;
  margin-bottom: 0;
}

.fh-master-facility-arrow {
  color: var(--fh-orange);
}

/* =========================
   APPROACH
========================= */

.fh-master-approach {
  background: var(--fh-beige);
}

.fh-master-approach h2 em {
  color: var(--fh-burgundy);
}

/* =========================
   CTA
========================= */

.fh-master-cta {
  padding: 125px 0;
  text-align: center;

  color: #ffffff;

  background:
    linear-gradient(
      135deg,
      var(--fh-burgundy),
      #6C1725
    );
}

.fh-master-cta .fh-master-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fh-master-cta .fh-master-eyebrow {
  color: var(--fh-orange);
}

.fh-master-cta h2 {
  font-size: clamp(45px, 6vw, 76px);
  margin-bottom: 25px;
}

.fh-master-cta h2 em {
  color: var(--fh-orange);
}

.fh-master-cta > .fh-master-container > p:not(.fh-master-eyebrow) {
  max-width: 500px;
  color: #EAD9D4;
  line-height: 1.8;
  margin-bottom: 30px;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {

  .fh-master-container {
    width: min(100% - 36px, 680px);
  }

  .fh-master-overview-grid,
  .fh-master-approach-grid {
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .fh-master-section-heading {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .fh-master-block-grid {
    grid-template-columns: 1fr;
  }

  .fh-master-landmark-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .fh-master-facility-grid {
    grid-template-columns: 1fr;
  }

  .fh-master-plan-visual {
    height: 470px;
  }

  .fh-master-overview,
  .fh-master-visual-section,
  .fh-master-blocks,
  .fh-master-landmarks,
  .fh-master-facilities,
  .fh-master-approach {
    padding: 80px 0;
  }
}

@media (max-width: 520px) {

  .fh-master-container,
  .fh-master-hero-bottom {
    width: calc(100% - 32px);
  }

  .fh-master-hero {
    min-height: 640px;
  }

  .fh-master-hero-content {
    padding: 100px 0 90px;
  }

  .fh-master-hero h1 {
    font-size: 45px;
  }

  .fh-master-hero-text {
    font-size: 14px;
  }

  .fh-master-hero-bottom {
    flex-wrap: wrap;
    gap: 8px;
    font-size: 7px;
  }

  .fh-master-page h2 {
    font-size: 40px;
  }

  .fh-master-actions {
    width: 100%;
  }

  .fh-master-btn {
    width: 100%;
  }

  .fh-master-overview-facts {
    grid-template-columns: 1fr;
  }

  .fh-master-landmark-grid {
    grid-template-columns: 1fr;
  }

  .fh-master-plan-visual {
    height: 400px;
  }

  .fh-master-zone {
    font-size: 8px;
  }

  .fh-master-zone span {
    font-size: 7px;
  }

  .fh-master-plan-center {
    width: 110px;
    height: 110px;
    border-width: 3px;
  }

  .fh-master-plan-center strong {
    font-size: 9px;
  }

  .fh-master-plan-center span {
    font-size: 6px;
  }

  .fh-master-facility-card {
    grid-template-columns: 35px 1fr;
  }

  .fh-master-facility-arrow {
    display: none;
  }

  .fh-master-block-card {
    min-height: 340px;
  }

  .fh-master-cta {
    padding: 85px 0;
  }
}


      `}</style>
    </main>
  );
}