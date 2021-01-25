import React from "react";
import { Link } from "react-router-dom";

export default class CheckoutSignUp extends React.Component {
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
            <Link to="/login">
              <button Sign Upbutton className="checkout_sign-up-btn">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="checkout_log-in-btn">Log In</button>
            </Link>
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
