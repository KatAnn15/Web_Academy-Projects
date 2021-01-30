import React from "react";
import Footer from "../global/footer";
import AboveTheFold from "./home_atf";
import HomeMainStrip from "../global/home_strip.js";
import Featured from "./featured";
import ContactHome from "./joinUs";
import GetInTouch from "../global/getInTouch";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      meetEmilyStripData: {},
      foxfitStripData: {},
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.getJsonData();
  }
  getJsonData() {
    let fetchedData = require("../../assets/json/data.json");
    let stripData = fetchedData.homeStrips;
    this.setState({ meetEmilyStripData: stripData[0] });
    this.setState({ foxfitStripData: stripData[1] });
  }
  render() {
    const {
      stripName,
      title,
      subtitle,
      description,
      linkPage,
      button,
    } = this.state.meetEmilyStripData;
    return (
      <div className="page__container">
        <AboveTheFold />
        <HomeMainStrip
          stripName={stripName}
          title={title}
          subtitle={subtitle}
          description={description}
          linkPage={linkPage}
          button={button}
        />
        <HomeMainStrip
          stripName={this.state.foxfitStripData.stripName}
          title={this.state.foxfitStripData.title}
          subtitle={this.state.foxfitStripData.subtitle}
          description={this.state.foxfitStripData.description}
          linkPage={this.state.foxfitStripData.linkPage}
          button={this.state.foxfitStripData.button}
        />

        <div className="book-online-widget">
          <h2 className="book-online-widget widget__title">
            Book an Online Class
          </h2>
        </div>
        <Featured />
        <ContactHome />
        <GetInTouch id="contact-anchor" />
        <Footer />
      </div>
    );
  }
}
