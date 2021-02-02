import React from "react";
import { Login } from "../login/login";

export default class CheckoutSignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      openLogin: false,
    };
  }
  responseGoogle = async (googleData) => {
    const res = await fetch("/api/v1/auth/google", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };
  openLogin = () => [this.setState({ openLogin: true })];
  closeLogin = () => {
    this.setState({ openLogin: false });
  };
  sendData = (data) => {
    this.props.sendData(data);
  };
  render() {
    return (
      <div className="checkout__sign-up-widget">
        <div className="checkout__sign-up-wrapper">
          <h3 className="checkout__sign-up__title">
            <span>1</span>Sign Up
          </h3>
          <p className="checkout__sign-up__description">
            To purchase this plan and use its benefits in the future, log in to
            your account or sign up.
          </p>
          <div className="checkout__sign-up__action-bar">
            {this.state.openLogin ? (
              <Login closeLogin={this.closeLogin} sendData={this.sendData} />
            ) : null}
            <button
              Sign
              Upbutton
              className="checkout_sign-up-btn"
              onClick={this.openLogin}
            >
              Sign Up
            </button>
            <button className="checkout_log-in-btn" onClick={this.openLogin}>
              Log In
            </button>
          </div>
        </div>
        <div className="checkout__sign-up__payment-wrapper">
          <h3 className="checkout__sign-up__payment__title">
            <span>2</span>Payment
          </h3>
        </div>
      </div>
    );
  }
}
