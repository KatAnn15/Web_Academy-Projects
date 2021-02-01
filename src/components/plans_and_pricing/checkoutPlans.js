import React from "react";
import PurchaseDetails from "./details";
import CheckoutSignUp from "./sign-up";
import OrderSummaryWidget from "./orderSummaryWidget";

export default class CheckoutPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isMember: false,
      email: [],
    };
  }
  componentDidMount = () => {
    this.fetchData();
  };
  logOut = () => {
    this.setState({ isMember: false });
  };
  componentDidUpdate = () => {
    console.log("Hello this wonderful world");
    // const { getData } = this.props;
    // console.log(getData);
    // this.getData();
  };
  fetchData = () => {
    const fetchedData = require("../../assets/json/contacts.json");
    const contactData = fetchedData.contacts;
    const memberData = contactData[0];
    this.setState({ email: memberData });
  };
  getData = (data) => {
    this.setState({ isMember: data[0] });
    this.setState({ email: data[1] });
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
              <CheckoutSignUp getData={this.getData} />
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
