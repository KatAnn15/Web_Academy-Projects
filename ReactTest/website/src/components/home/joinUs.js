import React from "react";
import googlePlay from "../../assets/images/home-imgs/main/social-store/google-play.png";
import appStore from "../../assets/images/home-imgs/main/social-store/app-store.png";

export default class ContactHome extends React.Component {
  constructor() {
    super();
    this.state = {
      prefix: "inactive",
      phoneNumber: "inactive",
      prefixError: "inactive",
      phones: [],
    };
    this.form = React.createRef();
    this.prefix = React.createRef();
    this.phone = React.createRef();
  }
  onChange = (e, i) => {
    this.setState({ [i]: "active" });
    if (e.target.value.length === 0) {
      this.setState({ [i]: "inactive" });
    }
  };
  submitForm(e) {
    e.preventDefault();
    const formData = new FormData(this.form.current);
    console.log(this.state.phones);

    this.state.phones.forEach((item) => {
      if (
        this.prefix.current.value !== `+${item}` ||
        this.phone.current.value.length < 4
      ) {
        console.log("Prefix is not correct: ", item);
        return this.setState({ prefixError: "active" });
      } else {
        return fetch("http://localhost:4000/posts", {
          method: "POST",
          body: formData,
        })
          .then((resp) => {
            console.log(resp);
            return resp.json();
          })
          .then((data) => {
            console.log(data);
            this.setState({ prefixError: "inactive" });
          })
          .catch((err) => {
            console.log("This is error: ", err);
          });
      }
    });
  }
  componentDidMount() {
    this.fetchPhones();
  }

  fetchPhones() {
    const fetchedPhones = require("../../assets/json/phones.json");

    const phonesArr = [];
    fetchedPhones.phones.forEach((phone) => {
      phonesArr.push(Object.values(phone)[0]);
    });
    return this.setState({ phones: phonesArr });
  }

  render() {
    return (
      <div className="page-strip join-us-strip">
        <div className="join-us-strip__text-wrapper">
          <h2 className="join-us-strip__title">FoxFit on the Go</h2>
          <h3 className="join-us-strip__subtitle">Join us on mobile!</h3>
          <p className="join-us-strip__description">
            The Wix App lets you stay updated on the go. Just add your phone
            number and we’ll text you a link.
          </p>
        </div>
        <form
          className="join-us-strip__contact-us-form"
          action=""
          onSubmit={(e) => this.submitForm(e)}
          ref={this.form}
        >
          <h4 className={`prefix-label label-${this.state.prefix}`}>Prefix</h4>
          <input
            ref={this.prefix}
            type="tel"
            name="prefix"
            className="join-us-form_country-code"
            placeholder="+380"
            onChange={(e) => this.onChange(e, Object.keys(this.state)[0])}
          />
          <h4 className={`prefix-error-${this.state.prefixError}`}>
            Please, enter a valid coutry code
          </h4>
          <h4 className={`number-label label-${this.state.phoneNumber}`}>
            Phone number
          </h4>
          <input
            ref={this.phone}
            type="tel"
            name="phone"
            className="join-us-form_phone-body"
            placeholder="Phone Number"
            onChange={(e) => this.onChange(e, Object.keys(this.state)[1])}
          />
          <button className="join-us-strip_call-to-action-btn" type="submit">
            Send
          </button>
        </form>
        <div className="join-us-strip__action-bar">
          <button
            className="google-play-btn"
            onClick={() =>
              window.open("http://wix.to/csCHCUo?ref=symp_button", "_blank")
            }
          >
            <img
              src={googlePlay}
              className="google-play-icon"
              alt="google-play-icon"
            />
          </button>
          <button
            className="app-store-btn"
            onClick={() =>
              window.open("http://wix.to/csCHCUo?ref=symp_button", "_blank")
            }
          >
            <img
              src={appStore}
              className="app-store-icon"
              alt="app-store-icon"
            />
          </button>
        </div>
      </div>
    );
  }
}
