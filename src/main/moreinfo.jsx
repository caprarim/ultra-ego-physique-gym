import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "./sidebar.jsx";
import EndBar from "./endBar.jsx";

const MoreInfo = () => {
  const showcaseSlides = [
    "public/ultraego/16.PNG",
    "public/ultraego/17.PNG",
    "public/ultraego/18.PNG",
    "public/ultraego/19.PNG",
    "public/ultraego/21.PNG",
    "public/ultraego/22.PNG",
    "public/ultraego/23.PNG",
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  let nav = useNavigate();

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => {
        return (currentSlide + 1) % showcaseSlides.length;
      });
    }, 3200);

    return () => window.clearInterval(slideTimer);
  }, [showcaseSlides.length]);

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
          <h1 className="moreinfo-title">Train Clean. Progress Hard.</h1>
          <div className="moreinfo-hero-image-wrap">
            <img
              src="public/ultraego/14.PNG"
              className="moreinfo-hero-image"
              alt="Ultra Ego Physique Gym training floor"
            />
            <div className="moreinfo-hero-overlay">
              <p className="moreinfo-hero-overlay-text">Built on discipline.</p>
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
            <p className="moreinfo-eyebrow">Why Ultra EgoPhysique</p>
            <h2 className="moreinfo-section-title">
              Clean movement. Better control. Real progression.
            </h2>
            <p className="moreinfo-section-text">
              Every session is built around sharper form, stronger habits, and
              consistent effort.
            </p>

            <div className="moreinfo-benefits-list">
              <article className="moreinfo-benefit-item">
                <span className="moreinfo-benefit-icon" aria-hidden="true">
                  01
                </span>
                <div>
                  <h3 className="moreinfo-detail-title">Deadlift Standard</h3>
                  <p className="moreinfo-detail-text">
                    Back straight, core tight, and every rep under control.
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
                    Chest up, hips back, and weight grounded through the heels.
                  </p>
                </div>
              </article>

              <article className="moreinfo-benefit-item">
                <span className="moreinfo-benefit-icon" aria-hidden="true">
                  03
                </span>
                <div>
                  <h3 className="moreinfo-detail-title">Timings That Work</h3>
                  <p className="moreinfo-detail-text">
                    Morning, ladies-only, and evening slots built for routine.
                  </p>
                </div>
              </article>

              <article className="moreinfo-benefit-item">
                <span className="moreinfo-benefit-icon" aria-hidden="true">
                  04
                </span>
                <div>
                  <h3 className="moreinfo-detail-title">Membership Value</h3>
                  <p className="moreinfo-detail-text">
                    Start at PKR 2,500, go quarterly at PKR 7,000, or train all
                    year for PKR 25,000.
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
              <p className="moreinfo-showcase-label">Be patient.</p>
              <p className="moreinfo-showcase-text">
                Progress comes from steady work, not noise.
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
              Be patient. Progress takes time.
            </h2>
            <p className="moreinfo-recovery-text">
              Refined results come from repeated effort, cleaner execution, and
              patience.
            </p>
            <Link className="moreinfo-recovery-cta" to="/memberships">
              See Plans
            </Link>
          </div>

          <div className="moreinfo-recovery-media">
            <img
              src="public/ultraego/13.PNG"
              alt="Ultra Ego Physique Gym showcase"
              className="moreinfo-recovery-image"
            />
          </div>
        </section>
      </main>
      <EndBar />
    </>
  );
};

export default MoreInfo;
