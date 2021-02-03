import React from "react";
import { isMobile } from "react-device-detect";

export default class HeaderStrip extends React.Component {
  constructor() {
    super();
    this.state = {
      opacity: false,
    };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ opacity: true });
    }, 300);
  };
  render() {
    return (
      <div
        className="page__content"
        style={
          isMobile
            ? {
                opacity: this.state.opacity ? 1 : 0,
                transform: this.state.opacity
                  ? "translateY(0)"
                  : "translateY(50px)",
                transition: "all .5s",
              }
            : { opacity: 1 }
        }
      >
        <h1>{this.props.info}</h1>
      </div>
    );
  }
}
