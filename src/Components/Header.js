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
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  headerMain = React.createRef();
  handleButtonClick = () => {
    this.setState(state => {
      return {
        navBar: !state.navBar,
      };
    });

  };

  handleClickOutside = event => {
    if (this.headerMain.current && !this.headerMain.current.contains(event.target)) {
      this.setState({
        navBar: false,
      });
    }
  };


  render() {
    return (
      <div className="headerMain" ref={this.headerMain}>
        <div className="header">
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
          <div>
            <div className="myTopnav">
              <div>
                <div
                  onClick={() => this.setState({ navBar: !this.state.navBar })}
                  className="burger"
                >
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                </div>
              </div>
              <div
                className={
                  this.state.navBar ? "navbar-toggle " : "navbar-toggle hidden"
                }
                id="topnav"
              >
                <ul className="tabs">
                  <div>
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
                          to="/Location"
                        >
                          Location
                    </Link>
                      </div>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
