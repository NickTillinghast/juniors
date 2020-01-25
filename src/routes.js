import React from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* <Route path="/About" component={About} /> */}
    <Route path="/Footer" component={Footer} />
    <Route path="/Header" component={Header} />
  </Switch>
);
