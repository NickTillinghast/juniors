import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <div>
      <div className="services-main">
        <div className="services-inner">
          <div className="title">Services</div>
          <div>We stand by our quality of work</div>

          <a className="button button--light" href="https://squareup.com/appointments/book/o8m0jbj28qhofw/Y4XZ4EM2MHW86/start" target="_blank" rel="noopener noreferrer">Book With Us</a>

        </div>
      </div>
      <div>
        <div>
          <div className="services-div">
            <h2>Haircuts and Shaves</h2>
          </div>
          <div className="services-list" >
            <div className="services-list-a">
              <div>Haircut $45</div>
              <div>Beard Trim $30</div>
              <div>Eyebrows $10</div>
              <div>Haircut 12 and Younger $30</div>
            </div>
            <div className="services-list-b">
              <div>Haircut and Beard $55</div>
              <div>Seniors $25</div>
              <div>Nose and Ear Waxing $10</div>
              <div>Black Mask $10</div>
            </div>
          </div>
          <div className="house-call">
            <p>House Calls by Reservation Only $100</p>
          </div>
          <div className="appointments-div">
            <div className="appointments">
              <h2>Appointment Policies</h2>
              <p>We request 24-hour notice to cancel or reschedule your appointment.
                If you no-call/no-show for your appointment, the full cost of services is required.</p>
              <h2>Appointments</h2>
              <p>We know that life can be busy so we welcome appointments by phone for those who like to plan.  We also know that sometimes you get the idea of getting a cut on the fly so Juniors Barber Parlor also welcomes walk-in customers.  </p>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}
