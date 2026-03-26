import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "./sidebar.jsx";
import EndBar from "./endBar.jsx";

const Home = () => {
  const assetBase = import.meta.env.BASE_URL;
  let [isModalDisplay, setModalDisplay] = useState(true);
  let [openFaqIndex, setOpenFaqIndex] = useState(null);
  let [membership, setMembership] = useState("membership");

  let nav = useNavigate();
  const images = [
    `${assetBase}ultraego/15.PNG`,
    `${assetBase}ultraego/16.PNG`,
    `${assetBase}ultraego/17.PNG`,
    `${assetBase}ultraego/18.PNG`,
    `${assetBase}ultraego/19.PNG`,
    `${assetBase}ultraego/21.PNG`,
    `${assetBase}ultraego/22.PNG`,
    `${assetBase}ultraego/23.PNG`,
  ];
  const faqItems = [
    {
      question: "How do I join Ultra Ego Physique?",
      answer: `Pick a membership, visit the gym, and our team will guide you through the next step.`,
    },
    {
      question: "Can beginners train here?",
      answer:
        "Yes. We keep the process simple, clear, and manageable for first-time members.",
    },
    {
      question: "Do you offer personal training?",
      answer:
        "Yes. Our trainers help with form, structure, and steady progress for your goals.",
    },
    {
      question: "What are your hours like?",
      answer:
        "Our schedule is built for morning, afternoon, and evening training sessions.",
    },
    {
      question: "What should I bring on day one?",
      answer:
        "Bring workout clothes, water, and a focused mindset. We handle the rest.",
    },
  ];

  function toggleFaq(index) {
    setOpenFaqIndex((current) => (current === index ? null : index));
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  });

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".home-page > *");
    hiddenElements.forEach((element) => observer.observe(element));
  }, []);

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
                src={`${assetBase}ultraego/1.png`}
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
              src={`${assetBase}ultraego/12.PNG`}
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
              src={`${assetBase}clip.mp4`}
              className="home-promo-video"
              muted
              autoPlay
              loop
              playsInline
            ></video>
          </div>
        </section>

        <section className="home-faq" aria-label="Frequently asked questions">
          <div className="home-faq-header">
            <p className="home-faq-kicker">Quick Answers</p>
            <h2 className="home-faq-title">Frequently Asked Questions</h2>
          </div>

          <div className="home-faq-list">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <article
                  key={item.question}
                  className={`home-faq-item${isOpen ? " is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="home-faq-question"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="home-faq-question-text">
                      {item.question}
                    </span>
                    <span className="home-faq-icon" aria-hidden="true">
                      {isOpen ? "↑" : "↓"}
                    </span>
                  </button>
                  <div className="home-faq-answer-wrap" data-open={isOpen}>
                    <p className="home-faq-answer">{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="home-follow-header">
            <h1 className="follow-ig">Follow us on instagram</h1>
            <a
              className="follow-ig-btn"
              href={"https://www.instagram.com/ultra_egophysique/"}
              target="_blank"
              rel="noreferrer"
            >
              Follow
            </a>
          </div>

          <div className="image-slider-container">
            <div className="group">
              {images.map((imageSrc) => {
                return (
                  <>
                    <img
                      src={imageSrc}
                      className="sliderImg"
                      id="myCards"
                    ></img>
                  </>
                );
              })}
            </div>
            <div className="group" aria-hidden>
              {images.map((imageSrc) => {
                return (
                  <>
                    <img
                      src={imageSrc}
                      className="sliderImg"
                      id="myCards"
                    ></img>
                  </>
                );
              })}
            </div>
          </div>
        </section>

        <EndBar />
      </main>
    </>
  );
};

export default Home;
