import React from "react";
import "./Contact.css";
import { FaYelp } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-main">
      <div>Address: 5324 N 7th Ave, Phoenix, Az 85013</div>
      <div>Hours: Sunday Closed</div>
      <div> Monday Closed</div>
      <div> Tuesday 9am-6pm</div>
      <div> Wednesday 9am-6pm</div>
      <div> Thursday 9am-6pm</div>
      <div> Friday 9am-6pm</div>
      <div>Saturday 8am-4pm</div>
      <div>Phone: (602) 274 0000</div>
      <a href="https://www.yelp.com/biz/juniors-barber-parlor-phoenix">
        <FaYelp size="40px" /> yelp
      </a>
    </div>
  );
}
