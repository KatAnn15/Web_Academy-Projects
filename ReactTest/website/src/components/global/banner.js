import React from "react";
import logo from "../../assets/images/global-imgs/wix-logo.png";

export default class Banner extends React.Component {
  constructor() {
    super();
    this.state = {
      freeWebsite: true,
    };
  }
  openWix = (e) => {
    e.preventDefault();
    window.open(
      "https://www.wix.com/lpviral/enviral?adsVersion=white&orig_msid=624d25d8-c1b2-42db-826a-741de54a41af",
      "_blank"
    );
  };
  render() {
    return this.state.freeWebsite ? (
      <div className="free-website__banner" onClick={this.openWix}>
        <h5 className="banner__info">
          This site was designed with the{" "}
          <span>
            <img src={logo} width="38px" height="15px" alt="company-logo" />
          </span>
          .com website builder. Create your website today.
        </h5>
        <button className="upgrade-site__btn" onClick={this.openWix}>
          Start Now
        </button>
      </div>
    ) : null;
  }
}
