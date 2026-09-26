import type { Metadata } from "next";
import { getLandmarks, getSiteOptions } from "@/lib/queries";
import LocationSection from "@/components/home/LocationSection";


import Link from "next/link";


export const metadata: Metadata = {
  title: "Location | Faisal Hills Islamabad",
  description:
    "Explore the location, connectivity, accessible points and nearby landmarks of Faisal Hills Islamabad.",
};

const accessiblePoints = [
  ["05", "N 125"],
  ["05", "Quaid Avenue"],
  ["06", "Kalabagh Nathia Gali Road"],
  ["10", "Tarnol Morr"],
  ["15", "Islamabad International Airport"],
  ["21", "Kohat Rawalpindi Road"],
  ["22", "M-1 Peshawar Islamabad Motorway"],
  ["22", "Srinagar Highway"],
  ["25", "M-14 CPEC Route"],
];

const landmarks = [
  "Islamabad",
  "Taxila City",
  "Rawalpindi",
  "Taxila Museum",
  "Multi Gardens B-17",
  "HITEC University Taxila",
  "Hill View Housing Scheme",
  "Islamabad International Airport",
];

const uniqueFeatures = [
  {
    number: "01",
    title: "Margalla Hills View",
    text: "The beauty of the Margalla Hills provides a natural backdrop for sustainable living.",
  },
  {
    number: "02",
    title: "Access to Margalla Avenue",
    text: "Its proximity to Margalla Avenue, also known as Iran Avenue, provides convenient access from Islamabad.",
  },
  {
    number: "03",
    title: "Future Connectivity via M-1",
    text: "Plans for an interchange on the M-1 Motorway are expected to further improve connectivity in the area.",
  },
];

export default function LocationPage() {
  return (
    <main className="fh-location-page">
      {/* HERO */}
      <section className="fh-location-hero">
        <div className="fh-location-hero-overlay" />

        <div className="fh-location-container fh-location-hero-content">
          <p className="fh-location-eyebrow">FAISAL HILLS ISLAMABAD</p>

          <h1>
            A location
            <br />
            <span>that connects.</span>
          </h1>

          <p className="fh-location-hero-text">
            Strategically located along G.T. Road near Taxila, Faisal Hills
            offers convenient access to Islamabad, Rawalpindi, M-1 Motorway,
            Margalla Avenue and the Islamabad International Airport.
          </p>

          <div className="fh-location-buttons">
            <a href="#overview" className="fh-location-btn fh-location-btn-main">
              Explore Location <span>↓</span>
            </a>

            <a href="#accessible" className="fh-location-btn fh-location-btn-light">
              Accessible Points
            </a>
          </div>
        </div>

        <div className="fh-location-hero-bottom">
          <span>G.T. ROAD · TAXILA</span>
          <span>M-1 · MARGALLA AVENUE</span>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="fh-location-overview" id="overview">
        <div className="fh-location-container fh-location-overview-grid">
          <div>
            <p className="fh-location-eyebrow fh-location-eyebrow-dark">
              LOCATION OVERVIEW
            </p>

            <h2>
              Connected to
              <br />
              <em>what matters.</em>
            </h2>
          </div>

          <div className="fh-location-copy">
            <p>
              Faisal Hills is very conveniently located along the major
              highway, G.T. Road, which runs through Taxila. It is also close
              to the Peshawar-Islamabad Motorway M-1 and to Margalla Avenue.
            </p>

            <p>
              The importance of Faisal Hills' location is further enhanced by
              the construction of the Margalla Avenue Extension, which will
              connect to the M-1 Motorway.
            </p>

            <p>
              In addition, the Islamabad International Airport is close by,
              making travel convenient for foreign clients and those who
              prefer to travel by air.
            </p>

            <div className="fh-location-divider" />

            <p className="fh-location-highlight">
              G.T. Road · M-1 Motorway · Margalla Avenue · Islamabad Airport
            </p>
          </div>
        </div>
      </section>

      {/* LOCATION MAP STYLE SECTION */}
      <section className="fh-location-map-section">
        <div className="fh-location-container">
          <div className="fh-location-section-heading">
            <div>
              <p className="fh-location-eyebrow fh-location-eyebrow-dark">
                FAISAL HILLS LOCATION
              </p>

              <h2>
                Positioned at the
                <br />
                <em>heart of connectivity.</em>
              </h2>
            </div>

            <p>
              Faisal Hills has been designed on the important G.T. Road near
              Taxila, with major highways, motorways and Islamabad's key
              access routes nearby.
            </p>
          </div>

          <div className="fh-location-map-card">
            <div className="fh-map-road road-one">
              <span>G.T. ROAD</span>
            </div>

            <div className="fh-map-road road-two">
              <span>M-1 MOTORWAY</span>
            </div>

            <div className="fh-map-road road-three">
              <span>MARGALLA AVENUE</span>
            </div>

            <div className="fh-map-route route-one" />
            <div className="fh-map-route route-two" />

            <div className="fh-map-center">
              <div className="fh-map-pin">●</div>
              <strong>FAISAL HILLS</strong>
              <span>ISLAMABAD REGION</span>
            </div>

            <div className="fh-map-place place-taxila">
              <span />
              Taxila
            </div>

            <div className="fh-map-place place-islamabad">
              <span />
              Islamabad
            </div>

            <div className="fh-map-place place-b17">
              <span />
              Multi Gardens B-17
            </div>

            <div className="fh-map-place place-airport">
              <span />
              Islamabad International Airport
            </div>

            <div className="fh-map-note">
              Strategic location near G.T. Road, M-1 Motorway and Margalla
              Avenue
            </div>
          </div>
        </div>
      </section>

      {/* ACCESSIBLE POINTS */}
      <section className="fh-location-access" id="accessible">
        <div className="fh-location-container">
          <div className="fh-location-section-heading fh-location-heading-light">
            <div>
              <p className="fh-location-eyebrow">ACCESSIBLE POINTS</p>

              <h2>
                Major destinations,
                <br />
                <em>within easy reach.</em>
              </h2>
            </div>

            <p>
              Faisal Hills provides access to important roads, highways,
              motorways and destinations around Islamabad, Rawalpindi and
              Taxila.
            </p>
          </div>

          <div className="fh-access-grid">
            {accessiblePoints.map(([time, place], index) => (
              <div className="fh-access-card" key={place}>
                <span className="fh-access-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="fh-access-time">
                  <strong>{time}</strong>
                  <small>MIN</small>
                </div>

                <h3>{place}</h3>

                <span className="fh-access-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LANDMARKS */}
      <section className="fh-location-landmarks">
        <div className="fh-location-container">
          <div className="fh-location-section-heading">
            <div>
              <p className="fh-location-eyebrow fh-location-eyebrow-dark">
                NEARBY LANDMARKS
              </p>

              <h2>
                Close to the
                <br />
                <em>places you know.</em>
              </h2>
            </div>

            <p>
              The location connects Faisal Hills with major cities,
              educational institutions, commercial areas, heritage sites and
              transportation facilities.
            </p>
          </div>

          <div className="fh-landmarks-grid">
            {landmarks.map((landmark, index) => (
              <div className="fh-landmark-card" key={landmark}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{landmark}</h3>

                <div>↗</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIQUE LOCATION */}
      <section className="fh-location-unique">
        <div className="fh-location-container">
          <div className="fh-location-section-heading fh-location-heading-light">
            <div>
              <p className="fh-location-eyebrow">WHAT MAKES IT UNIQUE</p>

              <h2>
                More than a
                <br />
                <em>location.</em>
              </h2>
            </div>

            <p>
              Faisal Hills has exceptional connectivity due to its easy access
              to major roads and motorways. It links the Gandhara region's
              heritage with modern Islamabad.
            </p>
          </div>

          <div className="fh-unique-grid">
            {uniqueFeatures.map((feature) => (
              <article className="fh-unique-card" key={feature.number}>
                <span>{feature.number}</span>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>

                <div className="fh-unique-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL DESCRIPTION */}
      <section className="fh-location-final">
        <div className="fh-location-container fh-location-final-grid">
          <div>
            <p className="fh-location-eyebrow fh-location-eyebrow-dark">
              CONNECTED LIVING
            </p>

            <h2>
              Where convenience
              <br />
              meets <em>community.</em>
            </h2>
          </div>

          <div className="fh-location-copy">
            <p>
              The society has become an attractive place to live, with access
              to major roads, highways and surrounding destinations.
            </p>

            <p>
              Its location near G.T. Road, M-1 Motorway, Margalla Avenue,
              Islamabad and Taxila provides connectivity to several important
              areas around Islamabad and Rawalpindi.
            </p>

            <p>
              Faisal Hills brings together accessibility, surrounding
              landmarks and proximity to the Margalla Hills in one planned
              residential location.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fh-location-cta">
        <div className="fh-location-container">
          <p className="fh-location-eyebrow">DISCOVER FAISAL HILLS</p>

          <h2>
            Come closer to
            <br />
            <em>where it all connects.</em>
          </h2>

          <p>
            Explore Faisal Hills, its blocks, development and surrounding
            location.
          </p>

          <div className="fh-location-buttons fh-location-buttons-center">
            <Link
              href="/"
              className="fh-location-btn fh-location-btn-main"
            >
              Explore Faisal Hills <span>↗</span>
            </Link>

            <Link
              href="/about"
              className="fh-location-btn fh-location-btn-light"
            >
              About Faisal Hills
            </Link>
          </div>
        </div>
      </section>

      <style>{`
       
.fh-location-page {
  --fh-burgundy: #872228;
  --fh-orange: #f4a236;

  --fh-cream: #f5e9db;
  --fh-cream-deep: #ead8c4;

  --fh-navy: #13233a;
  --fh-navy-2: #1b3554;
  --fh-navy-3: #223e5d;

  --fh-black: #171717;
  --fh-white: #ffffff;

  --fh-text: #403b37;
  --fh-muted: #6e675f;

  --fh-border: #d8c8b7;
  --fh-border-dark: #35445a;

  background: var(--fh-cream);
  color: var(--fh-black);
  overflow: hidden;
}

.fh-location-page *,
.fh-location-page *::before,
.fh-location-page *::after {
  box-sizing: border-box;
}

.fh-location-container {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.fh-location-page h1,
.fh-location-page h2,
.fh-location-page h3,
.fh-location-page p {
  margin-top: 0;
}

.fh-location-page h1,
.fh-location-page h2,
.fh-location-page h3 {
  letter-spacing: -0.045em;
}

.fh-location-page h1,
.fh-location-page h2 {
  font-weight: 500;
  line-height: 1.05;
}

.fh-location-page h1 span,
.fh-location-page h2 em {
  color: var(--fh-burgundy);
  font-family: Georgia, serif;
  font-weight: 400;
}

/* =========================================
   EYEBROWS
========================================= */

.fh-location-eyebrow {
  color: rgba(245, 233, 219, 0.72);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  margin-bottom: 22px;
}

.fh-location-eyebrow-dark {
  color: var(--fh-burgundy);
}

/* =========================================
   HERO
========================================= */

.fh-location-hero {
  min-height: 700px;
  position: relative;
  display: flex;
  align-items: center;
  color: var(--fh-white);

  background:
    radial-gradient(
      circle at 82% 25%,
      rgba(244, 162, 54, 0.22),
      transparent 30%
    ),
    radial-gradient(
      circle at 70% 75%,
      rgba(135, 34, 40, 0.45),
      transparent 38%
    ),
    linear-gradient(
      120deg,
      #0e1b2c 0%,
      var(--fh-navy) 45%,
      var(--fh-navy-2) 100%
    );
}

.fh-location-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.16;

  background-image:
    linear-gradient(
      25deg,
      transparent 48%,
      rgba(245, 233, 219, 0.12) 49%,
      transparent 50%
    ),
    linear-gradient(
      -25deg,
      transparent 48%,
      rgba(244, 162, 54, 0.08) 49%,
      transparent 50%
    );

  background-size: 150px 150px;
}

.fh-location-hero-overlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgba(10, 22, 37, 0.92),
      rgba(19, 35, 58, 0.58),
      rgba(19, 35, 58, 0.25)
    ),
    radial-gradient(
      circle at 78% 40%,
      rgba(135, 34, 40, 0.3),
      transparent 35%
    );
}

.fh-location-hero-content {
  position: relative;
  z-index: 1;
  padding: 120px 0 100px;
}

.fh-location-hero h1 {
  font-size: clamp(48px, 7vw, 88px);
  max-width: 850px;
  margin-bottom: 28px;
}

.fh-location-hero h1 span {
  color: var(--fh-cream);
}

.fh-location-hero-text {
  max-width: 560px;
  color: rgba(245, 233, 219, 0.82);
  font-size: 16px;
  line-height: 1.85;
  margin-bottom: 35px;
}

/* =========================================
   BUTTONS
========================================= */

.fh-location-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.fh-location-buttons-center {
  justify-content: center;
}

.fh-location-btn {
  min-height: 54px;
  padding: 15px 23px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 22px;

  text-decoration: none;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  transition: 0.25s ease;
}

.fh-location-btn-main {
  background: var(--fh-burgundy);
  color: var(--fh-white);
  border: 1px solid var(--fh-burgundy);
}

.fh-location-btn-main:hover {
  background: var(--fh-orange);
  border-color: var(--fh-orange);
  color: var(--fh-black);
}

.fh-location-btn-light {
  color: var(--fh-cream);
  border: 1px solid rgba(245, 233, 219, 0.45);
  background: rgba(245, 233, 219, 0.04);
}

.fh-location-btn-light:hover {
  background: var(--fh-cream);
  border-color: var(--fh-cream);
  color: var(--fh-navy);
}

.fh-location-btn:hover {
  transform: translateY(-2px);
}

/* =========================================
   HERO BOTTOM
========================================= */

.fh-location-hero-bottom {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);

  width: min(1180px, calc(100% - 48px));

  display: flex;
  justify-content: space-between;

  color: rgba(245, 233, 219, 0.68);
  font-size: 9px;
  letter-spacing: 0.15em;
}

/* =========================================
   GENERAL LIGHT SECTIONS
========================================= */

.fh-location-overview,
.fh-location-landmarks,
.fh-location-final {
  padding: 115px 0;
}

.fh-location-overview {
  background: var(--fh-cream);
}

.fh-location-overview-grid,
.fh-location-final-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
  align-items: start;
}

.fh-location-page h2 {
  font-size: clamp(40px, 5vw, 68px);
  margin-bottom: 30px;
}

.fh-location-copy {
  color: var(--fh-text);
  font-size: 15px;
  line-height: 1.9;
}

.fh-location-copy p {
  margin-bottom: 23px;
}

.fh-location-divider {
  width: 65px;
  height: 2px;
  background: var(--fh-orange);
  margin: 30px 0;
}

.fh-location-highlight {
  color: var(--fh-burgundy);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

/* =========================================
   MAP SECTION
========================================= */

.fh-location-map-section {
  padding: 115px 0;
  background: #fffdf9;
}

.fh-location-section-heading {
  display: grid;
  grid-template-columns: 1fr 0.75fr;
  gap: 80px;
  align-items: end;
  margin-bottom: 60px;
}

.fh-location-section-heading > p {
  color: var(--fh-muted);
  font-size: 15px;
  line-height: 1.9;
  margin-bottom: 0;
}

/* =========================================
   MAP CARD
========================================= */

.fh-location-map-card {
  height: 570px;
  position: relative;
  overflow: hidden;

  background:
    linear-gradient(
      30deg,
      transparent 48%,
      rgba(135, 34, 40, 0.1) 49%,
      transparent 50%
    ),
    linear-gradient(
      -20deg,
      transparent 48%,
      rgba(19, 35, 58, 0.09) 49%,
      transparent 50%
    ),
    #eee4d7;

  border: 1px solid var(--fh-border);
}

/* =========================================
   MAP ROADS
========================================= */

.fh-map-road {
  position: absolute;
  height: 2px;
  background: rgba(135, 34, 40, 0.48);
  transform: rotate(-12deg);
}

.fh-map-road span {
  position: absolute;
  top: -18px;
  left: 10px;

  white-space: nowrap;

  color: var(--fh-burgundy);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.road-one {
  width: 110%;
  left: -5%;
  top: 38%;
}

.road-two {
  width: 90%;
  left: 8%;
  top: 62%;
  transform: rotate(24deg);
}

.road-three {
  width: 75%;
  right: -5%;
  top: 23%;
  transform: rotate(62deg);
}

/* =========================================
   MAP ROUTES
========================================= */

.fh-map-route {
  position: absolute;
  border: 1px dashed rgba(19, 35, 58, 0.25);
  border-radius: 50%;
}

.route-one {
  width: 500px;
  height: 320px;
  left: 20%;
  top: 25%;
  transform: rotate(-15deg);
}

.route-two {
  width: 340px;
  height: 230px;
  left: 33%;
  top: 35%;
  transform: rotate(15deg);
}

/* =========================================
   MAP CENTER
========================================= */

.fh-map-center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 180px;
  height: 180px;
  border-radius: 50%;

  background: rgba(255, 253, 249, 0.94);

  border: 1px solid rgba(135, 34, 40, 0.35);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  box-shadow: 0 15px 45px rgba(19, 35, 58, 0.14);
}

.fh-map-pin {
  color: var(--fh-orange);
  font-size: 32px;
  margin-bottom: 8px;
}

.fh-map-center strong {
  color: var(--fh-navy);
  font-size: 12px;
  letter-spacing: 0.08em;
}

.fh-map-center span {
  margin-top: 7px;
  color: var(--fh-muted);
  font-size: 8px;
  letter-spacing: 0.12em;
}

/* =========================================
   MAP PLACES
========================================= */

.fh-map-place {
  position: absolute;

  display: flex;
  align-items: center;
  gap: 7px;

  color: var(--fh-text);
  font-size: 10px;
  font-weight: 600;
}

.fh-map-place span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--fh-orange);
}

.place-taxila {
  top: 18%;
  left: 13%;
}

.place-islamabad {
  bottom: 17%;
  right: 12%;
}

.place-b17 {
  top: 19%;
  right: 10%;
}

.place-airport {
  bottom: 20%;
  left: 9%;
}

.fh-map-note {
  position: absolute;
  left: 25px;
  bottom: 22px;

  max-width: 250px;
  padding: 12px 15px;

  background: rgba(255, 253, 249, 0.92);

  color: var(--fh-muted);
  font-size: 9px;
  line-height: 1.6;

  border-left: 3px solid var(--fh-orange);
}

/* =========================================
   DARK / NAVY SECTIONS
========================================= */

.fh-location-access,
.fh-location-unique {
  padding: 115px 0;

  background:
    radial-gradient(
      circle at 85% 15%,
      rgba(135, 34, 40, 0.18),
      transparent 30%
    ),
    linear-gradient(
      135deg,
      #0e1b2c,
      var(--fh-navy) 55%,
      var(--fh-navy-2)
    );

  color: var(--fh-white);
}

.fh-location-heading-light > p {
  color: rgba(245, 233, 219, 0.65);
}

.fh-location-heading-light h2 em {
  color: var(--fh-cream);
}

/* =========================================
   ACCESSIBLE POINTS
========================================= */

.fh-access-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.fh-access-card {
  position: relative;

  min-height: 205px;
  padding: 25px;

  border: 1px solid var(--fh-border-dark);

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.035),
      rgba(255, 255, 255, 0.015)
    ),
    rgba(19, 35, 58, 0.65);

  display: flex;
  flex-direction: column;

  transition: 0.25s ease;
}

.fh-access-card:hover {
  border-color: var(--fh-orange);
  transform: translateY(-3px);
  background: rgba(27, 53, 84, 0.85);
}

.fh-access-number {
  color: rgba(245, 233, 219, 0.45);
  font-size: 10px;
}

.fh-access-time {
  display: flex;
  align-items: baseline;
  gap: 7px;

  margin-top: 25px;
  color: var(--fh-orange);
}

.fh-access-time strong {
  font-size: 42px;
  font-weight: 500;
  line-height: 1;
}

.fh-access-time small {
  font-size: 8px;
  letter-spacing: 0.1em;
}

.fh-access-card h3 {
  margin-top: auto;
  margin-bottom: 0;

  max-width: 85%;

  font-size: 17px;
  font-weight: 500;
}

.fh-access-arrow {
  position: absolute;
  right: 22px;
  bottom: 21px;

  color: rgba(245, 233, 219, 0.55);
}

/* =========================================
   LANDMARKS
========================================= */

.fh-location-landmarks {
  background: var(--fh-cream);
}

.fh-landmarks-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.fh-landmark-card {
  min-height: 170px;
  padding: 23px;

  border: 1px solid var(--fh-border);

  display: flex;
  flex-direction: column;

  background: #fffdf9;

  transition: 0.25s ease;
}

.fh-landmark-card:hover {
  transform: translateY(-3px);
  border-color: var(--fh-orange);
  box-shadow: 0 15px 35px rgba(19, 35, 58, 0.08);
}

.fh-landmark-card > span {
  color: var(--fh-burgundy);
  font-size: 10px;
}

.fh-landmark-card h3 {
  margin-top: auto;
  margin-bottom: 15px;

  font-size: 18px;
  font-weight: 500;
}

.fh-landmark-card > div {
  color: var(--fh-orange);
  font-size: 18px;
}

/* =========================================
   UNIQUE LOCATION
========================================= */

.fh-unique-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.fh-unique-card {
  min-height: 330px;
  padding: 28px;

  border: 1px solid var(--fh-border-dark);

  display: flex;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.025);

  transition: 0.25s ease;
}

.fh-unique-card:hover {
  border-color: var(--fh-orange);
  background: rgba(255, 255, 255, 0.045);
}

.fh-unique-card > span {
  color: var(--fh-orange);
  font-size: 11px;
}

.fh-unique-card h3 {
  margin-top: auto;
  margin-bottom: 18px;

  font-size: 25px;
  font-weight: 500;
}

.fh-unique-card p {
  color: rgba(245, 233, 219, 0.65);
  font-size: 13px;
  line-height: 1.8;
}

.fh-unique-line {
  width: 35px;
  height: 2px;

  background: var(--fh-orange);

  margin-top: 15px;
}

/* =========================================
   FINAL SECTION
========================================= */

.fh-location-final {
  background: var(--fh-cream);
}

/* =========================================
   CTA
========================================= */

.fh-location-cta {
  padding: 125px 0;

  text-align: center;
  color: var(--fh-white);

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(244, 162, 54, 0.16),
      transparent 35%
    ),
    linear-gradient(
      135deg,
      #0d1929,
      var(--fh-navy) 55%,
      #1b2f4a
    );

  position: relative;
  overflow: hidden;
}

.fh-location-cta::before {
  content: "";
  position: absolute;
  width: 420px;
  height: 420px;

  border-radius: 50%;

  right: -160px;
  bottom: -220px;

  background: rgba(135, 34, 40, 0.18);
}

.fh-location-cta .fh-location-container {
  position: relative;
  z-index: 1;
}

.fh-location-cta h2 {
  max-width: 800px;
  margin: 0 auto 25px;

  font-size: clamp(42px, 6vw, 75px);
}

.fh-location-cta h2 em {
  color: var(--fh-cream);
}

.fh-location-cta
  > .fh-location-container
  > p:not(.fh-location-eyebrow) {
  max-width: 500px;

  margin: 0 auto 30px;

  color: rgba(245, 233, 219, 0.65);
  line-height: 1.8;
}

/* =========================================
   TABLET
========================================= */

@media (max-width: 900px) {
  .fh-location-container {
    width: min(100% - 36px, 680px);
  }

  .fh-location-overview-grid,
  .fh-location-final-grid {
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .fh-location-section-heading {
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .fh-access-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .fh-landmarks-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .fh-unique-grid {
    grid-template-columns: 1fr;
  }

  .fh-location-map-card {
    height: 470px;
  }

  .fh-location-overview,
  .fh-location-map-section,
  .fh-location-landmarks,
  .fh-location-final,
  .fh-location-access,
  .fh-location-unique {
    padding: 80px 0;
  }
}

/* =========================================
   MOBILE
========================================= */

@media (max-width: 520px) {
  .fh-location-container,
  .fh-location-hero-bottom {
    width: calc(100% - 32px);
  }

  .fh-location-hero {
    min-height: 640px;
  }

  .fh-location-hero h1 {
    font-size: 45px;
  }

  .fh-location-hero-text {
    font-size: 14px;
  }

  .fh-location-buttons {
    width: 100%;
  }

  .fh-location-btn {
    width: 100%;
  }

  .fh-location-hero-bottom {
    flex-wrap: wrap;
    font-size: 8px;
  }

  .fh-location-page h2 {
    font-size: 40px;
  }

  .fh-access-grid,
  .fh-landmarks-grid {
    grid-template-columns: 1fr;
  }

  .fh-location-map-card {
    height: 400px;
  }

  .fh-map-center {
    width: 140px;
    height: 140px;
  }

  .fh-map-place {
    font-size: 8px;
  }

  .place-airport {
    left: 5%;
  }

  .place-b17 {
    right: 5%;
  }

  .fh-location-cta {
    padding: 85px 0;
  }
}


      `}</style>
    </main>
  );
}
