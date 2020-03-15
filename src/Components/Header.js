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
          <div className="menu-items">
            <Link
              onClick={() => this.setState({ navBar: !this.state.navBar })}
              className="menu-items"
              to="/Location"
            >
              Location
            </Link>
          </div>
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
          {/* <div>
      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"
          >&times;</a
        >
        <a href="#landing-2">Work</a>
        <a>About</a>
        <a>Team</a>
        <a>Contact</a>
      </div>
      <script>
        function myFunction(x) {
          x.classList.toggle("change");
        }
      </script>
      <span onclick="openNav()">
        <div class="burger" onclick="myFunction(this)">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </span>
      <script>
        function openNav() {
          document.getElementById("mySidenav").style.width = "200px";
        }
        function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
        }
      </script>
      <div class="logo-home">
        <img class="header-logo" src="/media/integerlogo.png" />
      </div>
    </div> */}
          {/* <div className="menu-items">
            <Link
              onClick={() => this.setState({ navBar: !this.state.navBar })}
              className="menu-items"
              to="/Contact"
            >
              Contact
            </Link>
          </div> */}
        </div>
      </div>
    );
  }
}
