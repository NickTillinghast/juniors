import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Location from "./Components/Location";
import Barbers from "./Components/Barbers";
import Services from "./Components/Services";


export default (
  <Switch>
    <Route path="/Header" component={Header} />
    <Route exact path="/" component={Home} />
    <Route path="/Location" component={Location} />
    <Route path="/Footer" component={Footer} />
    <Route path="/Barbers" component={Barbers} />
    <Route path="/Services" component={Services} />
  </Switch>
);
