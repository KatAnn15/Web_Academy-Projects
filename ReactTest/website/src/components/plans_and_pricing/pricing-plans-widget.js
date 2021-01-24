import React from "react";
import PricingPlanItem from "./pricing-plan-item";

export default class PricingPlansWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      plans: [],
    };
  }
  componentDidMount = () => {
    this.fetchData();
  };
  fetchData = () => {
    const fetchedData = require("../../assets/json/data.json");
    const pricingPlansData = fetchedData.pricingPlans;
    console.log(fetchedData.pricingPlans);
    this.setState({ plans: pricingPlansData });
  };
  render() {
    const plansList = [];
    this.state.plans.forEach((plan, i) => {
      const { title, price, cycle, level, length, benefits, label, id } = plan;
      const benefitsList = [];
      benefits.forEach((benefit, index) => {
        benefitsList.push(
          <h5 className="benefit-item" key={`benefit_${index}`}>
            {benefit}
          </h5>
        );
      });
      plansList.push(
        <PricingPlanItem
          title={title}
          price={price}
          cycle={cycle}
          level={level}
          length={length}
          benefits={benefitsList}
          label={label}
          id={id}
          openCheckout={this.props.openCheckout}
          key={`item_${i}`}
        />
      );
    });
    return (
      <div className="pricing-plans-widget">
        <div className="pricing-plans-widget__content">{plansList}</div>
      </div>
    );
  }
}
