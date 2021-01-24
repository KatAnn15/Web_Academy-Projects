import React from "react";

export default class PurchaseDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      isUpgraded: false,
    };
  }
  render() {
    return (
      <div className="checkout__details">
        <div className="details__contact-info">
          <h3 className="info__contact-title">
            <span>&#10004;&#65039;</span>Sign Up
          </h3>
          <a className="log-out__btn" onClick={this.props.logOut} href="#">
            Log out
          </a>
          <p className="info__user-email">
            Signed in as {this.props.contactEmail}
          </p>
        </div>
        <div className="details__payment-info">
          <h3 className="info__payment__title">
            <span>2</span>Payment
          </h3>
          {this.state.isUpgraded ? (
            <h4 className="payment-info__title">
              Please, select the checkout method
            </h4>
          ) : (
            <div className="cannot-accept-payment__wrapper">
              <h4 className="cannot-accept-payment__info">
                We're not able to accept online payments at the moment.
              </h4>
              <p className="cannot-accept-payment__contact-us">
                Please contact us to complete your purchase. Thanks.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
