import React from "react";
import attachment from "../../../assets//images/global-imgs/attachment.png";
import attachmentActive from "../../../assets//images/global-imgs/attachment-active.png";

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
  }

  submitForm = (e) => {
    const formData = new FormData(this.form.current);
    const newData = formData.set("author", "Visitor");
    e.preventDefault();
    return fetch("http://localhost:4000/messages", {
      method: "POST",
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        this.props.onSuccessCallback(data);
        console.log("message sent!", data);
        this.input.current.value = " ";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  onFileSelected = (e) => {
    this.setState({ imageSelected: true });
  };

  render() {
    return (
      <form
        ref={this.form}
        action=""
        className="chat-form"
        onSubmit={(e) => this.submitForm(e)}
      >
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
            onChange={(e) => this.onFileSelected(e)}
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
