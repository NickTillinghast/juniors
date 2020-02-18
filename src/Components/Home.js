import React from "react";
import juniorslogo from "../media/juniorssquarelogo.png";
import junior from "../media/juniorbanner.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-main">
      <div >
        <img className="homelogo" src={juniorslogo} alt="none" />
      </div>
      <div >
        <img className="junior-image" src={junior} alt="none" />
      </div>
      <div>
        {/* <div className="home-sidebar">
          This place is awesome!! I'm religious about getting my haircut every
          other Friday and these guys make it easy! Make sure you book an
          appointment in advance because they book up quickly. Walk-ins are
          accepted but not the best way to go since appointments come first. All
          the barbers are fantastic, Karina, Berto, Rich and Junior! This is a
          place above the rest, you will not be disappointed, I guarantee it
        </div> */}
      </div>
    </div>
  );
}
