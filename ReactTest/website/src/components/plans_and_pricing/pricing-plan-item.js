import React from "react";
import CheckoutPage from "./checkoutPlans";

export default class PricingPlanItem extends React.Component {
  render() {
    return (
      <div className="pricing-plan pricing-plan__item">
        <h3 className={`pricing-plan__${this.props.label}`}>Best Value</h3>
        <div className="pricing-plan__info">
          <h4 className="pricing-plan__title">{this.props.title}</h4>
          <h2 className="pricing-plan__price">
            <span>$</span>
            {this.props.price}
          </h2>
          <h5 className="pricing-plan__cycle">{this.props.cycle}</h5>
          <h5 className="pricing-plan__level">{this.props.level}</h5>
          <h5 className="pricing-plan__length">{this.props.length}</h5>
          <button
            className={`pricing-plan__book-btn`}
            id={this.props.id}
            onClick={this.props.openCheckout}
          >
            Select
          </button>
        </div>
        <div className="pricing-plan__benefits">{this.props.benefits}</div>
      </div>
    );
  }
}
