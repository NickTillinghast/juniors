import React from "react";
// import juniorslogo from "../media/juniorssquarelogo.png";
import junior1 from "../media/junior1.jpg";
import junior2 from "../media/junior2.jpg";
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
              src="https://www.youtube.com/embed/ZzAiLtsXbOE"
              alt="none"
            /> <p>we make you look better than god did</p>
          </div>
        </div>
      </div>
      <div className="home-barbers">
        <div className="set-barbers-1">
          <div className="junior-third">
            <div className="junior-pics">
              <div className="junior-pic">
                <img className="barber-image" src={junior1} alt="none" />
              </div>
              <div className="junior-pic">
                <img className="barber-image" src={junior2} alt="none" />
              </div>
            </div>
            <h1 className="junior-name">Junior</h1>
            <h2 className="junior-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum."
            </h2>
          </div>
        </div>
      </div>
    </div >
  );
}
