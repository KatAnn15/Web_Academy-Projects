import React from "react";
import { isMobile } from "react-device-detect";
import TrackVisibility from "react-on-screen";

const ComponentToTrack = ({ isVisible, info }) => {
  const style = {
    transition: "1s",
    opacity: isVisible ? 1 : 0.5,
    transform: isVisible ? "translate(0, 0)" : "translate(0, 0)",
  };
  return (
    <div style={style} className="page__content">
      <h1>{info}</h1>
    </div>
  );
};

export default class HeaderStrip extends React.Component {
  render() {
    return (
      <div className="common-wrapper">
        {isMobile ? (
          <TrackVisibility>
            <ComponentToTrack info={this.props.info} />
          </TrackVisibility>
        ) : (
          <div className="page__content">
            <h1>{this.props.info}</h1>
          </div>
        )}
      </div>
    );
  }
}
