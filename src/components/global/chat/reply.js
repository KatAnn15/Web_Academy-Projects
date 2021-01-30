import React from "react";

export class Reply extends React.Component {
  render() {
    return (
      <div className="reply-data">
        <h5 className="reply-item">{this.props.reply}</h5>
      </div>
    );
  }
}
