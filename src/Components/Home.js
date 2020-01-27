import React from "react";
import video from "../media/video.mp4";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-main">
      <div className="home-sidebar">
        stuff for the side
        <div>
          This place is awesome!! I'm religious about getting my haircut every
          other Friday and these guys make it easy! Make sure you book an
          appointment in advance because they book up quickly. Walk-ins are
          accepted but not the best way to go since appointments come first. All
          the barbers are fantastic, Karina, Berto, Rich & Junior! This is a
          place above the rest, you will not be disappointed, I guarantee it
        </div>
      </div>
      <div className="home-video"></div>
      <video className={"video"} autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

      {/* <div className="home-iframe"> */}
      {/* <div> */}
      {/* <div> */}
      {/* <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ZzAiLtsXbOE"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
