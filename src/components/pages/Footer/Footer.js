import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { GiAnvilImpact } from "react-icons/gi";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription-heading">
        <p className="footer-subscription-heading">
          Join our email list to get updates on new projects completed.
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/about">
              <h2>About</h2>
            </Link>
            {/* <Link to="/about"></Link> */}
            {/* <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link> */}
          </div>
          <div className="footer-link-items">
            <a href="mailto:tmcdonough08@gmail.com">
              <h2>Contact</h2>
            </a>
          </div>
          <div className="footer-link-items">
            <a href="//www.youtube.com" target="_blank" rel="noreferrer">
              <h2>Videos</h2>
            </a>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a
              href="//www.instagram.com/mcdonoughforge/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="//www.facebook.com/tommy.mcdonough.9"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a href="//www.youtube.com" target="_blank" rel="noreferrer">
              YoutTube
            </a>
            {/* <Link to="/">Twitter</Link> */}
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <GiAnvilImpact className="navbar-icon" />
              Blacksmith
            </Link>
          </div>
          <small className="website-rights">McDonough &#169; 2021</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to={"//www.facebook.com/tommy.mcdonough.9"}
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook className="iconImg" />
            </Link>
            <Link
              className="social-icon-link"
              to={"//www.instagram.com/mcdonoughforge/"}
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram className="iconImg" />
            </Link>
            <Link
              className="social-icon-link"
              to={"//www.youtube.com"}
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube className="iconImg" />
            </Link>
            {/* <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link> */}
            <Link
              className="social-icon-link"
              to={"//www.linkedin.com/in/tom-mcdonough-00460215/"}
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="iconImg" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
