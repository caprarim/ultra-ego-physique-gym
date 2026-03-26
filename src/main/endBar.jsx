import React from "react";
import { useNavigate } from "react-router-dom";

const EndBar = () => {
  const nav = useNavigate();
  const assetBase = import.meta.env.BASE_URL;

  return (
    <footer className="socials-container">
      <div className="footer-grid">
        <section className="footer-column footer-column-contact">
          <h2 className="footer-column-title">{"\u{1F4DE}"} Contact Us</h2>
          <div className="footer-contact-block">
            <p className="footer-contact-address">
              <span className="footer-inline-emoji">{"\u{1F4CD}"}</span>
              <a
                className="anchor-location"
                href="https://www.google.com/maps/place/Ultra+Ego+Physique+Gym/@24.9781933,67.0630618,17z/data=!4m15!1m8!3m7!1s0x3eb341ce24019e9b:0xd04e65d74aaf9142!2sUltra+Ego+Physique+Gym!8m2!3d24.9781933!4d67.0656367!10e1!16s%2Fg%2F11mlzvyr9c!3m5!1s0x3eb341ce24019e9b:0xd04e65d74aaf9142!8m2!3d24.9781933!4d67.0656367!16s%2Fg%2F11mlzvyr9c?hl=en&entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                Plot #A, 906
                <br />
                near Ronaq-e-Sheereni
                <br />
                North Karachi
              </a>
            </p>
            <a className="footer-contact-phone" href="tel:03293179505">
              <span className="footer-inline-emoji">{"\u260E\uFE0F"}</span>
              <span>0329-3179505</span>
            </a>
            <a
              className="footer-contact-email"
              href="mailto:UltraEgoPhysique@gmail.com"
            >
              <span className="footer-inline-emoji">{"\u{1F4E7}"}</span>
              <span>UltraEgoPhysique@gmail.com</span>
            </a>
          </div>
        </section>

        <section className="footer-column">
          <h2 className="footer-column-title">{"\u{1F4AA}"} Plans</h2>
          <div
            className="footer-column-link"
            onClick={() => nav("/memberships")}
          >
            <span className="footer-inline-emoji">{"\u{1F3CB}\uFE0F"}</span>
            <span>Personal Training</span>
          </div>
          <div
            className="footer-column-link"
            onClick={() => nav("/memberships")}
          >
            <span className="footer-inline-emoji">{"\u{1F4C3}"}</span>
            <span>Membership Plans</span>
          </div>
        </section>

        <section className="footer-column">
          <h2 className="footer-column-title">{"\u{1F680}"} Start Here</h2>
          <div
            className="footer-column-link"
            onClick={() => nav("/memberships")}
          >
            <span className="footer-inline-emoji">{"\u2728"}</span>
            <span>Register</span>
          </div>
        </section>

        <section className="footer-column">
          <h2 className="footer-column-title">{"\u{1F310}"} Socials</h2>
          <a
            className="footer-column-link"
            href="https://www.instagram.com/ultra_egophysique/"
          >
            <span className="footer-inline-emoji">
              <img src={`${assetBase}ultraego/ig.png`} className="igpic"></img>
            </span>
            <span className="ig">Instagram</span>
          </a>
          <div className="footer-column-link footer-social-facebook">
            <span className="footer-inline-emoji footer-facebook-emoji">
              <img
                src={`${assetBase}fb.jpg`}
                className="fbpic"
                alt="Facebook"
              />
            </span>
            <span className="footer-facebook-label">Facebook</span>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default EndBar;
