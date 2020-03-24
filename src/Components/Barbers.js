import React from "react";
import rich from "../media/rich.jpg";
import berto from "../media/berto.jpg";
import emmy from "../media/emmy.jpg";
import junior1 from "../media/junior1.jpg";
import junior2 from "../media/junior2.jpg";
import "./Barbers.css";


export default function Barbers() {
  return (
    <div className="barbers-main">
      <div>
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
                <img className="barber-image" src={junior1} alt="none" />
              </div>
              <div className="junior-pic">
                <img className="barber-image" src={junior2} alt="none" />
              </div>
            </div>
            <h1 className="junior-name">Junior</h1>
            <h2 className="junior-text">
              We specialize in consistency, quality haircuts. when you make a appointment your paying for
  your convenience. (No wait time) We take pride in what we do. Our work speaks for itself!  Passion ,vision ,perfection , consistency, conveniency haircuts.  That's what juniors is all about , quality haircut with quality time.  We guarantee you'll get your money's worth! Trust us!
            </h2>
          </div>
        </div>
        <div>
          <div className="barber-set">
            <div className="set-barbers-2">
              <div className="barber-div">
                <div className="barber">
                  <img className="barber-image" src={berto} alt="none" />
                </div>
                <h1 className="barber-name">Berto</h1>
                <h2 className="barber-text">
                  "Berto is the worlds greatest barber ever to live" --Berto's mom.
              </h2>
              </div>
              <div className="barber-div">
                <div className="barber">
                  <img className="barber-image" src={rich} alt="none" />
                </div>
                <h1 className="barber-name">Rich</h1>
                <h2 className="barber-text">
                  "I like pizza because its round.  Juggling is cool too."
              </h2>
              </div>
              <div className="barber-div">
                <div className="barber">
                  <img className="barber-image" src={emmy} alt="none" />
                </div>
                <h1 className="barber-name">Emmy</h1>
                <h2 className="barber-text">
                  "I come from LA to represent beast mode all ovet these phoenix ladies."
                </h2>
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
      </div>
    </div>
  );
}
