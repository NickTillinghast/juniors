import React from "react";
// import juniorslogo from "../media/juniorssquarelogo.png";

import "./Home.css";


export default function Home() {
  return (
    <div className="home-main">
      <div>
        <div className="home-junior-div" >
          <div className="home-main-title">
            <div className="home-main-text">
              <h1 className="home-title">Junior's Barber Parlor</h1>
              <p className="home-title-sub">I believe in pizza and meatballs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-second">
        <div>
          <div>
            <div>
              <h1 className="home-middle-text-h1">Specializing in Traditional Men's Haircuts</h1>
              <p className="home-middle-text">

                Juniors is a classic barbershop with a modern twist in Phoenix, specializing in traditional men's haircuts such as pompadours, flat tops, and executive contours. We also offer hot towel shaves, beard trims, and carry premium grooming products for all of your needs.
        </p>
            </div>
          </div>
        </div>
      </div>
      <div className="third">
        <div>
          <p>we make you look better than god did</p>
          <div className="about-iframe">
            <iframe
              title="youtube"
              // width="1200"
              // height="680"
              src="https://www.youtube.com/embed/ZzAiLtsXbOE"
              // frameBorder="0"
              // allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              // allowFullScreen
              alt="none"
            />
          </div>
        </div>
      </div>
    </div >
  );
}
