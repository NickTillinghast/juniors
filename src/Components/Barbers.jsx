import React from "react";
import "./Barbers.css";


export default function Barbers() {
  return (
    <div className="barbers-main">
      <div className="hero barbers-hero">
        <h1 className="hero__title">We Are Family</h1>
        <p className="hero__subtitle">I Hire only the Best</p>
        <a className="button button--light" href="https://www.instagram.com/juniorsbarberparlor/?hl=en" target="_blank" rel="noopener noreferrer">Check Out Our Cuts</a>
      </div>
      <div>
        <div className="set-barbers-0">
          <div className="junior-pics">
            <div className="junior-pic">
              <img className="juniors-image" src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1585088753/juniors/tvhzllggpqopjlrm5imj.jpg" alt="Junior, owner of Juniors Barber Parlor" />
            </div>
          </div>
          <h2 className="junior-name">Junior</h2>
          <h2 className="junior-text">
            We specialize in consistent, quality haircuts. When you make an appointment, you're paying for
            your convenience. (No wait time) We take pride in what we do. Our work speaks for itself!  Passion, vision, perfection, consistency, convenience.  That's what Juniors is all about: quality haircuts with quality time.  We guarantee you'll get your money's worth! Trust us!
          </h2>
          <div className="juniors-work">
            {/* <div>
                <img className="junior-working" src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1584594750/juniors/medbcbjpd9ckpxzofbz8.jpg" alt="none" />
              </div> */}
            <div>
              <img className="junior-working" src="https://res.cloudinary.com/dqpatwz6c/image/upload/c_scale,w_2400/v1584591705/juniors/vdfdvjq49ht2pnzo0bem.jpg" alt="Junior cutting a client's hair" />
            </div>
            <div>
              <img className="junior-working" src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1584590654/juniors/gwajtkf6eqyyiaonuiub.jpg" alt="Junior at work in the shop" />
            </div>
          </div>
        </div>
      </div>
      <div className="barber-set">
        <div className="set-barbers-2">
          <div className="barbers-adj-div">
            <div className="barber">
              <img className="barber-image"
                src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1585082713/juniors/qth1f6l6j43o8p3hprlo.jpg" alt="Inside Juniors Barber Parlor" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="barbers-cuts">
          <div className='images'>
            <img className='single-image' src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1584593549/juniors/jxfnzay4mavyjhoqbjsq.jpg" alt="Grid of haircuts by Juniors Barber Parlor" />
          </div>
        </div>
      </div>

      {/* </div> */}
    </div >
  );
}
