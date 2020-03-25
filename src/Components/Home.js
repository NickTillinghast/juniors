import React from "react";

import "./Home.css";


export default function Home() {
  return (
    <div className="home-main">
      <div>
        <div className="home-junior-div" >
          <div className="home-main-title">
            <div className="home-main-text">
              <h1 className="home-title">Junior's Barber Parlor</h1>
              <h3 className="home-title-2">since 2016</h3>
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

                Juniors is a classic barbershop midtown in Phoenix, specializing in traditional men's haircuts such as pompadours, flat tops, and executive contours. We also offer hot towel shaves, beard trims, and carry premium grooming products for all of your needs.
        </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-barbers">
        <div className="set-barbers-1">
          <div className="junior-third">
            <h1 className="junior-name">Junior</h1>
            <div className="parlor-pics">
              <div className="junior-pic">
                <img className="shop-image" src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1584590652/juniors/nwkzuve0xar5mlzzejje.jpg" alt="none" />
              </div>
              <div className="junior-pic">
                <img className="shop-image" src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1584590661/juniors/ireeuaprkby3ovaynzdm.jpg" alt="none" />
              </div>
            </div>

            <h2 className="junior-text">
              <p>When I first walked into a barbershop at a young age the atmosphere instantly grabbed my attention.  Growing up I wasn't always able to get a haircut, but this allowed me to cherish the moments spent in the barbershop with my father and brothers.  It also motivated me to learn how to cut my own hair.  Some people decide they want to go to a barber school and others just have it in them and are self taught.  I knew I wanted to cut hair and I went for it.</p>
              <p>2016 was the year I opened Juniors Barber Parlor, when that happened I really had no idea what I was doing but I just knew it was my time.  I knew what I envisioned could come to reality, hard work pays off.  Now going on 4 years I'm glad I took that step forward, I love what I do and I'm proud of what I've done for my family and I.  My shop consist of great cuts great customer service and great professionalism.</p>
            </h2>
          </div>
        </div>
      </div>
      <div className="third">
        <div>
          <h2 className="iframe-txt">Funky Old School Vibe</h2>
          <div className="iframe-txt-p">
            <div>
              <p className="iframe-inner-txt">My team and I are very greatful for the continuous support!  Come by the shop, get a cut!  Say Whats up or just hang out...  We're a dope shop, we don't like negative energy, that's why our shops vibe is always on point!  ... Jr...</p>
            </div>
          </div>
          <div className="about-iframe">
            <iframe
              title="youtube"
              src="https://www.youtube.com/embed/ZzAiLtsXbOE"
              alt="none"

            /> <p className="iframe-inner-txt2">It's not just Great cuts its a Great experience</p>
          </div>

        </div>
      </div>

    </div >
  );
}
