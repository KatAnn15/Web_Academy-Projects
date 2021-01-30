import React from "react";

export class Message extends React.Component {
  render() {
    return (
      <div className={this.props.data}>
        <h5 className={this.props.item}>{this.props.message}</h5>
        {this.props.attachment !== "null" ? (
          <img
            className="attachment"
            src={`${this.props.attachment}`}
            alt="message attachment"
          />
        ) : null}
      </div>
    );
  }
}
