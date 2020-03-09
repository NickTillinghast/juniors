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
        <p>location</p>

      </div>
      <div>
        <a href="https://www.instagram.com/juniorsbarberparlor/?hl=en" target="blank">
          <FaInstagram size={40} style={{ color: "white" }} />
        </a>
      </div>
    </div>
  );
}
