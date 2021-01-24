import React from "react";

export default class EmailSignUpForm extends React.Component {
  onFormSubmit = () => {};
  render() {
    return (
      <form className="email-sign-up__form" onSubmit={this.onFormSubmit}>
        <input
          className="email-sign-up__input input_email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
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
