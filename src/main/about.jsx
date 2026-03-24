import React from "react";
import SideBar from "./sidebar.jsx";
import { useNavigate } from "react-router-dom";
import EndBar from "./endBar.jsx";

const About = () => {
  let nav = useNavigate();

  return (
    <>
      <main className="gym-page about-page">
        <SideBar
          click1={() => nav("/about")}
          click2={() => nav("/")}
          click3={() => nav("/moreinfo")}
          click4={() => nav("/memberships")}
        ></SideBar>

        <section className="about-v2-hero">
          <img
            src={`public/ultraego/19.PNG`}
            className="about-v2-hero-image"
            alt="Ultra Ego Physique Gym training"
          />
          <div className="about-v2-hero-shade" />
        </section>

        <section className="about-v2-main">
          <div className="about-v2-intro">
            <h1 className="about-v2-title">
              Built For <span>Discipline</span> And Results.
            </h1>
            <p className="about-v2-subtitle">
              Ultra Ego Physique Gym is for members who want clean training,
              better form, and progress that lasts.
            </p>
          </div>

          <div className="about-v2-feature-row">
            <article className="about-v2-feature">
              <span className="about-v2-feature-icon" aria-hidden="true">
                💎
              </span>
              <h2 className="about-v2-feature-title">Premium Value</h2>
              <p className="about-v2-feature-text">
                Start at PKR 2,500. Go quarterly at PKR 7,000. Commit yearly at
                PKR 25,000.
              </p>
            </article>

            <article className="about-v2-feature">
              <span className="about-v2-feature-icon" aria-hidden="true">
                🏋️
              </span>
              <h2 className="about-v2-feature-title">Technique Focus</h2>
              <p className="about-v2-feature-text">
                Deadlifts, squats, cardio, and full-body work with cleaner form
                and better control.
              </p>
            </article>

            <article className="about-v2-feature">
              <span className="about-v2-feature-icon" aria-hidden="true">
                🕒
              </span>
              <h2 className="about-v2-feature-title">Flexible Timing</h2>
              <p className="about-v2-feature-text">
                Morning, ladies-only, and late-evening slots keep training
                practical.
              </p>
            </article>
          </div>

          <div className="about-v2-detail-row">
            <article className="about-v2-detail">
              <h3 className="about-v2-detail-title">🎯 Mission</h3>
              <p className="about-v2-detail-text">
                Build stronger bodies through discipline, patience, and proper
                training.
              </p>
            </article>

            <article className="about-v2-detail">
              <h3 className="about-v2-detail-title">🏋️ Services</h3>
              <p className="about-v2-detail-text">
                Strength training, cardio access, ladies-only timing, and
                serious membership options.
              </p>
            </article>

            <article className="about-v2-detail">
              <h3 className="about-v2-detail-title">📍 Location</h3>
              <p className="about-v2-detail-text">
                Plot #A, 906, near Ronaq-e-Sheereni, North Karachi.
              </p>
            </article>
          </div>
        </section>
      </main>
      <EndBar />
    </>
  );
};

export default About;
