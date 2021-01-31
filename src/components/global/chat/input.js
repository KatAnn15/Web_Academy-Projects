import React from "react";
import attachment from "../../../assets//images/global-imgs/attachment.png";
import attachmentActive from "../../../assets//images/global-imgs/attachment-active.png";
import { isMobile } from "react-device-detect";

export class ChatInput extends React.Component {
  constructor() {
    super();
    this.state = {
      imageSelected: false,
    };
    this.form = React.createRef();
    this.input = React.createRef();
    this.image = React.createRef();
    this.file = React.createRef();
    this.url = isMobile
      ? "http://192.168.1.7:4000/messages"
      : "http://localhost:4000/messages";
  }

  submitForm = (e) => {
    const formData = new FormData(this.form.current);
    const newData = formData.set("author", "Visitor");
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date().toLocaleTimeString("en-US", options);
    const d = new Date();
    const newDate = formData.set("date", date);
    e.preventDefault();
    return fetch(this.url, {
      method: "POST",
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.props.onSuccessCallback(data);
        console.log("message sent!", data);
        e.target.reset();
        this.setState({ imageSelected: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  onFileSelected = () => {
    this.setState({ imageSelected: true });
  };

  componentDidUpdate = () => {
    console.log("got an emoji!");
    return this.props.emoji
      ? (this.input.current.value = this.input.current.value + this.props.emoji)
      : null;
  };

  render() {
    return (
      <form
        ref={this.form}
        action=""
        className="chat-form"
        onSubmit={(e) => this.submitForm(e)}
      >
        {isMobile ? null : (
          <div className="emoji-wrapper">
            <img
              src={this.props.image}
              width="30px"
              height="30px"
              alt="emoji-picker-img"
              className="emoji-picker-img"
              onClick={this.props.expandPicker}
            />
          </div>
        )}

        <input
          ref={this.input}
          type="text"
          name="message"
          placeholder="Type your message..."
        />

        <button className="upload-file-btn">
          <input
            type="file"
            name="image"
            onChange={this.onFileSelected}
            ref={this.file}
          />
          <img
            src={this.state.imageSelected ? attachmentActive : attachment}
            alt="attachment-cover"
            ref={this.image}
          />
        </button>
      </form>
    );
  }
}
