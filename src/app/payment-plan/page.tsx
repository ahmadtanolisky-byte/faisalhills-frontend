import type { Metadata } from "next";
import Image from "next/image";
import { getBookingSteps, getSiteOptions } from "@/lib/queries";
import PaymentPlan from "@/components/home/PaymentPlan";
import BookingSteps from "@/components/home/BookingSteps";

export const metadata: Metadata = {
  title: "Prices & Payment Plan | Faisal Hills Islamabad",
  description:
    "Explore Faisal Hills plot prices, available plot sizes, payment plan, booking process and required documents.",
};

const blockPrices = [
  {
    number: "01",
    title: "Executive Block",
    label: "PREMIUM & DEVELOPED",
    description:
      "The Executive Block is the most developed and premium block of Faisal Hills. Because it already has developed infrastructure and is ready for construction, prices are higher than in other developing blocks.",
    sizes: ["5.56 Marla", "08 Marla", "10.89 Marla", "14.22 Marla", "01 Kanal"],
  },
  {
    number: "02",
    title: "Block A",
    label: "WELL DEVELOPED",
    description:
      "Block A is a well-developed residential block with steady demand from buyers. Thanks to its developed infrastructure and vibrant residential community, it has become a favorite among buyers. This is the only Block which offers 2 Kanal residential plots.",
    sizes: [
      "5.56 Marla",
      "08 Marla",
      "10.89 Marla",
      "14.22 Marla",
      "01 Kanal",
      "02 Kanal",
    ],
  },
  {
    number: "03",
    title: "Block B",
    label: "APPRECIATING",
    description:
      "Block B offers a strong combination of low prices and an appreciating price trend. It remains competitive with other developed blocks while appreciating in value.",
    sizes: ["5.56 Marla", "08 Marla", "10.89 Marla", "14.22 Marla", "01 Kanal"],
  },
  {
    number: "04",
    title: "Block B Extension",
    label: "GROWING DEMAND",
    description:
      "As Block B Extension becomes an increasingly popular choice among buyers, demand in this block continues to rise.",
    sizes: ["5.56 Marla", "08 Marla", "10.89 Marla"],
  },
  {
    number: "05",
    title: "Block C",
    label: "AFFORDABLE OPTION",
    description:
      "The cheapest block in Faisal Hills is Block C, making it an appropriate choice for buyers.",
    sizes: ["5.56 Marla", "08 Marla", "10.89 Marla", "01 Kanal"],
  },
  {
    number: "06",
    title: "Block D",
    label: "FUTURE DEVELOPMENT",
    description:
      "Block D is the future of Faisal Hills. Buyers who want to buy plots and earn from them usually choose Block D.",
    sizes: ["5.56 Marla", "08 Marla", "10.89 Marla", "14.22 Marla", "01 Kanal"],
  },
];

const paymentFeatures = [
  {
    number: "01",
    title: "Registration Fee",
    text: "One-time payment required during the registration process.",
  },
  {
    number: "02",
    title: "Down Payment",
    text: "Initial payment made at the time of booking.",
  },
  {
    number: "03",
    title: "10 Quarterly Installments",
    text: "Remaining balance is distributed across 10 payments, every 3 months.",
  },
  {
    number: "04",
    title: "20% Lump-Sum Discount",
    text: "A 20% discount is offered on full lump-sum payment.",
  },
];

const flexiblePayments = [
  {
    number: "01",
    title: "Booking Amount",
    text: "A percentage of the total plot value is paid at the time of booking to secure your specific plot and block.",
  },
  {
    number: "02",
    title: "Down Payment",
    text: "A further tranche is paid within 30–60 days of booking to confirm the allocation.",
  },
  {
    number: "03",
    title: "Easy Installments",
    text: "The remaining balance is spread across quarterly installments over 2.5 years.",
  },
  {
    number: "04",
    title: "No Hidden Charges",
    text: "All applicable fees, including development charges and transfer fees, are disclosed upfront at the time of booking.",
  },
];

const bookingSteps = [
  "Choose your preferred block and plot size.",
  "Review the latest prices and payment details.",
  "Submit the required booking documents.",
  "Complete the applicable payment.",
  "Receive your booking confirmation and official documents.",
];

const documents = [
  "Passport-size photographs",
  "Booking Application Form",
  "CNIC copies",
  "NICOP for overseas Pakistanis",
  "Next of Kin CNIC",
  "Photographs",
  "Proof of payment",
];

export default function PaymentPlanPage() {
  return (
    <main className="fh-payment-page">

      {/* HERO */}
      <section className="fh-payment-hero">
        <Image src="/images/hero-payment-plan.png" alt="Faisal Hills Prices & Payment Plan" fill priority className="fh-payment-hero-image" />
        <div className="fh-payment-hero-overlay" />

        <div className="fh-payment-container fh-payment-hero-content">
          <p className="fh-payment-eyebrow">
            FAISAL HILLS ISLAMABAD
          </p>

          <h1>
            Prices &{" "}
            <span>
              Payment
              <br />
              Plan.
            </span>
          </h1>

          <p className="fh-payment-hero-text">
            Explore <a href="https://faisalhillislamabad.com.pk/plots">plot prices</a>, available sizes, flexible payment options
            and the complete booking process for Faisal Hills.
          </p>

          <div className="fh-payment-hero-actions">
            <a href="#prices" className="fh-payment-btn fh-payment-btn-main">
              Explore Prices <span>↓</span>
            </a>

            <a
              href="#payment-plan"
              className="fh-payment-btn fh-payment-btn-light"
            >
              Payment Plan
            </a>
          </div>
        </div>

        <div className="fh-payment-hero-bottom">
          <span>PRICES & PAYMENT</span>
          <span>FAISAL HILLS · ISLAMABAD</span>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="fh-payment-overview">
        <div className="fh-payment-container fh-payment-two-column">

          <div>
            <p className="fh-payment-eyebrow fh-payment-dark-eyebrow">
              OVERVIEW
            </p>

            <h2>
              Invest in a place
              <br />
              <em>built to grow.</em>
            </h2>
          </div>

          <div className="fh-payment-copy">
            <p>
             <a href="https://faisalhillislamabad.com.pk/">Faisal Hills project is one of the housing projects</a>  in the
              Rawalpindi and Islamabad areas, offering various possession
              able plots that can be purchased on installments or by making
              cash payments. Most of them are available on cash prices,
              while a limited inventory is available on installments.
            </p>

            <p>
              The possession able plots for sale in Faisal Hills give buyers
              the chance to start constructing their homes as soon as they
              receive possession of the plot. This can enhance the value of
              the plot itself.
            </p>

            <div className="fh-payment-highlight">
              <strong>Flexible Options</strong>
              <span>
                <a href="https://faisalhillislamabad.com.pk/payment-plan">Cash payments and installment options are available for
                selected plots.</a>
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* PRICES INTRO */}
      <section className="fh-payment-price-intro" id="prices">
        <div className="fh-payment-container">
          <div className="fh-payment-section-heading">
            <div>
              <p className="fh-payment-eyebrow fh-payment-dark-eyebrow">
                FAISAL HILLS PLOT PRICES
              </p>

              <h2>
                Prices vary
                <br />
                <em>block by block.</em>
              </h2>
            </div>

            <p>
              Several factors determine the price of a plot in Faisal Hills.
              While the society is governed by a common <a href="https://faisalhillislamabad.com.pk/about">development</a> ideology,
              each block has its own demand, development status, and
              <a href="https://faisalhillislamabad.com.pk/blog">investment</a> potential.
            </p>
          </div>
        </div>
      </section>

      {/* BLOCK PRICES */}
      <section className="fh-payment-blocks">
        <div className="fh-payment-container">

          <div className="fh-payment-block-grid">
            {blockPrices.map((block) => (
              <article className="fh-payment-block-card" key={block.title}>

                <div className="fh-payment-card-top">
                  <span>{block.number}</span>
                  <span>{block.label}</span>
                </div>

                <div className="fh-payment-block-content">
                  <h3>{block.title}</h3>

                  <p>{block.description}</p>

                  <div className="fh-payment-size-title">
                    <span>AVAILABLE PLOT SIZES</span>
                  </div>

                  <div className="fh-payment-sizes">
                    {block.sizes.map((size) => (
                      <span key={size}>
                        <b>✓</b>
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="fh-payment-card-footer">
                  <span>FAISAL HILLS</span>
                  <span>↗</span>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* PAYMENT PLAN */}
      <section className="fh-payment-plan" id="payment-plan">
        <div className="fh-payment-container">

          <div className="fh-payment-section-heading fh-payment-light-heading">
            <div>
              <p className="fh-payment-eyebrow">
                FAISAL HILLS PAYMENT PLAN
              </p>

              <h2>
                Simple.
                <br />
                <em>Flexible. Clear.</em>
              </h2>
            </div>

            <p>
              The Faisal Hills offers a clear, simple payment plan for a
              limited number of plots. The plan spans 10 quarterly payments
              over two and a half (2.5) years, with a 20% discount on
              lump-sum payment.
            </p>
          </div>

          <div className="fh-payment-plan-banner">
            <div>
              <span>PAYMENT PERIOD</span>
              <strong>2.5 Years</strong>
            </div>

            <div>
              <span>INSTALLMENTS</span>
              <strong>10 Quarterly</strong>
            </div>

            <div>
              <span>LUMP-SUM DISCOUNT</span>
              <strong>20%</strong>
            </div>
          </div>

          <div className="fh-payment-feature-grid">
            {paymentFeatures.map((item) => (
              <article className="fh-payment-feature" key={item.number}>
                <span className="fh-payment-feature-number">
                  {item.number}
                </span>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* FLEXIBLE PAYMENTS */}
      <section className="fh-payment-flexible">
        <div className="fh-payment-container">

          <div className="fh-payment-section-heading">
            <div>
              <p className="fh-payment-eyebrow fh-payment-dark-eyebrow">
                FLEXIBLE PAYMENTS
              </p>

              <h2>
                Transparent
                <br />
                <em>pricing structure.</em>
              </h2>
            </div>

            <p>
              <a href="https://faisalhillislamabad.com.pk/contact"> From the initial booking amount to quarterly installments,</a>  the
              payment structure is designed to clearly define each stage of
              the purchase.
            </p>
          </div>

          <div className="fh-payment-flex-grid">
            {flexiblePayments.map((item) => (
              <article className="fh-payment-flex-card" key={item.number}>
                <span>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* BOOKING */}
      <section className="fh-payment-booking">
        <div className="fh-payment-container fh-payment-two-column">

          <div>
            <p className="fh-payment-eyebrow fh-payment-dark-eyebrow">
              HOW TO BOOK
            </p>

            <h2>
              Your booking,
              <br />
              <em>step by step.</em>
            </h2>

            <p className="fh-payment-booking-intro">
              Booking a plot is simple when you work with an authorized
              sales partner.
            </p>
          </div>

          <div className="fh-payment-steps">
            {bookingSteps.map((step, index) => (
              <div className="fh-payment-step" key={step}>
                <span>0{index + 1}</span>

                <p>{step}</p>

                <b>↗</b>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="fh-payment-documents">
        <div className="fh-payment-container">

          <div className="fh-payment-section-heading fh-payment-light-heading">
            <div>
              <p className="fh-payment-eyebrow">
                REQUIRED DOCUMENTS
              </p>

              <h2>
                Keep your
                <br />
                <em>documents ready.</em>
              </h2>
            </div>

            <p>
              To complete your booking, you may be asked to provide the
              following documents.
            </p>
          </div>

          <div className="fh-payment-document-grid">
            {documents.map((document, index) => (
              <div className="fh-payment-document" key={document}>
                <span>0{index + 1}</span>
                <p>{document}</p>
                <b>✓</b>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="fh-payment-cta">
        <div className="fh-payment-container">

          <p className="fh-payment-eyebrow">
            EXPLORE FAISAL HILLS
          </p>

          <h2>
            Find your
            <br />
            <em>place in the plan.</em>
          </h2>

          <p>
            Explore the location, <a href="https://faisalhillislamabad.com.pk/master-plan">master plan</a> and different blocks of Faisal
            Hills before making your decision.
          </p>

          <div className="fh-payment-cta-buttons">
            <a href="/master-plan" className="fh-payment-btn fh-payment-btn-main">
              View Master Plan <span>↗</span>
            </a>

            <a href="/location" className="fh-payment-btn fh-payment-btn-outline">
              Explore Location
            </a>
          </div>

        </div>
      </section>

      <style>{`
        


.fh-payment-page {
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

  background: var(--fh-cream);
  color: var(--fh-text);
  overflow: hidden;
}

.fh-payment-page *,
.fh-payment-page *::before,
.fh-payment-page *::after {
  box-sizing: border-box;
}

.fh-payment-container {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.fh-payment-page h1,
.fh-payment-page h2,
.fh-payment-page h3,
.fh-payment-page p {
  margin-top: 0;
}

.fh-payment-page h1,
.fh-payment-page h2,
.fh-payment-page h3 {
  letter-spacing: -0.045em;
}

.fh-payment-page h1,
.fh-payment-page h2 {
  font-weight: 500;
  line-height: 1.05;
}

.fh-payment-page h1 span,
.fh-payment-page h2 em {
  color: var(--fh-burgundy);
  font-family: Georgia, serif;
  font-weight: 400;
}


/* =========================
   EYEBROWS
========================= */

.fh-payment-eyebrow {
  color: #d9aeb8;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .18em;
  margin-bottom: 22px;
}

.fh-payment-dark-eyebrow {
  color: var(--fh-burgundy);
}


/* =========================
   HERO
========================= */

.fh-payment-hero {
  min-height: 690px;
  position: relative;
  display: flex;
  align-items: center;
  color: var(--fh-white);

  background:
    radial-gradient(
      circle at 78% 25%,
      rgba(122,25,48,.30),
      transparent 30%
    ),
    linear-gradient(
      120deg,
      #080d17 0%,
      #0b1220 48%,
      #121c2d 100%
    );
}

.fh-payment-hero-image {
  position: absolute;
  inset: 0;
  z-index: 0;
  object-fit: cover;
  opacity: 0.5;
}

.fh-payment-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: .08;

  background-image:
    linear-gradient(
      135deg,
      transparent 48%,
      rgba(217,174,184,.22) 49%,
      transparent 50%
    ),
    linear-gradient(
      45deg,
      transparent 48%,
      rgba(255,255,255,.10) 49%,
      transparent 50%
    );

  background-size: 130px 130px;
}

.fh-payment-hero-overlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      90deg,
      rgba(8,13,23,.97),
      rgba(11,18,32,.62)
    );
}

.fh-payment-hero-content {
  position: relative;
  z-index: 2;
  padding: 120px 0 100px;
}

.fh-payment-hero h1 {
  font-size: clamp(52px, 7vw, 90px);
  max-width: 800px;
  margin-bottom: 30px;
}

.fh-payment-hero h1 span {
  color: #d9aeb8;
}

.fh-payment-hero-text {
  max-width: 560px;
  color: #d5d9df;
  font-size: 15px;
  line-height: 1.9;
  margin-bottom: 34px;
}

.fh-payment-hero-text a {
  color: #d9aeb8;
  text-decoration: none;
}

.fh-payment-hero-actions,
.fh-payment-cta-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}


/* =========================
   BUTTONS
========================= */

.fh-payment-btn {
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

.fh-payment-btn-main {
  color: #ffffff;
  background: var(--fh-burgundy);
}

.fh-payment-btn-main:hover {
  color: #ffffff;
  background: var(--fh-burgundy-dark);
}

.fh-payment-btn-light {
  color: #ffffff;
  border: 1px solid rgba(255,255,255,.40);
}

.fh-payment-btn-light:hover {
  color: #ffffff;
  border-color: #d9aeb8;
  background: rgba(122,25,48,.18);
}

.fh-payment-btn-outline {
  color: #ffffff;
  border: 1px solid rgba(255,255,255,.45);
}

.fh-payment-btn-outline:hover {
  color: #ffffff;
  border-color: #d9aeb8;
  background: rgba(122,25,48,.18);
}

.fh-payment-btn:hover {
  transform: translateY(-2px);
}


/* =========================
   HERO BOTTOM
========================= */

.fh-payment-hero-bottom {
  position: absolute;
  z-index: 2;
  bottom: 27px;
  left: 50%;
  transform: translateX(-50%);

  width: min(1180px, calc(100% - 48px));

  display: flex;
  justify-content: space-between;

  color: #a7afbb;
  font-size: 8px;
  letter-spacing: .16em;
}


/* =========================
   COMMON SECTIONS
========================= */

.fh-payment-overview,
.fh-payment-price-intro,
.fh-payment-flexible,
.fh-payment-booking {
  padding: 115px 0;
}

.fh-payment-two-column {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
  align-items: start;
}

.fh-payment-page h2 {
  font-size: clamp(42px, 5vw, 68px);
  margin-bottom: 28px;
}

.fh-payment-copy {
  color: var(--fh-muted);
  font-size: 15px;
  line-height: 1.9;
}

.fh-payment-copy p {
  margin-bottom: 24px;
}

.fh-payment-copy a,
.fh-payment-section-heading a {
  color: var(--fh-burgundy);
  text-decoration: none;
}

.fh-payment-highlight {
  margin-top: 32px;
  padding: 22px;

  border-left: 3px solid var(--fh-burgundy);
  background: #ffffff;
}

.fh-payment-highlight strong {
  display: block;
  color: var(--fh-burgundy);
  font-size: 14px;
  margin-bottom: 7px;
}

.fh-payment-highlight span {
  color: var(--fh-muted);
  font-size: 12px;
  line-height: 1.7;
}


/* =========================
   PRICE INTRO
========================= */

.fh-payment-price-intro {
  padding-bottom: 55px;
  background: var(--fh-cream);
}

.fh-payment-section-heading {
  display: grid;
  grid-template-columns: 1fr .72fr;
  gap: 80px;
  align-items: end;
}

.fh-payment-section-heading > p {
  color: var(--fh-muted);
  font-size: 14px;
  line-height: 1.9;
  margin-bottom: 0;
}


/* =========================
   BLOCK PRICES
========================= */

.fh-payment-blocks {
  padding: 0 0 115px;
  background: var(--fh-cream);
}

.fh-payment-block-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.fh-payment-block-card {
  min-height: 470px;
  padding: 28px;

  display: flex;
  flex-direction: column;

  background: var(--fh-cream-dark);
  border: 1px solid var(--fh-border);

  transition: .25s ease;
}

.fh-payment-block-card:hover {
  border-color: var(--fh-burgundy);
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(11,18,32,.10);
}

.fh-payment-card-top,
.fh-payment-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fh-payment-card-top {
  font-size: 9px;
  letter-spacing: .12em;
}

.fh-payment-card-top span:first-child {
  color: var(--fh-burgundy);
  font-size: 12px;
}

.fh-payment-card-top span:last-child {
  color: var(--fh-muted);
}

.fh-payment-block-content {
  margin-top: auto;
  margin-bottom: 30px;
}

.fh-payment-block-content h3 {
  color: var(--fh-navy);
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 17px;
}

.fh-payment-block-content > p {
  color: var(--fh-muted);
  font-size: 12px;
  line-height: 1.85;
  margin-bottom: 25px;
}

.fh-payment-size-title {
  padding-top: 18px;
  margin-bottom: 14px;
  border-top: 1px solid var(--fh-border);
}

.fh-payment-size-title span {
  color: var(--fh-burgundy);
  font-size: 8px;
  font-weight: 700;
  letter-spacing: .13em;
}

.fh-payment-sizes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.fh-payment-sizes span {
  padding: 8px 11px;
  background: #ffffff;
  color: #4d4842;
  font-size: 10px;
}

.fh-payment-sizes b {
  color: var(--fh-burgundy);
  margin-right: 5px;
}

.fh-payment-card-footer {
  padding-top: 17px;
  border-top: 1px solid var(--fh-border);

  color: #89827a;
  font-size: 8px;
  letter-spacing: .14em;
}

.fh-payment-card-footer span:last-child {
  color: var(--fh-burgundy);
  font-size: 17px;
}


/* =========================
   PAYMENT PLAN
========================= */

.fh-payment-plan,
.fh-payment-documents {
  padding: 115px 0;
  background: var(--fh-navy);
  color: #ffffff;
}

.fh-payment-light-heading > p {
  color: #aeb5bf;
}

.fh-payment-light-heading h2 em {
  color: #d9aeb8;
}

.fh-payment-plan-banner {
  margin: 55px 0 15px;
  padding: 30px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  background: var(--fh-burgundy);
}

.fh-payment-plan-banner div {
  padding-right: 20px;
  border-right: 1px solid rgba(255,255,255,.25);
}

.fh-payment-plan-banner div:last-child {
  border-right: 0;
}

.fh-payment-plan-banner span {
  display: block;
  margin-bottom: 8px;

  color: #e5cbd1;
  font-size: 8px;
  letter-spacing: .14em;
}

.fh-payment-plan-banner strong {
  color: #ffffff;
  font-size: 25px;
  font-weight: 500;
}

.fh-payment-feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 15px;
}

.fh-payment-feature {
  min-height: 170px;
  padding: 25px;

  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 20px;

  border: 1px solid var(--fh-dark-border);
  background: var(--fh-navy-light);
}

.fh-payment-feature-number {
  color: #d9aeb8;
  font-size: 11px;
}

.fh-payment-feature h3 {
  color: #ffffff;
  font-size: 21px;
  font-weight: 500;
  margin-bottom: 11px;
}

.fh-payment-feature p {
  color: #b8bec7;
  font-size: 12px;
  line-height: 1.8;
  margin-bottom: 0;
}


/* =========================
   FLEXIBLE PAYMENTS
========================= */

.fh-payment-flexible {
  background: var(--fh-cream);
}

.fh-payment-flex-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-top: 55px;
}

.fh-payment-flex-card {
  min-height: 300px;
  padding: 25px;

  display: flex;
  flex-direction: column;

  background: #ffffff;
  border: 1px solid var(--fh-border);

  transition: .25s ease;
}

.fh-payment-flex-card:hover {
  transform: translateY(-3px);
  border-color: var(--fh-burgundy);
}

.fh-payment-flex-card > span {
  color: var(--fh-burgundy);
  font-size: 10px;
  margin-bottom: auto;
}

.fh-payment-flex-card h3 {
  color: var(--fh-navy);
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 14px;
}

.fh-payment-flex-card p {
  color: var(--fh-muted);
  font-size: 12px;
  line-height: 1.8;
  margin-bottom: 0;
}


/* =========================
   BOOKING
========================= */

.fh-payment-booking {
  background: #ffffff;
}

.fh-payment-booking-intro {
  max-width: 450px;
  color: var(--fh-muted);
  font-size: 14px;
  line-height: 1.8;
}

.fh-payment-steps {
  border-top: 1px solid var(--fh-border);
}

.fh-payment-step {
  min-height: 86px;

  display: grid;
  grid-template-columns: 50px 1fr 30px;
  gap: 15px;
  align-items: center;

  border-bottom: 1px solid var(--fh-border);
}

.fh-payment-step > span {
  color: var(--fh-burgundy);
  font-size: 10px;
}

.fh-payment-step p {
  color: #45413d;
  font-size: 13px;
  margin-bottom: 0;
}

.fh-payment-step b {
  color: var(--fh-burgundy);
  font-size: 16px;
  font-weight: 400;
}


/* =========================
   DOCUMENTS
========================= */

.fh-payment-document-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 55px;
}

.fh-payment-document {
  min-height: 75px;
  padding: 20px 22px;

  display: grid;
  grid-template-columns: 40px 1fr 25px;
  gap: 15px;
  align-items: center;

  border: 1px solid var(--fh-dark-border);
  background: var(--fh-navy-light);
}

.fh-payment-document span {
  color: #d9aeb8;
  font-size: 10px;
}

.fh-payment-document p {
  color: #ddd9d3;
  font-size: 12px;
  margin-bottom: 0;
}

.fh-payment-document b {
  color: #d9aeb8;
}


/* =========================
   CTA
========================= */

.fh-payment-cta {
  padding: 125px 0;
  text-align: center;

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(122,25,48,.42),
      transparent 45%
    ),
    linear-gradient(
      135deg,
      #080d17,
      #0b1220 55%,
      #121c2d
    );

  color: #ffffff;
}

.fh-payment-cta .fh-payment-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fh-payment-cta .fh-payment-eyebrow {
  color: #d9aeb8;
}

.fh-payment-cta h2 {
  font-size: clamp(46px, 6vw, 76px);
  margin-bottom: 25px;
}

.fh-payment-cta h2 em {
  color: #d9aeb8;
}

.fh-payment-cta > .fh-payment-container > p:not(.fh-payment-eyebrow) {
  max-width: 510px;
  color: #b8bec7;
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 30px;
}

.fh-payment-cta > .fh-payment-container > p a {
  color: #d9aeb8;
  text-decoration: none;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1000px) {

  .fh-payment-container {
    width: min(100% - 36px, 720px);
  }

  .fh-payment-two-column,
  .fh-payment-section-heading {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .fh-payment-block-grid {
    grid-template-columns: 1fr;
  }

  .fh-payment-flex-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .fh-payment-feature-grid {
    grid-template-columns: 1fr;
  }

  .fh-payment-plan-banner {
    grid-template-columns: 1fr;
  }

  .fh-payment-plan-banner div {
    border-right: 0;
    border-bottom: 1px solid rgba(255,255,255,.25);
    padding-bottom: 18px;
  }

  .fh-payment-plan-banner div:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }

  .fh-payment-overview,
  .fh-payment-price-intro,
  .fh-payment-flexible,
  .fh-payment-booking,
  .fh-payment-plan,
  .fh-payment-documents {
    padding: 80px 0;
  }
}


@media (max-width: 560px) {

  .fh-payment-container,
  .fh-payment-hero-bottom {
    width: calc(100% - 32px);
  }

  .fh-payment-hero {
    min-height: 640px;
  }

  .fh-payment-hero-content {
    padding: 100px 0 90px;
  }

  .fh-payment-hero h1 {
    font-size: 46px;
  }

  .fh-payment-hero-text {
    font-size: 13px;
  }

  .fh-payment-hero-actions,
  .fh-payment-cta-buttons {
    width: 100%;
  }

  .fh-payment-btn {
    width: 100%;
  }

  .fh-payment-hero-bottom {
    flex-wrap: wrap;
    gap: 8px;
    font-size: 7px;
  }

  .fh-payment-page h2 {
    font-size: 40px;
  }

  .fh-payment-block-card {
    min-height: 430px;
    padding: 22px;
  }

  .fh-payment-block-content h3 {
    font-size: 27px;
  }

  .fh-payment-flex-grid {
    grid-template-columns: 1fr;
  }

  .fh-payment-flex-card {
    min-height: 240px;
  }

  .fh-payment-document-grid {
    grid-template-columns: 1fr;
  }

  .fh-payment-document {
    grid-template-columns: 32px 1fr 20px;
    padding: 17px;
  }

  .fh-payment-feature {
    grid-template-columns: 35px 1fr;
  }

  .fh-payment-cta {
    padding: 85px 0;
  }

}




      `}</style>
    </main>
  );
}
