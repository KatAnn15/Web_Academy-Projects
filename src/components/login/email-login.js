import React from "react";
import { v4 as uuidv4 } from "uuid";
import { isMobile } from "react-device-detect";

export default class EmailLoginForm extends React.Component {
  constructor() {
    super();
    this.form = React.createRef();
    this.email = React.createRef();
    this.state = {
      notYetMember: false,
    };
    this.url = isMobile
      ? "http://192.168.1.7:4000/contacts"
      : "http://localhost:4000/contacts";
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    let email = this.email.current.value;
    fetch(this.url)
      .then((resp) => resp.json())
      .then((data) => {
        let contacts = data;
        console.log(contacts);
        let emails = [];
        contacts.forEach((contact) => {
          emails.push(contact.email);
        });
        if (emails.indexOf(email) > -1) {
          console.log("Welcome, ", contacts[emails.indexOf(email)].name);
          this.props.sendData([email]);
          this.closeLogin();
        } else {
          this.setState({ notYetMember: true });
        }
      });
  };
  closeLogin = () => {
    return this.props.closeLogin;
  };
  render() {
    return (
      <form
        className="email-log-in__form"
        ref={this.form}
        onSubmit={(e) => this.onFormSubmit(e)}
      >
        {" "}
        <h3 className="system-message">
          {this.state.notYetMember
            ? "Seems like you are not a member yet. Please, sign up"
            : "Please, enter valid email and name"}
        </h3>
        <input
          ref={this.email}
          className="email-log-in__input input_email"
          type="email"
          placeholder="Email"
        />
        <button type="submit" className="email-log-in__submit-btn">
          Submit
        </button>
      </form>
    );
  }
}
