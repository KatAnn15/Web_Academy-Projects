import React from "react";
import logo from "../../assets/images/global-imgs/wix-logo.png";

export default class Banner extends React.Component {
  constructor() {
    super();
    this.state = {
      freeWebsite: true,
      screen: "mobile",
    };
  }
  openWix = (e) => {
    e.preventDefault();
    window.open(
      "https://www.wix.com/lpviral/enviral?adsVersion=white&orig_msid=624d25d8-c1b2-42db-826a-741de54a41af",
      "_blank"
    );
  };
  componentDidMount = () => {
    this.resizeScreen();
  };
  componentWillUnmount = () => {
    this.resizeScreen();
  };
  resizeScreen = () => {
    if (window.screen.width < 575) {
      this.setState({ screen: "mobile" });
    } else if (window.screen.width < 768) {
      this.setState({ screen: "tablet" });
    } else if (window.screen.width < 920) {
      this.setState({ screen: "laptop" });
    } else {
      this.setState({ screen: "large" });
    }
    console.log(window.screen.width);
  };
  render() {
    return this.state.freeWebsite && this.state.screen === "large" ? (
      <div className="free-website__banner" onClick={this.openWix}>
        <h5 className="banner__info">
          This site was designed with the
          <span>
            <img src={logo} width="38px" height="15px" alt="company-logo" />
          </span>
          .com website builder. Create your website today.
        </h5>
        <button className="upgrade-site__btn" onClick={this.openWix}>
          Start Now
        </button>
      </div>
    ) : this.state.freeWebsite && this.state.screen === "mobile" ? (
      <div className="free-website__banner" onClick={this.openWix}>
        <h5 className="banner__info">
          Join us on the
          <span>
            <img
              src={logo}
              width="45px"
              height={
                this.state.screen === "mobile"
                  ? "15px"
                  : this.state.screen === "tablet"
                  ? "18px"
                  : this.state.screen === "laptop"
                  ? "25px"
                  : null
              }
              alt="company-logo"
            />
          </span>
          app
        </h5>
        <button className="upgrade-site__btn" onClick={this.openWix}></button>
      </div>
    ) : null;
  }
}
