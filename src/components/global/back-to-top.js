import React from "react";

export class BackToTop extends React.Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }
  backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  };
  render() {
    return (
      <button
        className="back-to-top-btn"
        onClick={this.backToTop}
        style={
          this.state.scrolled
            ? { opacity: 1, transition: "all .8s" }
            : { opacity: 0, transition: "all .8s" }
        }
      >
        &#10148;
      </button>
    );
  }
}
