import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <div>
      <div className="services-main">
        <div className="services-inner">
          <h1>Services</h1>
          <p>We stand by our quality of work</p>

          <p className="services-box"><a className="services-phone" href="tel:6022740000" >Call and Book With Us</a></p>

        </div>
      </div>
      <div>
        <div>
          <div className="services-div">
            <h2>Haircuts and Shaves</h2>
          </div>
          <div className="services-list" >
            <div className="services-list-a">
              <div>Hair cut $30</div>
              <div>Beard trim $20</div>
              <div>Straight Shave $25</div>
              <div>Eyebrows $10</div>
              <div>Childs cut $25</div>
            </div>
            <div className="services-list-b">
              <div>Head and Beard $40</div>
              <div>Seniors $20</div>
              <div>Nose and Ear waxing $10</div>
              <div>Face Cleanser $10</div>
              <div>Black Mask $10</div>
            </div>

          </div>
          <p className="house-call">House Calls Reservation only $100</p>
          <div className="appointments-div">
            <div className="appointments">
              <h1>Appointment Polices</h1>
              <p>We request a 24 hour notice to cancel or reschedule your appointment.
                If you no call no show for your appointment then full cost of services are required.</p>
              <h1>Appointments</h1>
              <p>We know that life can be busy so we welcome appointments by phone for those who like to plan.  We also know that sometimes you get the idea of getting a cut on the fly so Juniors Barber Parlor also welcomes walk in customers.  </p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
