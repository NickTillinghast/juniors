import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Barbers from "./Components/Barbers";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Landing from "./Components/Landing";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Footer" component={Footer} />
    <Route path="/Header" component={Header} />
    <Route path="/Barbers" component={Barbers} />
    <Route path="/Services" component={Services} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Landing" component={Landing} />
  </Switch>
);
