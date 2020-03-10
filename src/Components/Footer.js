import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-main">
      <div>
        <a href="https://www.facebook.com/juniorsbarberparlor" target="blank">
          <FaFacebookF size={40} style={{ color: "white" }} />
        </a>
      </div>
      <div className="footer-info">
        <h1>Juniors Barber Parlor</h1>
        <p>located at 5324 N 7th Ave, Phoenix, AZ 85013</p>
        <p>northwest side of 7th street and missouri</p>
      </div>
      <div className="footer-info">
        <h3>book and appointment</h3>
        <p>phone: <a className="phone" href="tel:6024866621" >602 555 5555</a></p>
      </div>
      <div className="footer-info">
        <h3>Hours</h3>
        <p>Sunday Closed</p>
        <p>Monday Closed</p>
        <p>Tuesday 9am-6pm</p>

      </div>
      <div className="footer-info">
        <p> Wednesday 9am-6pm</p>
        <p>Thursday 9am-6pm</p>
        <p>Friday 9am-6pm</p>
        <p>Saturday 8am-4pm</p>
      </div>
      <div>
        <a href="https://www.instagram.com/juniorsbarberparlor/?hl=en" target="blank">
          <FaInstagram size={40} style={{ color: "white" }} />
        </a>
      </div>
    </div >
  );
}
