import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a className="social-icon" href="https://www.facebook.com/juniorsbarberparlor" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF size={32} />
        </a>
        <a className="button button--dark" href="https://squareup.com/appointments/book/o8m0jbj28qhofw/Y4XZ4EM2MHW86/start" target="_blank" rel="noopener noreferrer">Book Now</a>
        <a className="social-icon" href="https://www.instagram.com/juniorsbarberparlor/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={32} />
        </a>
      </div>
      <div className="footer-main">
        <div className="footer-info">
          <h2>Visit</h2>
          <p>Juniors Barber Parlor</p>
          <p>5324 N 7th Ave, Phoenix, AZ 85013</p>
          <p>Northwest side of 7th Ave and Missouri</p>
        </div>
        <div className="footer-info">
          <h2>Contact</h2>
          <p><a className="footer-link" href="tel:6022740000">(602) 274-0000</a></p>
          <p><a className="footer-link" href="https://www.yelp.com/biz/juniors-barber-parlor-phoenix" target="_blank" rel="noopener noreferrer">Check out our reviews on Yelp</a></p>
        </div>
        <div className="footer-info">
          <h2>Hours</h2>
          <dl className="hours">
            <dt>Sunday</dt><dd>Closed</dd>
            <dt>Monday</dt><dd>Closed</dd>
            <dt>Tuesday</dt><dd>9am–6pm</dd>
            <dt>Wednesday</dt><dd>9am–6pm</dd>
            <dt>Thursday</dt><dd>9am–6pm</dd>
            <dt>Friday</dt><dd>9am–6pm</dd>
            <dt>Saturday</dt><dd>8am–4pm</dd>
          </dl>
        </div>
      </div>
    </footer>
  );
}
