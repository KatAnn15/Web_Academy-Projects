import React from "react";
import Navbar from "./navbar";
import Promo from "./promo";
import websiteLogo from "../../assets/images/global-imgs/website-logo.png";
import { Link } from "react-router-dom";
export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Promo />
        <Promo />
        <header className="page_header">
          <div className="navigation__wrapper">
            <div className="header__logo">
              <Link to={"/home"}>
                <img src={websiteLogo} className="website-logo-img" alt="" />
              </Link>
              <Link to={"/home"}>
                <h2 className="logo__title">Emily Fox Fitness</h2>
              </Link>
            </div>
            <Navbar />
          </div>
        </header>
      </div>
    );
  }
}
