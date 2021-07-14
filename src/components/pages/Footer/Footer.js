import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedIn,
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
    </div>
  );
}

export default Footer;
