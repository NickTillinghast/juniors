import React from "react";
import "./Services.css";

const prices = [
  ["Haircut", "$45"],
  ["Haircut and Beard", "$55"],
  ["Beard Trim", "$30"],
  ["Seniors", "$25"],
  ["Eyebrows", "$10"],
  ["Nose and Ear Waxing", "$10"],
  ["Haircut 12 and Younger", "$30"],
  ["Black Mask", "$10"],
];

export default function Services() {
  return (
    <div className="page">
      <section className="hero services-hero">
        <h1 className="hero__title">Services</h1>
        <p className="hero__subtitle">We stand by our quality of work</p>
        <a className="button button--light" href="https://squareup.com/appointments/book/o8m0jbj28qhofw/Y4XZ4EM2MHW86/start" target="_blank" rel="noopener noreferrer">Book With Us</a>
      </section>

      <section className="section">
        <div className="container">
          <h2>Haircuts and Shaves</h2>
          <ul className="price-list">
            {prices.map(([name, price]) => (
              <li key={name}>
                <span>{name}</span>
                <span>{price}</span>
              </li>
            ))}
          </ul>
          <p className="house-call">House Calls by Reservation Only $100</p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="prose">
          <h2>Appointment Policies</h2>
          <p>We request 24-hour notice to cancel or reschedule your appointment.
            If you no-call/no-show for your appointment, the full cost of services is required.</p>
          <h2>Appointments</h2>
          <p>We know that life can be busy so we welcome appointments by phone for those who like to plan.  We also know that sometimes you get the idea of getting a cut on the fly so Juniors Barber Parlor also welcomes walk-in customers.</p>
        </div>
      </section>
    </div>
  );
}
