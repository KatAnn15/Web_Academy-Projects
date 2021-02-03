import React from "react";
import facebook from "../../assets/images/home-imgs/social-bar/facebook_icon.webp";
import instagram from "../../assets/images/home-imgs/social-bar/ig_icon.webp";
import twitter from "../../assets/images/home-imgs/social-bar/twitter_icon.webp";
import youtube from "../../assets/images/home-imgs/social-bar/youtube_icon.webp";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Main from "../global/main";

export default class AboveTheFold extends React.Component {
  constructor() {
    super();
    this.state = {
      socialData: [],
      opacity: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ opacity: true });
    }, 300);
    this.fetchData();
  }
  fetchData() {
    let fetchPath = require("../../assets/json/data.json");
    return this.setState({ socialData: fetchPath.socialMedia });
  }
  render() {
    const socialBar = [];
    const icons = [facebook, twitter, youtube, instagram];

    this.state.socialData.forEach((link, i) => {
      socialBar.push(
        <a href={link.link} key={`icon-${i}`}>
          <img src={icons[i]} alt={link.alt} />
        </a>
      );
    });
    return (
      <div
        className="common-wrapper"
        style={
          isMobile
            ? {
                opacity: this.state.opacity ? 1 : 0,
                transition: "all 1.5s",
              }
            : { opacity: 1 }
        }
      >
        {isMobile ? (
          <Main
            data={
              <div className="common-wrapper">
                <div
                  className="above-the-fold__info"
                  style={
                    isMobile
                      ? {
                          opacity: this.state.opacity ? 1 : 0,
                          transform: this.state.opacity
                            ? "none"
                            : "translateY(50px)",
                          transition: "all .8s",
                        }
                      : { opacity: 1 }
                  }
                >
                  <h1 className="above-the-fold__title">Emily Fox</h1>
                  <h2 className="above-the-fold__subtitle">
                    Discover Your Power Through Online Coaching
                  </h2>
                  <div className="social-bar">{socialBar}</div>
                </div>
                <div className="above-the-fold__image-wrapper">
                  <div className="action-bar">
                    <Link to="/foxfit">
                      <button className="call-to-action discover-foxfit">
                        Discover FoxFit
                      </button>
                    </Link>
                    <Link to="/plans-pricing">
                      <button className="call-to-action book-a-class">
                        Book a Class
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            }
          ></Main>
        ) : (
          <div className="home-page__above-the-fold-strip">
            <div className="above-the-fold__wrapper">
              <div className="above-the-fold__info">
                <h1 className="above-the-fold__title">Emily Fox</h1>
                <h2 className="above-the-fold__subtitle">
                  Discover Your Power Through Online Coaching
                </h2>
                <div className="social-bar">{socialBar}</div>
              </div>
            </div>
            <div className="action-bar">
              <Link to="/foxfit">
                <button className="call-to-action discover-foxfit">
                  Discover FoxFit
                </button>
              </Link>
              <Link to="/plans-pricing">
                <button className="call-to-action book-a-class">
                  Book a Class
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}
