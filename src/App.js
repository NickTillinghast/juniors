import React, { Component } from "react";
import routes from "./routes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import "./App.css";

class App extends Component {
  render() {
    console.log(process.env.REACT_APP_GOOGLE_API_KEY)
    return (
      <div className="App">
        <Header />

        {routes}
        <Footer />

      </div>
    );
  }
}
export default App;
