import React from "react";
import { ChatInput } from "./input";
import ascend from "../../../assets/images/global-imgs/ascend.png";
import Emoji from "./emoji";
import emojiIcon from "../../../assets/images/global-imgs/emoji-icon.png";
import closeEmoji from "../../../assets/images/global-imgs/close-emoji.webp";
import { ChatStory } from "./chat-story";
import { Message } from "./message";
import { Reply } from "./reply";

export class ChatBody extends React.Component {
  constructor() {
    super();
    this.state = {
      ascend: false,
      emojiExpanded: false,
      chatList: [],
    };
    this.newItem = React.createRef();
  }
  fetchData = () => {
    return fetch("http://localhost:4000/messages")
      .then((resp) => resp.json())
      .then((data) => {
        const chatList = [];
        data.forEach((message, i) => {
          const image = message.image.replace(/'[../src]'/g, "..");
          chatList.push(
            <Message
              message={message.message}
              key={i}
              data={
                message.author === "chatbot" ? "reply-data" : "message-data"
              }
              item={
                message.author === "Visitor" ? "message-item" : "reply-item"
              }
              attachment={message.image === " " ? "null" : image}
            />
          );
          console.log(message.image);
        });
        this.setState({ chatList: chatList });
      });
  };
  componentDidMount = () => {
    this.fetchData();
  };
  expandPicker = () => {
    this.state.emojiExpanded
      ? this.setState({ emojiExpanded: false })
      : this.setState({ emojiExpanded: true });
    console.log(this.state.emojiExpanded);
  };
  replyWrapper = (reply) => {
    console.log(reply);
    fetch("http://localhost:4000/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: reply,
        author: "chatbot",
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log("This is the sent auto-reply: ", data);
      });
  };
  updateList = (data) => {
    this.setState({
      chatList: [
        ...this.state.chatList,
        <Message
          message={data.message}
          key={this.state.chatList.length + 1}
          ref={this.newItem}
          data={"message-data"}
          item={"message-item"}
        />,
      ],
    });
    {
      this.props.reduceInfo();
    }
    let reply;
    const wordTriggers = ["wix", "foxfit", "plans", "interested", "bye"];
    const replies = [
      "Wix is a platform for creating websites. Click on the banner on top of the page to get started",
      "FoxFit is my project for motivating prople to stay active and improving their healt. Contact me if you are insterested!",
      "I see you would like to start out small journey. Please, check the Pricing Plans information by moving to the relevant page",
      "Glad we share some common interests! Please, let me know what you think and my team will get back to you soon",
      "Hope you are having a great day!",
    ];
    if (data.message.includes("hello")) {
      reply =
        "Hi!  My name is Emily Fox and I am happy to have you here. Please, leave a message and I will contact you soon";
      this.setState({
        chatList: [...this.state.chatList, <Reply reply={reply} />],
      });
      this.replyWrapper(reply);
      console.log(reply);
    } else {
      wordTriggers.forEach((trigger, i) => {
        if (data.message.includes(trigger)) {
          reply = replies[i];
          this.setState({
            chatList: [...this.state.chatList, <Reply reply={reply} />],
          });
          this.replyWrapper(reply);
          console.log(reply);
        }
      });
    }
  };
  render() {
    return (
      <div className="chat-body" style={this.props.bodyStyle}>
        <ChatStory chatList={this.state.chatList} />
        {this.state.emojiExpanded ? <Emoji /> : null}
        {this.state.ascend ? null : (
          <div className="free-ascend-banner">
            Powered by
            <img
              src={ascend}
              alt="ascend by wix logo"
              width="90px"
              height="23px"
            />
          </div>
        )}
        <ChatInput
          image={this.state.emojiExpanded ? closeEmoji : emojiIcon}
          expandPicker={this.expandPicker}
          onSuccessCallback={this.updateList}
        />
      </div>
    );
  }
}
