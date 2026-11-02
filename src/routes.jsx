import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Location from "./Components/Location";
import Barbers from "./Components/Barbers";
import Services from "./Components/Services";

export default (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Location" element={<Location />} />
    <Route path="/Barbers" element={<Barbers />} />
    <Route path="/Services" element={<Services />} />
  </Routes>
);
