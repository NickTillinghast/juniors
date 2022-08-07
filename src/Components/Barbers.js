import React from "react";
import "./Barbers.css";


export default function Barbers() {
  return (
    <div className="barbers-main">
      <div className="barber-land">
        <div className="barbers-first">
          <div>
            <div className="barbers-inner">
              <h1 className="barb-h1">We Are Family</h1>
              <h2 className="barb-h2">I Hire only the Best</h2>
              <p className="barbers-box"><a className="instagram" href="https://www.instagram.com/juniorsbarberparlor/?hl=en" target="blank">check out our cuts</a></p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="set-barbers-0">
          <div className="junior-pics">
            <div className="junior-pic">
              <img className="juniors-image" src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1585088753/juniors/tvhzllggpqopjlrm5imj.jpg" alt="none" />
            </div>
            <div className="junior-pic">
              <img className="juniors-image" src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1585088762/juniors/g9ye6bwuzdqvqxpezqg0.jpg" alt="none" />
            </div>
          </div>
          <h1 className="junior-name">Junior</h1>
          <h2 className="junior-text">
            We specialize in consistency, quality haircuts. when you make a appointment your paying for
            your convenience. (No wait time) We take pride in what we do. Our work speaks for itself!  Passion ,vision ,perfection , consistency, conveniency haircuts.  That's what juniors is all about , quality haircut with quality time.  We guarantee you'll get your money's worth! Trust us!
          </h2>
          <div className="juniors-work">
            {/* <div>
                <img className="junior-working" src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1584594750/juniors/medbcbjpd9ckpxzofbz8.jpg" alt="none" />
              </div> */}
            <div>
              <img className="junior-working" src="https://res.cloudinary.com/dqpatwz6c/image/upload/c_scale,w_2400/v1584591705/juniors/vdfdvjq49ht2pnzo0bem.jpg" alt="none" />
            </div>
            <div>
              <img className="junior-working" src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1584590654/juniors/gwajtkf6eqyyiaonuiub.jpg" alt="none" />
            </div>
          </div>
        </div>
      </div>
      <div className="barber-set">
        <div className="set-barbers-2">
          <div className="barbers-adj-div">
            <div className="barber">
              <img className="barber-image"
                src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1585082713/juniors/qth1f6l6j43o8p3hprlo.jpg" alt="none" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="barbers-cuts">
          <div className='images'>
            <img className='single-image' src="https://res.cloudinary.com/dqpatwz6c/image/upload/v1584593549/juniors/jxfnzay4mavyjhoqbjsq.jpg" alt="none" />
          </div>
        </div>
      </div>

      {/* </div> */}
    </div >
  );
}
