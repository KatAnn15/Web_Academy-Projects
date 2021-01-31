import React from "react";
import { ChatInput } from "./input";
import ascend from "../../../assets/images/global-imgs/ascend.png";
import Emoji from "./emoji";
import emojiIcon from "../../../assets/images/global-imgs/emoji-icon.png";
import closeEmoji from "../../../assets/images/global-imgs/close-emoji.webp";
import { ChatStory } from "./chat-story";
import { Message } from "./message";
import { Reply } from "./reply";
import { isMobile } from "react-device-detect";

export class ChatBody extends React.Component {
  constructor() {
    super();
    this.state = {
      ascend: false,
      emojiExpanded: false,
      chatList: [],
      emoji: "",
    };
    this.newItem = React.createRef();
    this.list = React.createRef();
    this.url = isMobile
      ? "http://192.168.1.7:4000/messages"
      : "http://localhost:4000/messages";
  }
  fetchData = () => {
    return fetch(this.url)
      .then((resp) => resp.json())
      .then((data) => {
        const chatList = [];
        data.forEach((message, i) => {
          if (message.author !== "system") {
            console.log(message.author);
            console.log(message);
            const date = message.createdAt - data[--i].createdAt;
            if (date > 86400000 || message.id === 2) {
              chatList.push(
                <Message
                  message={`Posted on ${message.date}`}
                  key={`system-message ${i}`}
                  data={"system-data"}
                  item={"system-item"}
                  attachment={message.image}
                />
              );
            }
          }
          chatList.push(
            <Message
              message={message.message}
              key={message.createdAt}
              data={
                message.author === "chatbot"
                  ? "reply-data"
                  : message.author === "system"
                  ? "system-data"
                  : "message-data"
              }
              item={
                message.author === "Visitor"
                  ? "message-item"
                  : message.author === "system"
                  ? "system-item"
                  : "reply-item"
              }
              attachment={message.image}
            />
          );
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
  };
  replyWrapper = (reply) => {
    console.log(reply);
    fetch(this.url, {
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
          attachment={data.image ? data.image : undefined}
        />,
      ],
    });
    {
      this.props.reduceInfo();
    }
    let reply;
    const wordTriggers = [
      "wix",
      "foxfit",
      "plans",
      "interested",
      "bye",
      "thanks",
    ];
    const replies = [
      "Wix is a platform for creating websites. Click on the banner on top of the page to get started",
      "FoxFit is my project for motivating prople to stay active and improving their healt. Contact me if you are insterested!",
      "I see you would like to start out small journey. Please, check the Pricing Plans information by moving to the relevant page",
      "Glad we share some common interests! Please, let me know what you think and my team will get back to you soon",
      "Hope you have a great day!",
      "My pleasure to help :)",
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
  addEmoji = (emoji) => {
    this.setState({ emoji: emoji.emoji });
    console.log(emoji.emoji);
  };
  render() {
    return (
      <div className="chat-body" style={this.props.bodyStyle}>
        <ChatStory chatList={this.state.chatList} list={this.list} />
        {this.state.emojiExpanded ? <Emoji addEmoji={this.addEmoji} /> : null}
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
          emoji={this.state.emoji}
        />
      </div>
    );
  }
}
