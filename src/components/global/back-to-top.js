import React from "react";

export class BackToTop extends React.Component {
  backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  render() {
    return (
      <button className="back-to-top-btn" onClick={this.backToTop}>
        &#10148;
      </button>
    );
  }
}
