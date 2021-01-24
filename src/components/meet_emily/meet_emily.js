import React from "react";
import Footer from "../global/footer";
import GetInTouch from "../global/getInTouch";
import HomeMainStrip from "../global/home_strip";
import HeaderStrip from "../global/headerStrip";

export default class MeetEmily extends React.Component {
  constructor() {
    super();
    this.state = {
      mainStripData: {},
      visionBoxData: {},
    };
  }
  fetchData = () => {
    const fetchedData = require("../../assets/json/data.json");
    const mainStripData = fetchedData.strips[0];
    const visionBoxData = fetchedData.strips[1];
    this.setState({ mainStripData: mainStripData });
    this.setState({ visionBoxData: visionBoxData });
  };
  componentDidMount = () => {
    this.fetchData();
  };
  render() {
    return (
      <div className="page__container">
        <HeaderStrip info="Meet Emily" />
        <div className="meet-emily__above-the-fold">
          <HomeMainStrip
            stripName={this.state.mainStripData.stripName}
            title={this.state.mainStripData.title}
            description={this.state.mainStripData.description}
            linkPage={this.state.mainStripData.linkPage}
            button={this.state.mainStripData.button}
          />
          <HomeMainStrip
            stripName={this.state.visionBoxData.stripName}
            title={this.state.visionBoxData.title}
            description={this.state.visionBoxData.description}
          />
        </div>
        <div className="meet-emily_video-content"></div>
        <div className="strip-video-wrapper">
          <video
            src="https://video.wixstatic.com/video/c22c23_685a75e0a78340c68cc24415d6d34ba6/1080p/mp4/file.mp4"
            width="100%"
            autoPlay={true}
            loop={true}
          ></video>
        </div>
        <GetInTouch />
        <Footer />
      </div>
    );
  }
}
