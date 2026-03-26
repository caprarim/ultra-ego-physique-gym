import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "./sidebar.jsx";
import EndBar from "./endBar.jsx";

const assetBase = import.meta.env.BASE_URL;

const MoreInfo = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".moreinfo-page > *");
    hiddenElements.forEach((element) => observer.observe(element));
  }, []);
  const showcaseSlides = [
    `${assetBase}ultraego/16.PNG`,
    `${assetBase}ultraego/17.PNG`,
    `${assetBase}ultraego/18.PNG`,
    `${assetBase}ultraego/19.PNG`,
    `${assetBase}ultraego/21.PNG`,
    `${assetBase}ultraego/22.PNG`,
    `${assetBase}ultraego/23.PNG`,
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  let nav = useNavigate();

  return (
    <>
      <main className="gym-page moreinfo-page">
        <SideBar
          click1={() => nav("/about")}
          click2={() => nav("/")}
          click3={() => nav("/moreinfo")}
          click4={() => nav("/memberships")}
        ></SideBar>

        <section className="moreinfo-hero-block">
          <h1 className="moreinfo-title">Move With Intention.</h1>
          <div className="moreinfo-hero-image-wrap">
            <img
              src={`${assetBase}ultraego/14.PNG`}
              className="moreinfo-hero-image"
              alt="Ultra Ego Physique Gym training floor"
            />
            <div className="moreinfo-hero-overlay">
              <p className="moreinfo-hero-overlay-text">Built on standard.</p>
            </div>
          </div>
        </section>

        <section className="moreinfo-specialties-strip">
          <article className="moreinfo-specialty">
            <span className="moreinfo-specialty-icon" aria-hidden="true">
              ⚡
            </span>
            <h2 className="moreinfo-specialty-title">Discipline First</h2>
          </article>

          <article className="moreinfo-specialty">
            <span className="moreinfo-specialty-icon" aria-hidden="true">
              🏋️
            </span>
            <h2 className="moreinfo-specialty-title">Strength Focus</h2>
          </article>

          <article className="moreinfo-specialty">
            <span className="moreinfo-specialty-icon" aria-hidden="true">
              🕒
            </span>
            <h2 className="moreinfo-specialty-title">Ladies Hours</h2>
          </article>

          <article className="moreinfo-specialty">
            <span className="moreinfo-specialty-icon" aria-hidden="true">
              💎
            </span>
            <h2 className="moreinfo-specialty-title">Premium Value</h2>
          </article>
        </section>

        <section className="moreinfo-details-grid">
          <div className="moreinfo-details-copy">
            <p className="moreinfo-eyebrow">Why Ultra Ego Physique</p>
            <h2 className="moreinfo-section-title">
              Sharp form. Real loads. Lasting results.
            </h2>
            <p className="moreinfo-section-text">
              Every session is structured around execution, not motivation. Show
              up, move correctly, and let the compound effect do the rest.
            </p>

            <div className="moreinfo-benefits-list">
              <article className="moreinfo-benefit-item">
                <span className="moreinfo-benefit-icon" aria-hidden="true">
                  01
                </span>
                <div>
                  <h3 className="moreinfo-detail-title">Deadlift Standard</h3>
                  <p className="moreinfo-detail-text">
                    Hips hinge, spine neutral, every pull locked and loaded.
                  </p>
                </div>
              </article>

              <article className="moreinfo-benefit-item">
                <span className="moreinfo-benefit-icon" aria-hidden="true">
                  02
                </span>
                <div>
                  <h3 className="moreinfo-detail-title">Squat Standard</h3>
                  <p className="moreinfo-detail-text">
                    Depth achieved, knees tracked, bar path never wasted.
                  </p>
                </div>
              </article>

              <article className="moreinfo-benefit-item">
                <span className="moreinfo-benefit-icon" aria-hidden="true">
                  03
                </span>
                <div>
                  <h3 className="moreinfo-detail-title">Flexible Slots</h3>
                  <p className="moreinfo-detail-text">
                    Morning co-ed, midday ladies-only, and late-evening sessions
                    — fit your schedule, not the other way around.
                  </p>
                </div>
              </article>

              <article className="moreinfo-benefit-item">
                <span className="moreinfo-benefit-icon" aria-hidden="true">
                  04
                </span>
                <div>
                  <h3 className="moreinfo-detail-title">Accessible Pricing</h3>
                  <p className="moreinfo-detail-text">
                    Monthly from PKR 2,500. Quarterly at PKR 7,000. Annual at
                    PKR 25,000. No excuses, no friction.
                  </p>
                </div>
              </article>
            </div>

            <div className="moreinfo-actions">
              <Link className="moreinfo-cta-primary" to="/memberships">
                See Plans
              </Link>
              <Link className="moreinfo-cta-secondary" to="/about">
                About Us
              </Link>
            </div>
          </div>

          <div className="moreinfo-showcase">
            <div
              className="moreinfo-showcase-slider"
              aria-label="Gym image slider"
            >
              {showcaseSlides.map((slideSrc, index) => (
                <div
                  className={`moreinfo-showcase-slide ${
                    index === activeSlide
                      ? "moreinfo-showcase-slide-active"
                      : ""
                  }`}
                  key={slideSrc}
                >
                  <img
                    src={slideSrc}
                    alt={`Ultra Ego Physique Gym showcase ${index}`}
                    className="moreinfo-showcase-image"
                  />
                </div>
              ))}
            </div>
            <div className="moreinfo-showcase-card">
              <p className="moreinfo-showcase-label">Commit to the process.</p>
              <p className="moreinfo-showcase-text">
                Strength is earned one rep at a time.
              </p>
              <Link className="moreinfo-showcase-link" to="/memberships">
                Start Now
              </Link>
            </div>
          </div>
        </section>

        <section className="moreinfo-recovery-section">
          <div className="moreinfo-recovery-copy">
            <p className="moreinfo-recovery-eyebrow">Mindset</p>
            <h2 className="moreinfo-recovery-title">
              Consistent effort outlasts intensity.
            </h2>
            <p className="moreinfo-recovery-text">
              Elite physiques aren't built in days. They're built by showing up,
              executing with precision, and trusting the timeline.
            </p>
            <Link className="moreinfo-recovery-cta" to="/memberships">
              See Plans
            </Link>
          </div>

          <div className="moreinfo-recovery-media">
            <img
              src={`${assetBase}ultraego/13.PNG`}
              alt="Ultra Ego Physique Gym showcase"
              className="moreinfo-recovery-image"
            />
          </div>
        </section>
        <EndBar />
      </main>
    </>
  );
};

export default MoreInfo;
