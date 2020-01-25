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
        logo
      </div>
      <div className="menu">
        <div className="menu-items">barbers</div>
        <div className="menu-items">about</div>
        <div className="menu-items">services</div>
        <div className="menu-items">contact</div>
      </div>
    </div>
  );
}
