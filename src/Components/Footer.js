import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-main">

      <div className="footer-info">
        <h1>Juniors Barber Parlor</h1>
        <p>located at 5324 N 7th Ave, Phoenix, AZ 85013</p>
        <p>northwest side of 7th street and missouri</p>
      </div>
      <div className="footer-info">
        <h3>book and appointment</h3>
        <p>phone: <a className="phone" href="tel:6022740000" >(602) 274-0000</a></p>
        <a className="phone" href="https://www.yelp.com/biz/juniors-barber-parlor-phoenix" target="blank">Check out our awesome reviews on yelp</a>
      </div>
      <div>
        <a href="https://www.facebook.com/juniorsbarberparlor" target="blank">
          <FaFacebookF size={40} style={{ color: "white" }} />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/juniorsbarberparlor/?hl=en" target="blank">
          <FaInstagram size={40} style={{ color: "white" }} />
        </a>
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
    </div >
  );
}
