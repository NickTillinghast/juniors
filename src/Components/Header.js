import React, { Component } from "react";
import juniorslogo from "../media/juniorslogo.png";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navBar: false
    };
  }

  render() {
    return (
      <div className="header-main">
        <div>
          <div className="logo-div">
            <Link
              onClick={() => this.setState({ navBar: !this.state.navBar })}
              className="menu-items"
              to="/"
            >
              <img className="logo" src={juniorslogo} alt="none" />
            </Link>
          </div>
        </div>
        <div className="menu">
          <div className="menu-items">
            <Link
              onClick={() => this.setState({ navBar: !this.state.navBar })}
              className="menu-items"
              to="/"
            >
              Home
            </Link>
          </div>
          {/* <div className="menu-items">
            <Link
              onClick={() => this.setState({ navBar: !this.state.navBar })}
              className="menu-items"
              to="/About"
            >
              About
            </Link>
          </div> */}
          <div className="menu-items">
            <Link
              onClick={() => this.setState({ navBar: !this.state.navBar })}
              className="menu-items"
              to="/Barbers"
            >
              Barbers
            </Link>
          </div>
          <div className="menu-items">
            <Link
              onClick={() => this.setState({ navBar: !this.state.navBar })}
              className="menu-items"
              to="/Services"
            >
              Services
            </Link>
          </div>
          <div className="menu-items">
            <Link
              onClick={() => this.setState({ navBar: !this.state.navBar })}
              className="menu-items"
              to="/Contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
