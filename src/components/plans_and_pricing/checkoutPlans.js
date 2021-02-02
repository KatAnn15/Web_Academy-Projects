import React from "react";
import PurchaseDetails from "./details";
import CheckoutSignUp from "./sign-up";
import OrderSummaryWidget from "./orderSummaryWidget";

export default class CheckoutPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isMember: false,
      email: "",
    };
  }
  componentDidMount = () => {
    this.fetchData();
  };
  logOut = () => {
    this.setState({ isMember: false });
  };
  componentDidUpdate = () => {};
  fetchData = () => {
    const fetchedData = require("../../assets/json/contacts.json");
    const contactData = fetchedData.contacts;
    const memberData = contactData[0];
    this.setState({ email: memberData });
  };
  sendData = (data) => {
    console.log("This is the final data: ", data);
    const email = data[0];
    this.setStates(email);
  };

  setStates = (recievedEmail) => {
    this.setState({ email: recievedEmail });
    this.setState({ isMember: true });
  };

  render() {
    return (
      <div className="checkout-widget">
        <button
          className="close-checkout-btn"
          onClick={this.props.closeCheckout}
        >
          Back
        </button>
        <h2 className="checkout__title">Checkout</h2>
        <div className="checkout-body">
          <div className="checkout__contact-info">
            {this.state.isMember ? (
              <PurchaseDetails
                contactEmail={this.state.email}
                logOut={this.logOut}
              />
            ) : (
              <CheckoutSignUp sendData={this.sendData} />
            )}
          </div>
          <div className="checkout__order-summary">
            <OrderSummaryWidget id={this.props.id} />
          </div>
        </div>
      </div>
    );
  }
}
