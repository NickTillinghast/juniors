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
      </div>
    </div>
  );
}
