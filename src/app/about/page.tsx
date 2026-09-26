import type { Metadata } from "next";
import { getSiteOptions } from "@/lib/queries";
import ChairmanMessage from "@/components/home/ChairmanMessage";
import Overview from "@/components/home/Overview";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Faisal Hills Islamabad",
};






const blocks = ["Executive Block", "Block A", "Block B", "Block C", "Block D"];

const reasons = [
  {
    number: "01",
    title: "Legal Approvals",
    text: "The group focuses on obtaining the required approvals before marketing and developing its projects. Faisal Hills Islamabad comes under RDA approval.",
  },
  {
    number: "02",
    title: "Development on Ground",
    text: "Executive Block and Block A have developed roads, utilities, and houses, with families already living there.",
  },
  {
    number: "03",
    title: "Planned Development",
    text: "Faisal Hills is being developed in different blocks. Each block is being developed according to the overall master plan of the society.",
  },
  {
    number: "04",
    title: "Real Estate Experience",
    text: "Faisal Town Group has worked on several housing and real estate projects in Islamabad and Rawalpindi.",
  },
];

const facilities = [
  "Wide roads",
  "Electricity and utilities",
  "Schools",
  "Parks",
  "Mosques",
  "Commercial areas",
  "Residential areas",
];

const projects = [
  "Faisal Town Phase 1",
  "Faisal Town Phase 2",
  "Faisal Margalla City",
  "Faisal Heights",
  "Faisal Jewels",
];

export default function AboutPage() {
  return (
    <main className="fh-about-page">
      {/* Hero */}
      <section className="fh-about-hero">
        <div className="fh-about-hero-overlay" />

        <div className="fh-about-container fh-about-hero-content">
          <p className="fh-eyebrow">ABOUT FAISAL HILLS</p>

          <h1>
            Building Communities.
            <br />
            Creating <span>Possibilities.</span>
          </h1>

          <p className="fh-hero-description">
            Discover the vision, people, and planning behind Faisal Hills
            Islamabad — a residential community near GT Road and Taxila.
          </p>

          <div className="fh-hero-actions">
            <a href="#chairman" className="fh-btn fh-btn-primary">
              Meet Our Founder <span>↗</span>
            </a>

            <a href="#overview" className="fh-btn fh-btn-outline">
              Explore Our Story
            </a>
          </div>
        </div>

        <div className="fh-hero-bottom">
          <span>FAISAL HILLS ISLAMABAD</span>
          <span>GT ROAD · TAXILA</span>
        </div>
      </section>

      {/* Intro */}
      <section className="fh-intro-section" id="overview">
        <div className="fh-about-container fh-intro-grid">
          <div>
            <p className="fh-eyebrow fh-eyebrow-dark">
              OUR INTRODUCTION
            </p>
            <h2>
              A vision for
              <br />
              <em>better living.</em>
            </h2>
          </div>

          <div className="fh-intro-text">
            <p>
              Faisal Hills Islamabad is a large housing project located on
              GT Road near Taxila, with the Margalla Hills nearby. The
              community is positioned between GT Road and the M-1 Motorway.
            </p>

            <p>
              The project is being developed as a residential and commercial
              community with planned roads, utilities, homes, parks, and other
              facilities for families and future residents.
            </p>

            <div className="fh-intro-line" />

            <p className="fh-small-note">
              A planned community shaped by location, development, and
              long-term vision.
            </p>
          </div>
        </div>
      </section>

      {/* Chairman */}
      <section className="fh-chairman-section" id="chairman">
        <div className="fh-about-container fh-chairman-grid">
          <div className="fh-chairman-visual">
            <div className="fh-chairman-image-placeholder">
              <span>CHAIRMAN &amp; FOUNDER</span>
              <strong>CAM</strong>
            </div>

            <div className="fh-founder-label">
              <span>01</span>
              <p>Leadership &amp; Vision</p>
            </div>
          </div>

          <div className="fh-chairman-content">
            <p className="fh-eyebrow">CHAIRMAN &amp; FOUNDER</p>

            <h2>
              Chaudhry
              <br />
              Abdul <em>Majeed</em>
            </h2>

            <p className="fh-lead">
              The leadership behind Faisal Hills Islamabad and Faisal Town
              Group.
            </p>

            <p>
              Chaudhry Abdul Majeed is the Chairman of Faisal Town Group and
              the main person behind Faisal Hills Islamabad. He has been
              working in the property business in Islamabad and Rawalpindi
              for over 10 years.
            </p>

            <p>
              He has also developed projects like Faisal Town Phase 1, Faisal
              Town Phase 2, and Faisal Margalla City. His focus is to obtain
              the required approvals first and then move forward with the
              development and sale of plots.
            </p>

            <p>
              His two sons, Ch Zohair Majeed and Ch Moazam Majeed, are also
              working with him as directors at Faisal Town Group. They help
              manage the group's development projects, including Faisal Hills.
            </p>

            <div className="fh-signature">FAISAL TOWN GROUP</div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="fh-overview-section">
        <div className="fh-about-container">
          <div className="fh-section-heading">
            <div>
              <p className="fh-eyebrow fh-eyebrow-dark">
                THE PROJECT
              </p>
              <h2>
                Faisal Hills
                <br />
                <em>Islamabad Overview</em>
              </h2>
            </div>

            <p>
              A large housing community near Taxila, connecting residents to
              important areas around Islamabad and Rawalpindi.
            </p>
          </div>

          <div className="fh-overview-grid">
            <div className="fh-overview-copy">
              <p>
                Faisal Hills Islamabad is located on GT Road near Taxila. The
                project is spread over around 11,823 Kanal, with the Margalla
                Hills nearby.
              </p>

              <p>
                The society comes under the Rawalpindi Development Authority
                (RDA), and its residential and commercial areas have the
                required approval.
              </p>

              <p>
                The society is located between GT Road and M-1 Motorway. It is
                also close to Multi Gardens B-17 and can be accessed through
                Margalla Avenue and Srinagar Highway.
              </p>
            </div>

            <div className="fh-location-card">
              <div className="fh-location-top">
                <span>LOCATION</span>
                <span>ISLAMABAD REGION</span>
              </div>

              <div className="fh-location-graphic">
                <div className="fh-location-ring ring-one" />
                <div className="fh-location-ring ring-two" />
                <div className="fh-location-pin">✦</div>
                <span className="location-label label-gt">GT ROAD</span>
                <span className="location-label label-m1">M-1 MOTORWAY</span>
                <span className="location-label label-taxila">TAXILA</span>
              </div>

              <div className="fh-location-bottom">
                <strong>GT Road, near Taxila</strong>
                <span>Margalla Hills · Islamabad Region</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blocks */}
      <section className="fh-blocks-section">
        <div className="fh-about-container">
          <div className="fh-section-heading fh-heading-light">
            <div>
              <p className="fh-eyebrow">MASTER-PLANNED COMMUNITY</p>
              <h2>
                Designed in
                <br />
                <em>distinct blocks.</em>
              </h2>
            </div>

            <p>
              Faisal Hills is divided into different blocks rather than
              sectors. Development is taking place block by block.
            </p>
          </div>

          <div className="fh-blocks-grid">
            {blocks.map((block, index) => (
              <div className="fh-block-card" key={block}>
                <span>0{index + 1}</span>
                <h3>{block}</h3>
                <p>
                  {index < 2
                    ? "Developed areas with residential activity."
                    : "Part of the ongoing block-by-block development."}
                </p>
                <div className="fh-block-arrow">↗</div>
              </div>
            ))}
          </div>

          <p className="fh-blocks-note">
            Some areas are already developed, while work is continuing in
            other blocks.
          </p>
        </div>
      </section>

      {/* Living and Development */}
      <section className="fh-living-section">
        <div className="fh-about-container fh-living-grid">
          <div>
            <p className="fh-eyebrow fh-eyebrow-dark">
              LIVING &amp; DEVELOPMENT
            </p>

            <h2>
              More than
              <br />
              <em>an investment.</em>
            </h2>
          </div>

          <div>
            <p>
              Faisal Hills is not only a project for future investment.
              Executive Block and Block A already have built houses and
              residents.
            </p>

            <p>
              These areas have roads, utilities, and basic facilities.
              Development in the other blocks is also continuing.
            </p>

            <p>
              The main aim is to develop Faisal Hills as a place where
              families can live comfortably, rather than making it only a
              plot investment project.
            </p>
          </div>
        </div>
      </section>

      {/* Developer */}
      <section className="fh-developer-section">
        <div className="fh-about-container">
          <div className="fh-section-heading">
            <div>
              <p className="fh-eyebrow fh-eyebrow-dark">
                OUR DEVELOPMENT GROUP
              </p>
              <h2>
                Who developed
                <br />
                <em>Faisal Hills?</em>
              </h2>
            </div>

            <p>
              Faisal Hills Islamabad is a project of Faisal Town Group, which
              has worked in the Islamabad and Rawalpindi real estate market
              for more than 10 years.
            </p>
          </div>

          <div className="fh-developer-grid">
            <div className="fh-developer-copy">
              <p>
                Faisal Hills is one of the group's main housing projects.
                The group focuses on housing projects with proper planning,
                approvals, roads, utilities, and other basic facilities.
              </p>

              <p>
                Other projects associated with Faisal Town Group include:
              </p>
            </div>

            <div className="fh-project-list">
              {projects.map((project, index) => (
                <div className="fh-project-row" key={project}>
                  <span>0{index + 1}</span>
                  <strong>{project}</strong>
                  <span>↗</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="fh-vision-section">
        <div className="fh-about-container fh-vision-grid">
          <div>
            <p className="fh-eyebrow">OUR VISION</p>
            <h2>
              Creating a
              <br />
              <em>complete community.</em>
            </h2>
          </div>

          <div className="fh-vision-content">
            <p className="fh-vision-lead">
              The main goal of Faisal Hills Islamabad is to create a proper
              residential community where people can build homes and live
              with their families.
            </p>

            <p>
              The development plan focuses on important facilities and
              long-term community needs.
            </p>

            <div className="fh-facilities-grid">
              {facilities.map((facility, index) => (
                <div className="fh-facility" key={facility}>
                  <span>0{index + 1}</span>
                  {facility}
                </div>
              ))}
            </div>

            <p className="fh-vision-bottom">
              Proper planning, legal approvals, and continued development
              are important parts of this goal.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="fh-mission-section">
        <div className="fh-about-container fh-mission-grid">
          <div>
            <p className="fh-eyebrow fh-eyebrow-dark">
              OUR APPROACH
            </p>
            <h2>
              Planning for
              <br />
              <em>long-term value.</em>
            </h2>
          </div>

          <div className="fh-mission-copy">
            <p>
              The development approach focuses on building a residential
              community with proper planning and the facilities needed for
              everyday living.
            </p>

            <p>
              Legal approvals, infrastructure, utilities, and continued
              development are important parts of creating a well-planned
              housing project.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="fh-reasons-section">
        <div className="fh-about-container">
          <div className="fh-section-heading fh-heading-light">
            <div>
              <p className="fh-eyebrow">OUR KEY PILLARS</p>
              <h2>
                Why choose
                <br />
                <em>Faisal Town Group?</em>
              </h2>
            </div>

            <p>
              A focus on planning, development, approvals, and experience in
              the real estate sector.
            </p>
          </div>

          <div className="fh-reasons-grid">
            {reasons.map((reason) => (
              <article className="fh-reason-card" key={reason.number}>
                <span className="fh-reason-number">{reason.number}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
                <div className="fh-reason-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Families and Investors */}
      <section className="fh-community-section">
        <div className="fh-about-container fh-community-grid">
          <div>
            <p className="fh-eyebrow fh-eyebrow-dark">
              OUR COMMUNITY
            </p>

            <h2>
              For families,
              <br />
              <em>buyers &amp; investors.</em>
            </h2>
          </div>

          <div className="fh-community-copy">
            <p>
              Faisal Hills attracts different types of buyers. Local families
              can consider it for building a home near Islamabad, while
              investors look at the area for its location and ongoing
              development.
            </p>

            <p>
              It can also be an option for overseas Pakistanis who want to
              invest in a housing society near Islamabad and Taxila.
            </p>

            <p>
              With its location near GT Road, M-1 Motorway, B-17, and
              Margalla Hills, Faisal Hills has access to several important
              areas around Islamabad and Rawalpindi.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="fh-about-cta">
        <div className="fh-about-container fh-cta-inner">
          <p className="fh-eyebrow">DISCOVER FAISAL HILLS</p>

          <h2>
            Your next chapter
            <br />
            <em>starts here.</em>
          </h2>

          <p>
            Explore the blocks, location, and development of Faisal Hills
            Islamabad.
          </p>

          <div className="fh-hero-actions">
            <Link href="/" className="fh-btn fh-btn-primary">
              Explore Faisal Hills <span>↗</span>
            </Link>

            <Link href="/contact-us" className="fh-btn fh-btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <style>{`
  /* =========================================================
     FAISAL HILLS ABOUT PAGE
     HOMEPAGE COLOR SYSTEM
     Navy + Burgundy + Cream + White
     ========================================================= */

  .fh-about-page {
    --fh-navy: #0b1220;
    --fh-navy-light: #121c2d;
    --fh-burgundy: #7a1930;
    --fh-burgundy-dark: #621326;

    --fh-cream: #f7f4ee;
    --fh-cream-dark: #eee9e0;

    --fh-white: #ffffff;

    --fh-text: #1a1a1a;
    --fh-muted: #68645f;
    --fh-muted-light: #aaa7a1;

    --fh-border: #ddd9d2;
    --fh-dark-border: #2b3444;

    color: var(--fh-text);
    background: var(--fh-cream);
    overflow: hidden;
  }

  .fh-about-page *,
  .fh-about-page *::before,
  .fh-about-page *::after {
    box-sizing: border-box;
  }

  .fh-about-container {
    width: min(1180px, calc(100% - 48px));
    margin: 0 auto;
  }

  .fh-about-page h1,
  .fh-about-page h2,
  .fh-about-page h3,
  .fh-about-page p {
    margin-top: 0;
  }

  .fh-about-page h1,
  .fh-about-page h2,
  .fh-about-page h3 {
    letter-spacing: -0.045em;
  }

  .fh-about-page h1,
  .fh-about-page h2 {
    font-weight: 500;
    line-height: 1.05;
  }

  .fh-about-page h1 em,
  .fh-about-page h2 em {
    color: var(--fh-burgundy);
    font-family: Georgia, serif;
    font-weight: 400;
  }

  /* =========================================================
     EYEBROW
     ========================================================= */

  .fh-eyebrow {
    color: #cfc7bd;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    margin-bottom: 22px;
  }

  .fh-eyebrow-dark {
    color: var(--fh-burgundy);
  }

  /* =========================================================
     HERO
     ========================================================= */

  .fh-about-hero {
    min-height: 700px;
    position: relative;
    display: flex;
    align-items: center;
    color: var(--fh-white);

    background:
      radial-gradient(
        circle at 80% 20%,
        rgba(122, 25, 48, 0.45),
        transparent 34%
      ),
      linear-gradient(
        135deg,
        #080d17 0%,
        #0b1220 48%,
        #1c2739 100%
      );
  }

  .fh-about-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.22;

    background-image:
      linear-gradient(
        115deg,
        transparent 48%,
        rgba(255, 255, 255, 0.08) 49%,
        transparent 50%
      ),
      linear-gradient(
        -115deg,
        transparent 48%,
        rgba(255, 255, 255, 0.05) 49%,
        transparent 50%
      );

    background-size: 150px 150px;
  }

  .fh-about-hero-overlay {
    position: absolute;
    inset: 0;

    background:
      radial-gradient(
        circle at 82% 28%,
        rgba(122, 25, 48, 0.35),
        transparent 32%
      ),
      linear-gradient(
        90deg,
        rgba(5, 9, 16, 0.96),
        rgba(8, 14, 24, 0.55),
        rgba(8, 14, 24, 0.25)
      );
  }

  .fh-about-hero-content {
    position: relative;
    z-index: 1;
    padding: 120px 0 100px;
  }

  .fh-about-hero h1 {
    font-size: clamp(42px, 6.2vw, 84px);
    max-width: 800px;
    margin-bottom: 30px;
  }

  .fh-about-hero h1 em {
    color: var(--fh-burgundy);
  }

  .fh-hero-description {
    max-width: 480px;
    color: #d5d9df;
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 34px;
  }

  .fh-hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  /* =========================================================
     BUTTONS
     ========================================================= */

  .fh-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 22px;

    min-height: 54px;
    padding: 14px 22px;

    border: 1px solid transparent;

    text-decoration: none;

    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    transition:
      transform 0.25s ease,
      opacity 0.25s ease,
      background 0.25s ease,
      border-color 0.25s ease;
  }

  .fh-btn-primary {
    background: var(--fh-burgundy);
    color: var(--fh-white);
  }

  .fh-btn-primary:hover {
    background: var(--fh-burgundy-dark);
  }

  .fh-btn-outline {
    color: var(--fh-white);
    border-color: rgba(255, 255, 255, 0.42);
  }

  .fh-btn-outline:hover {
    border-color: var(--fh-white);
    background: rgba(255, 255, 255, 0.06);
  }

  .fh-btn:hover {
    transform: translateY(-2px);
    opacity: 0.92;
  }

  /* =========================================================
     HERO BOTTOM
     ========================================================= */

  .fh-hero-bottom {
    position: absolute;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);

    width: min(1180px, calc(100% - 48px));

    display: flex;
    justify-content: space-between;
    gap: 20px;

    color: #aeb5bf;

    font-size: 10px;
    letter-spacing: 0.15em;
  }

  /* =========================================================
     GENERAL LIGHT SECTIONS
     ========================================================= */

  .fh-intro-section,
  .fh-overview-section,
  .fh-living-section,
  .fh-developer-section,
  .fh-community-section {
    padding: 110px 0;
    background: var(--fh-cream);
  }

  .fh-intro-grid,
  .fh-living-grid,
  .fh-community-grid,
  .fh-mission-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 90px;
    align-items: start;
  }

  .fh-about-page h2 {
    font-size: clamp(38px, 4.6vw, 65px);
    margin-bottom: 30px;
  }

  .fh-intro-text,
  .fh-living-grid > div:last-child,
  .fh-community-copy,
  .fh-mission-copy {
    color: var(--fh-muted);
    font-size: 16px;
    line-height: 1.9;
  }

  .fh-intro-text p,
  .fh-living-grid p,
  .fh-community-copy p,
  .fh-mission-copy p {
    margin-bottom: 22px;
  }

  .fh-intro-line {
    width: 70px;
    height: 2px;
    background: var(--fh-burgundy);
    margin: 30px 0;
  }

  .fh-small-note {
    color: var(--fh-burgundy);
    font-size: 13px;
    font-weight: 600;
  }

  /* =========================================================
     CHAIRMAN SECTION
     ========================================================= */

  .fh-chairman-section {
    padding: 120px 0;
    color: var(--fh-white);
    background: var(--fh-navy);
  }

  .fh-chairman-grid {
    display: grid;
    grid-template-columns: 0.85fr 1.15fr;
    gap: 90px;
    align-items: center;
  }

  .fh-chairman-visual {
    position: relative;
  }

  .fh-chairman-image-placeholder {
    min-height: 520px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;
    overflow: hidden;

    background:
      radial-gradient(
        circle at 50% 35%,
        rgba(122, 25, 48, 0.62),
        transparent 25%
      ),
      linear-gradient(
        145deg,
        #0b1220,
        #1b2739
      );
  }

  .fh-chairman-image-placeholder::before {
    content: "";
    position: absolute;

    width: 260px;
    height: 360px;

    border-radius: 50% 50% 0 0;

    bottom: -100px;

    background: rgba(2, 6, 12, 0.72);
  }

  .fh-chairman-image-placeholder::after {
    content: "";
    position: absolute;
    inset: 0;

    background:
      linear-gradient(
        135deg,
        transparent 48%,
        rgba(255, 255, 255, 0.04) 49%,
        transparent 50%
      );

    background-size: 90px 90px;
  }

  .fh-chairman-image-placeholder span,
  .fh-chairman-image-placeholder strong {
    position: relative;
    z-index: 1;
  }

  .fh-chairman-image-placeholder span {
    font-size: 10px;
    letter-spacing: 0.2em;
    color: #d0aeb6;
  }

  .fh-chairman-image-placeholder strong {
    font-size: 100px;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 500;
    letter-spacing: -0.1em;
  }

  .fh-founder-label {
    display: flex;
    align-items: center;
    gap: 20px;

    padding-top: 20px;

    color: #969faa;

    font-size: 11px;
    letter-spacing: 0.1em;
  }

  .fh-founder-label span {
    color: var(--fh-burgundy);
  }

  .fh-chairman-content h2 {
    font-size: clamp(42px, 5vw, 70px);
    margin-bottom: 25px;
  }

  .fh-chairman-content h2 em {
    color: #d9aeb8;
  }

  .fh-chairman-content p {
    color: #b8bec7;
    font-size: 15px;
    line-height: 1.9;
    margin-bottom: 22px;
  }

  .fh-chairman-content .fh-lead {
    color: #e2c0c8;
    font-size: 18px;
    line-height: 1.6;
  }

  .fh-signature {
    display: inline-block;

    border-top: 1px solid #344052;

    padding-top: 16px;
    margin-top: 18px;

    color: #d3aeb7;

    font-size: 10px;
    letter-spacing: 0.2em;
  }

  /* =========================================================
     SECTION HEADINGS
     ========================================================= */

  .fh-section-heading {
    display: grid;
    grid-template-columns: 1fr 0.75fr;
    gap: 80px;
    align-items: end;
    margin-bottom: 65px;
  }

  .fh-section-heading > p {
    color: var(--fh-muted);
    font-size: 15px;
    line-height: 1.9;
    margin-bottom: 0;
  }

  /* =========================================================
     OVERVIEW
     ========================================================= */

  .fh-overview-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: stretch;
  }

  .fh-overview-copy {
    color: var(--fh-muted);
    font-size: 16px;
    line-height: 1.9;
  }

  .fh-overview-copy p {
    margin-bottom: 26px;
  }

  /* =========================================================
     LOCATION CARD
     ========================================================= */

  .fh-location-card {
    background: var(--fh-white);

    padding: 24px;

    display: flex;
    flex-direction: column;

    min-height: 400px;

    border: 1px solid var(--fh-border);
  }

  .fh-location-top,
  .fh-location-bottom {
    display: flex;
    justify-content: space-between;
    gap: 12px;

    font-size: 10px;
    letter-spacing: 0.1em;
  }

  .fh-location-top {
    color: var(--fh-burgundy);
  }

  .fh-location-graphic {
    flex: 1;
    min-height: 230px;

    position: relative;

    margin: 20px 0;

    overflow: hidden;

    background:
      linear-gradient(
        35deg,
        transparent 49%,
        rgba(122, 25, 48, 0.16) 50%,
        transparent 51%
      ),
      linear-gradient(
        -35deg,
        transparent 49%,
        rgba(122, 25, 48, 0.10) 50%,
        transparent 51%
      ),
      #f3f0eb;
  }

  .fh-location-graphic::before {
    content: "";
    position: absolute;
    inset: 0;

    background-image:
      linear-gradient(
        rgba(11, 18, 32, 0.04) 1px,
        transparent 1px
      ),
      linear-gradient(
        90deg,
        rgba(11, 18, 32, 0.04) 1px,
        transparent 1px
      );

    background-size: 35px 35px;
  }

  .fh-location-ring {
    position: absolute;

    border: 1px solid rgba(122, 25, 48, 0.28);

    border-radius: 50%;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
  }

  .ring-one {
    width: 220px;
    height: 220px;
  }

  .ring-two {
    width: 120px;
    height: 120px;
  }

  .fh-location-pin {
    position: absolute;

    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);

    color: var(--fh-burgundy);
    font-size: 32px;
  }

  .location-label {
    position: absolute;

    color: #68645f;

    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.1em;
  }

  .label-gt {
    top: 20px;
    left: 15px;
  }

  .label-m1 {
    right: 10px;
    bottom: 20px;
  }

  .label-taxila {
    right: 20px;
    top: 35px;
  }

  .fh-location-bottom {
    flex-direction: column;

    border-top: 1px solid rgba(122, 25, 48, 0.18);

    padding-top: 20px;

    color: var(--fh-burgundy);
  }

  .fh-location-bottom span {
    color: #77736e;
    letter-spacing: 0;
  }

  /* =========================================================
     DARK BLOCKS SECTION
     ========================================================= */

  .fh-blocks-section,
  .fh-reasons-section {
    background: var(--fh-navy);
    color: var(--fh-white);
    padding: 115px 0;
  }

  .fh-heading-light > p {
    color: #a7afbb;
  }

  .fh-heading-light h2 em {
    color: #d9aeb8;
  }

  .fh-blocks-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
  }

  .fh-block-card {
    position: relative;

    min-height: 260px;
    padding: 24px;

    border: 1px solid var(--fh-dark-border);

    display: flex;
    flex-direction: column;

    background:
      linear-gradient(
        145deg,
        #111a2a,
        #0b1220
      );

    transition:
      transform 0.25s ease,
      border-color 0.25s ease;
  }

  .fh-block-card:hover {
    border-color: var(--fh-burgundy);
    transform: translateY(-4px);
  }

  .fh-block-card > span {
    color: #c28c9a;
    font-size: 11px;
  }

  .fh-block-card h3 {
    font-size: 25px;
    margin-top: auto;
    margin-bottom: 15px;
  }

  .fh-block-card p {
    color: #a7afbb;
    font-size: 12px;
    line-height: 1.7;
    margin-bottom: 35px;
  }

  .fh-block-arrow {
    position: absolute;

    right: 22px;
    top: 20px;

    color: #c28c9a;
    font-size: 20px;
  }

  .fh-blocks-note {
    color: #89929f;
    font-size: 13px;
    margin-top: 25px;
  }

  /* =========================================================
     LIVING / DEVELOPMENT
     ========================================================= */

  .fh-living-section {
    background: var(--fh-cream);
  }

  /* =========================================================
     DEVELOPER
     ========================================================= */

  .fh-developer-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 100px;
  }

  .fh-developer-copy {
    color: var(--fh-muted);
    line-height: 1.9;
    font-size: 15px;
  }

  .fh-project-list {
    border-top: 1px solid var(--fh-border);
  }

  .fh-project-row {
    display: grid;
    grid-template-columns: 45px 1fr 30px;

    align-items: center;
    gap: 15px;

    padding: 22px 0;

    border-bottom: 1px solid var(--fh-border);

    color: var(--fh-burgundy);
  }

  .fh-project-row span {
    font-size: 11px;
    color: #99938b;
  }

  .fh-project-row strong {
    font-size: 17px;
    font-weight: 500;
  }

  .fh-project-row span:last-child {
    color: var(--fh-burgundy);
  }

  /* =========================================================
     VISION
     ========================================================= */

  .fh-vision-section {
    padding: 120px 0;

    background:
      linear-gradient(
        135deg,
        #7a1930,
        #671426
      );

    color: var(--fh-white);
  }

  .fh-vision-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 100px;
  }

  .fh-vision-section h2 em {
    color: #ffffff;
  }

  .fh-vision-content {
    color: #eadfe2;
    line-height: 1.9;
  }

  .fh-vision-lead {
    color: var(--fh-white);
    font-size: 21px;
    line-height: 1.6;
  }

  .fh-facilities-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 0 30px;

    border-top: 1px solid rgba(255, 255, 255, 0.25);

    margin: 35px 0;
  }

  .fh-facility {
    padding: 16px 0;

    border-bottom: 1px solid rgba(255, 255, 255, 0.25);

    display: flex;
    align-items: center;

    gap: 14px;

    font-size: 14px;
  }

  .fh-facility span {
    color: #e0b3bd;
    font-size: 10px;
  }

  .fh-vision-bottom {
    font-size: 13px;
    color: #d9c2c8;
  }

  /* =========================================================
     MISSION
     ========================================================= */

  .fh-mission-section {
    padding: 110px 0;
    background: var(--fh-white);
  }

  .fh-mission-copy {
    color: var(--fh-muted);
  }

  /* =========================================================
     REASONS / KEY PILLARS
     ========================================================= */

  .fh-reasons-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }

  .fh-reason-card {
    padding: 30px 25px;

    min-height: 330px;

    border: 1px solid var(--fh-dark-border);

    display: flex;
    flex-direction: column;

    background: rgba(255, 255, 255, 0.015);

    transition:
      transform 0.25s ease,
      border-color 0.25s ease,
      background 0.25s ease;
  }

  .fh-reason-card:hover {
    transform: translateY(-4px);
    border-color: var(--fh-burgundy);
    background: rgba(122, 25, 48, 0.08);
  }

  .fh-reason-number {
    color: #c28c9a;
    font-size: 12px;
    margin-bottom: 65px;
  }

  .fh-reason-card h3 {
    font-size: 23px;
    margin-bottom: 20px;
  }

  .fh-reason-card p {
    color: #a7afbb;
    font-size: 13px;
    line-height: 1.8;
  }

  .fh-reason-line {
    margin-top: auto;

    height: 2px;
    width: 35px;

    background: var(--fh-burgundy);
  }

  /* =========================================================
     COMMUNITY
     ========================================================= */

  .fh-community-section {
    background: var(--fh-cream);
  }

  /* =========================================================
     FINAL CTA
     ========================================================= */

  .fh-about-cta {
    padding: 125px 0;

    background:
      radial-gradient(
        circle at 80% 20%,
        rgba(122, 25, 48, 0.35),
        transparent 35%
      ),
      linear-gradient(
        135deg,
        #080d17,
        #0b1220 55%,
        #162235
      );

    color: var(--fh-white);
    text-align: center;
  }

  .fh-cta-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .fh-cta-inner h2 {
    font-size: clamp(40px, 5.5vw, 72px);
    margin-bottom: 25px;
  }

  .fh-cta-inner h2 em {
    color: #d9aeb8;
  }

  .fh-cta-inner > p:not(.fh-eyebrow) {
    color: #b7bec9;
    line-height: 1.8;

    max-width: 480px;

    margin-bottom: 30px;
  }

  /* =========================================================
     RESPONSIVE — TABLET
     ========================================================= */

  @media (max-width: 900px) {

    .fh-about-container {
      width: min(100% - 36px, 680px);
    }

    .fh-about-hero {
      min-height: 620px;
    }

    .fh-intro-grid,
    .fh-living-grid,
    .fh-community-grid,
    .fh-mission-grid,
    .fh-chairman-grid,
    .fh-overview-grid,
    .fh-developer-grid,
    .fh-vision-grid {
      grid-template-columns: 1fr;
      gap: 45px;
    }

    .fh-section-heading {
      grid-template-columns: 1fr;
      gap: 10px;
      margin-bottom: 40px;
    }

    .fh-blocks-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .fh-reasons-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .fh-chairman-image-placeholder {
      min-height: 360px;
    }

    .fh-intro-section,
    .fh-overview-section,
    .fh-living-section,
    .fh-developer-section,
    .fh-community-section,
    .fh-chairman-section,
    .fh-blocks-section,
    .fh-reasons-section,
    .fh-vision-section,
    .fh-mission-section {
      padding: 75px 0;
    }

    .fh-about-cta {
      padding: 90px 0;
    }
  }

  /* =========================================================
     RESPONSIVE — MOBILE
     ========================================================= */

  @media (max-width: 520px) {

    .fh-about-container,
    .fh-hero-bottom {
      width: calc(100% - 32px);
    }

    .fh-about-hero-content {
      padding: 100px 0 85px;
    }

    .fh-about-hero h1 {
      font-size: 43px;
    }

    .fh-hero-description {
      font-size: 14px;
    }

    .fh-hero-bottom {
      font-size: 8px;
    }

    .fh-about-page h2 {
      font-size: 40px;
    }

    .fh-blocks-grid,
    .fh-reasons-grid,
    .fh-facilities-grid {
      grid-template-columns: 1fr;
    }

    .fh-block-card {
      min-height: 210px;
    }

    .fh-reason-card {
      min-height: 260px;
    }

    .fh-reason-number {
      margin-bottom: 35px;
    }

    .fh-chairman-image-placeholder {
      min-height: 320px;
    }

    .fh-chairman-image-placeholder strong {
      font-size: 80px;
    }

    .fh-btn {
      width: 100%;
    }

    .fh-hero-actions {
      width: 100%;
    }

    .fh-hero-bottom {
      flex-wrap: wrap;
      bottom: 18px;
    }

    .fh-section-heading {
      gap: 5px;
    }

    .fh-location-card {
      min-height: 350px;
    }

    .fh-location-graphic {
      min-height: 200px;
    }

    .ring-one {
      width: 180px;
      height: 180px;
    }

    .ring-two {
      width: 100px;
      height: 100px;
    }

    .fh-vision-lead {
      font-size: 18px;
    }

    .fh-project-row {
      grid-template-columns: 35px 1fr 25px;
      gap: 10px;
    }

    .fh-project-row strong {
      font-size: 14px;
    }

    .fh-about-cta {
      padding: 80px 0;
    }
  }
`}</style>
    </main>
  );
}