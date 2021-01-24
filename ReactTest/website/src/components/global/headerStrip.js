import React from "react";

export default class HeaderStrip extends React.Component {
  render() {
    return (
      <div className="page__content">
        <h1>{this.props.info}</h1>
      </div>
    );
  }
}
