import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import login from "../../assets/images/global-imgs/login.png";
import { isMobile } from "react-device-detect";
import { Login } from "../login/login";

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      menuClass: "navbar__inactive",
      buttonClass: "button__inactive",
      openLogin: false,
    };
  }
  openMenu = () => {
    if (isMobile) {
      this.state.menuClass === "navbar__active"
        ? this.setState({ menuClass: "navbar__inactive" })
        : this.setState({ menuClass: "navbar__active" });

      this.state.buttonClass === "button__inactive"
        ? this.setState({ buttonClass: "button__active" })
        : this.setState({ buttonClass: "button__inactive" });
    }
  };
  openLogin = () => {
    this.setState({ openLogin: true });
  };
  closeLogin = () => {
    this.setState({ openLogin: false });
  };
  render() {
    return (
      <div className="common-wrapper">
        {isMobile ? (
          <button className={this.state.buttonClass} onClick={this.openMenu}>
            <span></span>
          </button>
        ) : null}
        <div className={`app__navbar ${this.state.menuClass}`}>
          <div className="navbar__list">
            {isMobile ? (
              <button
                className="navbar__link link_login"
                onClick={this.openLogin}
              >
                <img
                  className="login-icon"
                  src={login}
                  width="27px"
                  alt="member-icon"
                />
                Log In
              </button>
            ) : null}
            <NavHashLink
              className="navbar__link link_home"
              activeStyle={{ color: "#89aeb3" }}
              to={"/home"}
              onClick={this.openMenu}
            >
              Home
            </NavHashLink>
            <NavHashLink
              className="navbar__link link_meet-emily"
              activeStyle={{ color: "#89aeb3" }}
              to={"/meet-emily"}
              onClick={this.openMenu}
            >
              Meet Emily
            </NavHashLink>
            <NavHashLink
              className="navbar__link link_fox-fit"
              activeStyle={{ color: "#89aeb3" }}
              to={"/foxfit"}
              onClick={this.openMenu}
            >
              FoxFit
            </NavHashLink>
            <NavHashLink
              className="navbar__link link_plans-pricing"
              activeStyle={{ color: "#89aeb3" }}
              to={"/plans-pricing"}
              onClick={this.openMenu}
            >
              Plans & Pricing
            </NavHashLink>
            <NavHashLink
              className="navbar__link link_contact"
              activeStyle={{ color: "#89aeb3" }}
              to={"/home#contact-anchor"}
              onClick={this.openMenu}
            >
              Contact
            </NavHashLink>
            {this.state.openLogin ? (
              <Login closeLogin={this.closeLogin} />
            ) : null}
            {isMobile ? null : (
              <button
                className="navbar__link link_login"
                onClick={this.openLogin}
              >
                <img
                  className="login-icon"
                  src={login}
                  width="27px"
                  alt="member-icon"
                />
                Log In
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
