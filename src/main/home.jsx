import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./sidebar.jsx";
import EndBar from "./endBar.jsx";

const Home = () => {
  const assetBase = import.meta.env.BASE_URL;
  let [isModalDisplay, setModalDisplay] = useState(true);
  let nav = useNavigate();

  function joinGym() {
    setModalDisplay(false);
    nav("/memberships");
  }

  function nav2Abt() {
    nav("/about");
  }

  function removeModalDisplay() {
    setModalDisplay(false);
  }

  return (
    <>
      <main className="gym-page home-page">
        <section
          className="home-entry-modal"
          aria-label="Join Ultra Ego Physique Gym"
          style={isModalDisplay ? { display: "grid" } : { display: "none" }}
          onClick={removeModalDisplay}
        >
          <div className="home-entry-modal-backdrop" />
          <div
            className="home-entry-modal-shell"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="home-entry-modal-close"
              aria-label="Close modal"
              onClick={removeModalDisplay}
            >
              ×
            </button>

            <div className="home-entry-modal-brand">
              <img
                src={`public/ultraego/1.png`}
                alt="Ultra Ego Physique Gym crest"
                className="home-entry-modal-logo"
              />
              <p className="home-entry-modal-brandline">
                Be Patient. Progress Takes Time.
              </p>
            </div>

            <div className="home-entry-modal-divider" />

            <div className="home-entry-modal-copy">
              <p className="home-entry-modal-kicker">Start With Purpose</p>
              <h2 className="home-entry-modal-title">JOIN ULTRA EGO</h2>
              <p className="home-entry-modal-subtitle">
                Shape your body with us.
              </p>
              <p className="home-entry-modal-text">
                Clean training, serious effort, and progress that holds.
              </p>

              <div className="home-entry-modal-actions">
                <button
                  type="button"
                  className="home-entry-modal-primary"
                  onClick={joinGym}
                >
                  See Plans
                </button>
              </div>
            </div>
          </div>
        </section>

        <SideBar
          click1={nav2Abt}
          click2={() => nav("/")}
          click3={() => nav("/moreinfo")}
          click4={() => nav("/memberships")}
        ></SideBar>

        <section className="gym-hero">
          <h1 className="gym-title">
            <img
              src={`public/ultraego/12.PNG`}
              className="cool-pic-baki"
              alt="Ultra Ego Physique Gym athlete"
            />
            <span className="gym-title-accent">Ultra Ego Physique</span> Gym
          </h1>
        </section>

        <section className="home-promo">
          <div className="home-promo-copy">
            <p className="home-promo-kicker">Premium Training</p>
            <h2 className="home-promo-title">
              Built for discipline, quality, and serious progress
            </h2>
            <button type="button" className="home-promo-cta" onClick={joinGym}>
              Join Now
            </button>
            <p className="home-promo-subtext">
              A cleaner gym experience with stronger energy, focused training,
              and a standard that stays high.
            </p>
          </div>

          <div className="home-promo-video-wrap">
            <video
              src={`public/clip.mp4`}
              className="home-promo-video"
              muted
              autoPlay
              loop
              playsInline
            ></video>
          </div>
        </section>
        <EndBar />
      </main>
    </>
  );
};

export default Home;
