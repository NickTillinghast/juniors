import React from "react";
import Header from "./Header.js";

// import juniorslogo from "../media/juniorssquarelogo.png";
import junior from "../media/juniorbanner.jpg";
import "./Home.css";


export default function Home() {
  return (
    <div className="home-main">
      <div>
        <Header />
      </div>
      <div className="home-junior-div">
        <img className="junior-image" src={junior} alt="none" />
      </div>
      <div className="home-second">
        <h1>Specializing in Traditional Men's Haircuts</h1>
        <p>
          
          Juniors is a classic barbershop with a modern twist in Phoenix, specializing in traditional men's haircuts such as pompadours, flat tops, and executive contours. We also offer hot towel shaves, beard trims, and carry premium grooming products for all of your needs.
        </p>
      </div>
    </div>
  );
}
