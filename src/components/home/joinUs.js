import React from "react";
import googlePlay from "../../assets/images/home-imgs/main/social-store/google-play.png";
import appStore from "../../assets/images/home-imgs/main/social-store/app-store.png";
import { browserName, isAndroid, isIOS, isMobile } from "react-device-detect";

export default class ContactHome extends React.Component {
  constructor() {
    super();
    this.buttonStyle = {
      borderRadius: "10px",
      overflow: "hidden",
      border: "none",
      backgroundColor: "black",
      width: "170px",
    };
    this.imageStyle = {
      borderRadius: "10px",
    };
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
  componentDidMount = () => {
    this.resizeScreen();
    this.fetchPhones();
  };
  componentWillUnmount = () => {
    this.resizeScreen();
  };
  resizeScreen = () => {
    if (window.screen.width < 768) {
      this.setState({ screen: "mobile" });
    } else {
      this.setState({ screen: "large" });
      console.log(browserName);
    }
  };
  onChange = (e, i) => {
    this.setState({ [i]: "active" });
    if (e.target.value.length === 0) {
      this.setState({ [i]: "inactive" });
    }
  };
  submitForm(e) {
    e.preventDefault();
    let phoneValid = [];
    this.state.phones.forEach((item) => {
      if (
        this.prefix.current.value === `+${item}` ||
        this.prefix.current.value === item
      ) {
        phoneValid.push(item);
        console.log(phoneValid);
      }
    });
    if (phoneValid.length < 0 || this.phone.current.value.length < 4) {
      console.log("Prefix is not correct: ");
      return this.setState({ prefixError: "active" });
    } else {
      console.log("Data is correct, start fetching");
      return fetch("http://localhost:4000/phones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prefix: this.prefix.current.value,
          phone: this.phone.current.value,
        }),
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
        {isMobile && isIOS ? (
          <div className="join-us-strip__action-bar">
            <button
              style={this.buttonStyle}
              className="app-store-btn"
              onClick={() =>
                window.open("http://wix.to/csCHCUo?ref=symp_button", "_blank")
              }
            >
              <img
                width="200px"
                style={this.imageStyle}
                src={appStore}
                className="app-store-icon"
                alt="app-store-icon"
              />
            </button>
          </div>
        ) : isMobile && isAndroid ? (
          <button
            style={this.buttonStyle}
            className="google-play-btn"
            onClick={() =>
              window.open("http://wix.to/csCHCUo?ref=symp_button", "_blank")
            }
          >
            <img
              style={this.buttonStyle}
              width="200px"
              src={googlePlay}
              className="google-play-icon"
              alt="google-play-icon"
            />
          </button>
        ) : (
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
        )}
      </div>
    );
  }
}
