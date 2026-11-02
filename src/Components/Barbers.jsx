import React from "react";
import { FaUsers, FaCouch, FaChild } from "react-icons/fa";
import "./Barbers.css";

const values = [
  {
    icon: FaUsers,
    title: "Family First",
    text: "Junior grew up cherishing time in the barbershop with his father and brothers. That's the feeling the shop is built around: bring your dad, your son, your whole crew.",
  },
  {
    icon: FaCouch,
    title: "Come Hang Out",
    text: "Say what's up, grab a seat, stay a while. No negative energy here, just good conversation and a vibe that's always on point.",
  },
  {
    icon: FaChild,
    title: "Every Generation",
    text: "From kids 12 and under to our seniors, everyone in the chair gets the same care and attention. Appointments and walk-ins welcome.",
  },
];

export default function Barbers() {
  return (
    <div className="page">
      <section className="hero barbers-hero">
        <h1 className="hero__title">We Are Family</h1>
        <p className="hero__subtitle">I Hire only the Best</p>
        <a className="button button--light" href="https://www.instagram.com/juniorsbarberparlor/?hl=en" target="_blank" rel="noopener noreferrer">Check Out Our Cuts</a>
      </section>

      <section className="section">
        <div className="container about-intro">
          <img
            className="about-intro__photo"
            src="https://res.cloudinary.com/dqpatwz6c/image/upload/w_800,f_auto,q_auto/v1585088753/juniors/tvhzllggpqopjlrm5imj.jpg"
            alt="Junior, owner of Juniors Barber Parlor"
            loading="lazy"
          />
          <div className="about-intro__text">
            <h2>Junior</h2>
            <p>
              We specialize in consistent, quality haircuts. When you make an appointment, you're paying for
              your convenience. (No wait time) We take pride in what we do. Our work speaks for itself!  Passion, vision, perfection, consistency, convenience.  That's what Juniors is all about: quality haircuts with quality time.  We guarantee you'll get your money's worth! Trust us!
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2>The Juniors Way</h2>
          <div className="values">
            {values.map(({ icon: Icon, title, text }) => (
              <div className="value" key={title}>
                <Icon className="value__icon" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-gallery">
            <figure>
              <img src="https://res.cloudinary.com/dqpatwz6c/image/upload/w_900,f_auto,q_auto/v1585082713/juniors/qth1f6l6j43o8p3hprlo.jpg" alt="Junior standing in front of the Juniors Barber Parlor window" loading="lazy" />
              <figcaption>Junior out front of the shop</figcaption>
            </figure>
            <figure>
              <img src="https://res.cloudinary.com/dqpatwz6c/image/upload/w_900,f_auto,q_auto/v1584593549/juniors/jxfnzay4mavyjhoqbjsq.jpg" alt="Grid of haircuts by Juniors Barber Parlor" loading="lazy" />
              <figcaption>A few of our cuts</figcaption>
            </figure>
          </div>
          <a className="button button--dark" href="https://www.instagram.com/juniorsbarberparlor/?hl=en" target="_blank" rel="noopener noreferrer">See More on Instagram</a>
        </div>
      </section>
    </div>
  );
}
