import React from "react";
import "./Location.css";

export default function Location() {
  return (
    <div className="page">
      <section className="hero location-hero">
        <h1 className="hero__title">Juniors Barber Parlor</h1>
        <p className="hero__subtitle">We are located in Midtown Phoenix just north of Missouri and 7th Ave</p>
      </section>

      <section className="section">
        <div className="container map-info">
          <div className="info-div">
            <h3>Our Address</h3>
            <p>5324 N 7th Ave, Phoenix, AZ 85013</p>
            <h3>Book an Appointment</h3>
            <p><a className="phone-map" href="tel:6022740000">(602) 274-0000</a></p>
            <h3>Connect with Us</h3>
            <p><a className="phone-map" href="https://www.instagram.com/juniorsbarberparlor/?hl=en" target="_blank" rel="noopener noreferrer">@juniorsbarberparlor</a></p>
          </div>
          <iframe
            className="map-embed"
            title="Map to Juniors Barber Parlor"
            src="https://maps.google.com/maps?q=5324%20N%207th%20Ave%2C%20Phoenix%2C%20AZ%2085013&z=15&output=embed"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
