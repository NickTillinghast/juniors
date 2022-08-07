import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <div>
      <div className="services-main">
        <div className="services-inner">
          <div className="title">Services</div>
          <div>We stand by our quality of work</div>

          <p className="services-box"><a className="services-phone" href="https://squareup.com/appointments/book/o8m0jbj28qhofw/Y4XZ4EM2MHW86/start" target="blank" rel='noref'>Book With Us</a></p>

        </div>
      </div>
      <div>
        <div>
          <div className="services-div">
            <h2>Haircuts and Shaves</h2>
          </div>
          <div className="services-list" >
            <div className="services-list-a">
              <div>Hair Cut $45</div>
              <div>Beard Trim $30</div>
              <div>Eyebrows $10</div>
              <div>Hair Cut 12 and Younger $30</div>
            </div>
            <div className="services-list-b">
              <div>Haircut and Beard $55</div>
              <div>Seniors $25</div>
              <div>Nose and Ear waxing $10</div>
              <div>Black Mask $10</div>
            </div>
          </div>
          <div className="house-call">
            <p>House Calls By Reservation only $100</p>
          </div>
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
