import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-main">
      <div className="about-body">
        <h1 className="about-blurb">
          Junior's Barbers provide high quality traditional, short hair cuts, as
          well as contemporary and trendy styles and much more.
        </h1>
        <h2 className="about-blurb">
          We pride ourselves on service in a comfortable and clean environment
        </h2>
        <div className="about-iframe">
          <iframe
            title="youtube"
            width="600"
            height="340"
            src="https://www.youtube.com/embed/ZzAiLtsXbOE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            alt="none"
          />
        </div>
      </div>
    </div>
  );
}
