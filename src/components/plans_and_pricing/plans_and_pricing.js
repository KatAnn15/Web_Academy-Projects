import React from "react";
import HeaderStrip from "../global/headerStrip";
import Footer from "../global/footer";
import GetInTouch from "../global/getInTouch";
import PricingPlansWidget from "./pricing-plans-widget";
import CheckoutPage from "./checkoutPlans";

export default class PlansAndPricing extends React.Component {
  constructor() {
    super();
    this.state = {
      checkoutState: false,
      id: "",
    };
  }
  openCheckout = (e) => {
    this.setState({ checkoutState: true });
    this.setState({ id: e.target.id });
  };
  closeCheckout = () => {
    this.setState({ checkoutState: false });
  };
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <div className="page__container">
        <HeaderStrip info={"Choose Your Pricing Plan"} />
        <p className="pricing-plans__page-info">
          I'm a paragraph. Click here to add your own text and edit me. Let your
          users get to know you.
        </p>
        {this.state.checkoutState ? (
          <CheckoutPage id={this.state.id} closeCheckout={this.closeCheckout} />
        ) : (
          <PricingPlansWidget openCheckout={this.openCheckout} />
        )}

        <GetInTouch />
        <Footer />
      </div>
    );
  }
}
