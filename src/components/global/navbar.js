import React from "react";
import { NavHashLink } from "react-router-hash-link";
import login from "../../assets/images/global-imgs/login.png";
import Login from "../login/login";
import { isMobile } from "react-device-detect";

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      menuClass: "navbar__inactive",
      buttonClass: "button__inactive",
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
    } else {
      console.log("Active");
    }
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
              <NavHashLink
                className="navbar__link link_login"
                to="/login"
                onClick={this.openMenu}
              >
                <img
                  className="login-icon"
                  src={login}
                  width="27px"
                  alt="member-icon"
                />
                Log In
              </NavHashLink>
            ) : null}
            <NavHashLink
              className="navbar__link link_home"
              to={"/home"}
              onClick={this.openMenu}
            >
              Home
            </NavHashLink>
            <NavHashLink
              className="navbar__link link_meet-emily"
              to={"/meet-emily"}
              onClick={this.openMenu}
            >
              Meet Emily
            </NavHashLink>
            <NavHashLink
              className="navbar__link link_fox-fit"
              to={"/foxfit"}
              onClick={this.openMenu}
            >
              FoxFit
            </NavHashLink>
            <NavHashLink
              className="navbar__link link_plans-pricing"
              to={"/plans-pricing"}
              onClick={this.openMenu}
            >
              Plans & Pricing
            </NavHashLink>
            <NavHashLink
              className="navbar__link link_contact"
              to={"/home#contact-anchor"}
              onClick={this.openMenu}
            >
              Contact
            </NavHashLink>
            {isMobile ? null : (
              <NavHashLink className="navbar__link link_login" to="/login">
                <img
                  className="login-icon"
                  src={login}
                  width="27px"
                  alt="member-icon"
                />
                Log In
              </NavHashLink>
            )}
          </div>
        </div>
      </div>
    );
  }
}
