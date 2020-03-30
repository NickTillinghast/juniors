import React, { Component } from "react";
import routes from "./routes";
import { Switch } from 'react-router-dom';
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import "./App.css";

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <Switch >

          {routes}
        </Switch>
        <Footer />

      </div>
    );
  }
}
export default App;
