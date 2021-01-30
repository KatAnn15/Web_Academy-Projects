import React from "react";

export class ChatStory extends React.Component {
  constructor() {
    super();
    this.state = {
      chatList: [],
    };
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.chatList !== this.props.chatList) {
      this.setState({ chatList: this.props.chatList });
    }
  };
  render() {
    return <div className="chat-list">{this.state.chatList}</div>;
  }
}
