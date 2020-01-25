import React from "react";
import juniorslogo from "../media/juniorslogo.png";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-main">
      <div>
        <div className="logo-div">
          <img className="logo" src={juniorslogo} alt="none" />
        </div>
      </div>
      <div className="menu">
        <div className="menu-items">About</div>
        <div className="menu-items">Barbers</div>
        <div className="menu-items">Services</div>
        <div className="menu-items">Contact</div>
      </div>
    </div>
  );
}
