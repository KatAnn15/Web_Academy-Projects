import React from "react";

export default class EmailLoginForm extends React.Component {
  render() {
    return (
      <form className="email-log-in__form">
        <input
          className="email-log-in__input input_email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <button type="submit" className="email-log-in__submit-btn">
          Submit
        </button>
      </form>
    );
  }
}
