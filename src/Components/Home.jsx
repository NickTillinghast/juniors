import React from "react";

import "./Home.css";


export default function Home() {
  return (
    <div className="home-main">
      <div className="hero home-hero">
        <h1 className="hero__title">Junior's Barber Parlor</h1>
        <p className="hero__subtitle">since 2016</p>
        <a className="button button--light" href="https://squareup.com/appointments/book/o8m0jbj28qhofw/Y4XZ4EM2MHW86/start" target="_blank" rel="noopener noreferrer">Book Now</a>
      </div>
      <div className="home-second">
        <h2 className="home-middle-text-h1">Specializing in Traditional Men's Haircuts</h2>
        <p className="home-middle-text">
          Juniors is a classic barbershop midtown in Phoenix, specializing in traditional men's haircuts such as pompadours, flat tops, and executive contours. We also offer hot towel shaves, beard trims, and carry premium grooming products for all of your needs.
        </p>
      </div>
      <div className="home-barbers">
        <div className="junior-third">
          <div className="junior-name">Junior</div>
          <div className="parlor-pics">
            <div className="junior-pic">
              <img className="shop-image" src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1584590652/juniors/nwkzuve0xar5mlzzejje.jpg" alt="Junior giving a haircut" />
            </div>
            <div className="junior-pic">
              <img className="shop-image" src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1584590661/juniors/ireeuaprkby3ovaynzdm.jpg" alt="Junior giving a beard trim" />
            </div>
          </div>
          <h2 className="junior-text">
            <p>When I first walked into a barbershop at a young age the atmosphere instantly grabbed my attention.  Growing up I wasn't always able to get a haircut, but this allowed me to cherish the moments spent in the barbershop with my father and brothers.  It also motivated me to learn how to cut my own hair.  Some people decide they want to go to a barber school and others just have it in them and are self-taught.  I knew I wanted to cut hair and I went for it.</p>
            <p>2016 was the year I opened Juniors Barber Parlor, when that happened I really had no idea what I was doing but I just knew it was my time.  I knew what I envisioned could come to reality, hard work pays off.  Now going on 4 years I'm glad I took that step forward, I love what I do and I'm proud of what I've done for my family and me.  My shop consists of great cuts, great customer service, and great professionalism.</p>
          </h2>
        </div>
      </div>
      <div className="third">
        <div>
          <h2 className="iframe-txt">Funky Old School Vibe</h2>
          <div className="iframe-txt-p">
            <div>
              <p className="iframe-inner-txt">My team and I are very grateful for the continuous support!  Come by the shop, get a cut!  Say what's up or just hang out...  We're a dope shop, we don't like negative energy, that's why our shop's vibe is always on point!  ... Jr...</p>
            </div>
          </div>
          <div className="about-iframe">
            <iframe
              title="youtube"
              src="https://www.youtube.com/embed/ZzAiLtsXbOE"
            /> <p className="iframe-inner-txt2">It's not just great cuts, it's a great experience</p>
          </div>
        </div>
      </div>
    </div >
  );
}
