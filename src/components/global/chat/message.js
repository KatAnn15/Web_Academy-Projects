import React from "react";

export class Message extends React.Component {
  componentDidMount = () => {
    // console.log(this.props.attachment);
  };
  render() {
    return (
      <div className={this.props.data}>
        <h5 className={this.props.item}>{this.props.message}</h5>
        {this.props.attachment ? (
          <img
            className="attachment"
            src={this.props.attachment}
            alt="message attachment"
          />
        ) : null}
      </div>
    );
  }
}
