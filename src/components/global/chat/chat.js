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
      closeClicked: false,
    };
    this.url = isMobile ? "http://192.168.1.7:4000" : "http://localhost:4000";
  }
  expand = () => {
    isMobile
      ? this.setState({ device: "mobile" })
      : this.setState({ isExpanded: true });
    this.setState({ isExpanded: true });
  };
  closeClicked = () => {
    this.state.closeClicked
      ? this.setState({ closeClicked: false })
      : this.setState({ closeClicked: true });
  };
  collapse = () => {
    this.setState({ isExpanded: false });
    this.setState({ closeClicked: false });
  };
  deleteHistory = () => {
    fetch(`${this.url}/messages`)
      .then((resp) => resp.json())
      .then((data) => {
        data.forEach((item) => {
          if (item.id > 1) {
            fetch(`${this.url}/messages/${item.id}`, {
              method: "DELETE",
            }).then(() => {
              console.log("Chat history has been deleted");
              this.collapse();
            });
          }
        });
      });
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
              <button className="chat_collapse" onClick={this.closeClicked}>
                &times;
              </button>
              {this.state.closeClicked ? (
                <div className="close-action-bar">
                  <button
                    className="chat__clear-history"
                    onClick={this.deleteHistory}
                  >
                    Delete History
                  </button>
                  <button className="chat__close-chat" onClick={this.collapse}>
                    Close chat
                  </button>
                </div>
              ) : null}
              <div className="chat_expanded__wrapper">
                <div
                  className="chat_expanded__info"
                  style={
                    this.state.reducedInfo
                      ? { height: "65px", padding: "10px", display: "flex" }
                      : {}
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
                          ? {
                              fontSize: "14px",
                              lineHeight: "18px",
                              paddingLeft: "25px",
                            }
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
                    isMobile
                      ? {}
                      : this.state.reducedInfo
                      ? { height: "490px" }
                      : { height: "290px" }
                  }
                />
              </div>
            </div>
          ) : isMobile ? (
            <div className="chat-mobile_regular" onClick={this.expand}>
              <div className="chat-mobile_regular__wrapper">
                <span></span>
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
