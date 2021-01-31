import React from "react";
import { v4 as uuidv4 } from "uuid";
import { isMobile } from "react-device-detect";

export default class EmailSignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      alreadyMember: false,
    };
    this.form = React.createRef();
    this.email = React.createRef();
    this.name = React.createRef();
    this.url = isMobile
      ? "http://192.168.1.7:4000/contacts"
      : "http://localhost:4000/contacts";
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    const email = this.email.current.value;
    const name = this.name.current.value;
    const uuid = uuidv4();

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
          this.setState({ alreadyMember: true });
        } else {
          this.newMember(email, name, uuid);
          this.setState({ alreadyMember: false });
        }
      });
  };
  newMember = (email, name, uuid) => {
    fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        name: name,
        id: uuid,
      }),
    })
      .then((resp) => {
        console.log(resp.json());
      })
      .then((data) => {
        console.log("Created: ", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <form
        ref={this.form}
        className="email-sign-up__form"
        onSubmit={(e) => this.onFormSubmit(e)}
      >
        <h3 className="system-message">
          {this.state.alreadyMember
            ? "Seems like you are already a member. Please, log in"
            : "Please, enter valid email and name"}
        </h3>
        <input
          ref={this.email}
          className="email-sign-up__input input_email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          ref={this.name}
          className="email-sign-up__input input_name"
          type="text"
          name="name"
          placeholder="Name"
        />
        <button type="submit" className="email-sign-up__submit-btn">
          Submit
        </button>
      </form>
    );
  }
}
