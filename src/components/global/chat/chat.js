import React from "react";
import { isMobile } from "react-device-detect";
import { ChatBody } from "./chat-body";
import memberIcon from "../../../assets/images/global-imgs/member-icon.png";
export class ChatWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      isExpanded: false,
      device: "desktop",
      reducedInfo: false,
    };
  }
  expand = () => {
    isMobile
      ? this.setState({ device: "mobile" })
      : this.setState({ isExpanded: true });
    this.setState({ isExpanded: true });
  };
  collapse = () => {
    this.setState({ isExpanded: false });
  };
  reduceInfo = () => {
    this.setState({ reducedInfo: true });
    console.log("Reduced!");
  };
  render() {
    return (
      <div className="chat-common-wrapper">
        <div className="chat-widget">
          {this.state.isExpanded ? (
            <div className={`chat-${this.state.device}_expanded`}>
              <button className="chat-_collapse" onClick={this.collapse}>
                &times;
              </button>
              <div className="chat_expanded__wrapper">
                <div
                  className="chat_expanded__info"
                  style={
                    this.state.reducedInfo
                      ? { height: "65px", padding: "10px", display: "flex" }
                      : { height: "auto" }
                  }
                >
                  <img
                    src={memberIcon}
                    alt=""
                    className="chat_expanded__incon"
                    style={
                      this.state.reducedInfo
                        ? {
                            width: "45px",
                            height: "45px",
                          }
                        : { width: "60px", height: "60px" }
                    }
                  />
                  <div
                    className="chat-info__wrapper"
                    style={
                      this.state.reducedInfo
                        ? { textAlign: "left", paddingLeft: "15px" }
                        : { lineHeight: "40px" }
                    }
                  >
                    <h3
                      className="chat_expanded__title"
                      style={
                        this.state.reducedInfo
                          ? { fontSize: "14px", lineHeight: "18px" }
                          : { fontSize: "auto" }
                      }
                    >
                      Let's Chat!
                    </h3>
                    <h4
                      className="chat_expanded__subtitle"
                      style={
                        this.state.reducedInfo
                          ? { display: "none" }
                          : { display: "auto" }
                      }
                    >
                      Ask us any question
                    </h4>
                    <h5
                      className="chat_expanded__details"
                      style={
                        this.state.reducedInfo
                          ? { lineHeight: "20px", fontSize: "11px" }
                          : { lineHeight: "40px" }
                      }
                    >
                      <span>&#9838;</span>
                      We'll reply as soon as we can
                    </h5>
                  </div>
                </div>
                <ChatBody
                  reduceInfo={this.reduceInfo}
                  bodyStyle={
                    this.state.reducedInfo
                      ? { height: "400px" }
                      : { height: "270px" }
                  }
                />
              </div>
            </div>
          ) : isMobile ? (
            <div className="chat-mobile_regular" onClick={this.expand}>
              <div className="chat-mobile_regular__wrapper">
                <span>...</span>
              </div>
            </div>
          ) : (
            <div className="chat-desktop_regular" onClick={this.expand}>
              <div className="chat-desktop_regular__wrapper">
                <span>...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
