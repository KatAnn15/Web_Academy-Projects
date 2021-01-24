import React from "react";

export default class GetInTouch extends React.Component {
  constructor() {
    super();
    this.state = {
      class: "get-in-touch__input input_email",
      disabled: false,
      errorMessage: "error-message-inactive",
      thankYouMessage: "thank-you-message-inactive",
    };
    this.button = React.createRef();
    this.form = React.createRef();
  }

  postData = (e) => {
    const formData = new FormData(this.form.current);
    e.preventDefault();
    return fetch("http://localhost:4000/posts", {
      method: "POST",
      body: formData,
    })
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((data) => {
        console.log("This is data from my submition: ", data);
        this.setState({ thankYouMessage: "thank-you-message-active" });
        setTimeout(
          () =>
            this.setState({ thankYouMessage: "thank-you-message-inactive" }),
          3000
        );
      })
      .catch((err) => {
        console.log("Could not submit the form because: ", err);
      });
  };
  onChange = (e) => {
    if (
      e.target.value.length < 6 ||
      !e.target.value.split("").includes("@") ||
      !e.target.value.split("").includes(".")
    ) {
      this.setState({ class: "invalid" });
      this.setState({ disabled: true });
      this.setState({ errorMessage: "error-message-active" });
    } else {
      this.setState({ class: "get-in-touch__input input_email" });
      this.setState({ errorMessage: "error-message-inactive" });
    }
  };

  render() {
    return (
      <div id={this.props.id} className="get-in-touch__strip">
        <div className="get-in-touch__strip__text-wrapper">
          <div className="info-wrapper">
            <h2 className="get-in-touch__title">Get in Touch</h2>
            <p className="get-in-touch__description">
              I'm a paragraph. Click here to add your own text and edit me.
            </p>
            <p className="get-in-touch__address">
              Address. 500 Terry Francois Street <br />
              San Francisco, CA 94158
            </p>
            <div className="get-in-touch__strip__info-wrapper">
              <p className="get-in-touch__email">Email. info@mysite.com</p>
              <p className="get-in-touch__phone">Phone. 123-456-7890</p>
            </div>
          </div>
        </div>
        <div className="get-in-touch__strip__form-wrapper">
          <form
            ref={this.form}
            action=""
            className="get-in-touch-form"
            onSubmit={(e) => this.postData(e)}
          >
            <input
              type="text"
              className="get-in-touch__input input_first-name"
              name="firstName"
              placeholder="First Name"
            />
            <input
              type="text"
              className="get-in-touch__input input_last-name"
              name="lastName"
              placeholder="Last Name"
            />
            <input
              type="email"
              className={this.state.class}
              name="email"
              placeholder="Email"
              required
              pattern="[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*"
              onChange={this.onChange}
            />
            <input
              type="text"
              className="get-in-touch__input input_subject"
              name="subject"
              placeholder="Subject"
            />
            <h4 className={this.state.errorMessage}>
              Please, check the format of your email
            </h4>
            <textarea
              className="get-in-touch__input input_message"
              name="message"
              placeholder="Type your message here..."
            ></textarea>{" "}
            <br />
            <button
              className="get-in-touch__submit-btn"
              ref={this.button}
              disabled={this.state.disabled}
              type="submit"
            >
              Submit
            </button>
            <h2 className={this.state.thankYouMessage}>
              Thanks for submitting!
            </h2>
          </form>
        </div>
      </div>
    );
  }
}
