import React from "react";
import { isMobile } from "react-device-detect";

export default class OrderSummaryWidget extends React.Component {
  constructor() {
    super();
    this.state = {
      product: "pricing plan",
      productInfo: {},
    };
  }
  componentDidMount = () => {
    this.getPlanInfo();
  };
  getPlanInfo = () => {
    const productId = this.props.id;
    const fetchedData = require("../../assets/json/data.json");
    const productData = fetchedData.pricingPlans;
    let productItem;
    productData.forEach((item) => {
      if (item.id === productId) {
        productItem = item;
      }
    });
    this.setState({ productInfo: productItem });
  };
  render() {
    const { title, duration, price } = this.state.productInfo;
    return (
      <div className="common-wrapper">
        {isMobile ? (
          <div className="order-summary-widget">
            <div className="order-summary__product-info">
              <h3 className="order-summary__title">{title}</h3>
              {this.state.product === "pricing plan" ? (
                <div className="order-summary__product__details__wrapper">
                  <div className="order-summary__product__details detail_1">
                    <h4 className="order-summary__product_key key_1">
                      Duration
                    </h4>
                    <h4 className="order-summary__product_value value_1">
                      {duration}
                    </h4>
                  </div>
                  <div className="order-summary__product__details detail_2">
                    <h4 className="order-summary__product_key key_2">
                      Billed monthly
                    </h4>
                    <h4 className="order-summary__product_value value_2">
                      ${price}
                    </h4>
                  </div>
                </div>
              ) : (
                "How did you order this? We do not have this product yet :)"
              )}
            </div>
          </div>
        ) : (
          <div className="order-summary-widget">
            <div className="order-summary__product-info">
              <h3 className="order-summary__title">Order Summary</h3>
              {this.state.product === "pricing plan" ? (
                <div className="order-summary__product__details__wrapper">
                  <div className="order-summary__product__details detail_1">
                    <h4 className="order-summary__product_key key_1">Plan</h4>
                    <h4 className="order-summary__product_value value_1">
                      {title}
                    </h4>
                  </div>
                  <div className="order-summary__product__details detail_2">
                    <h4 className="order-summary__product_key key_2">
                      Duration
                    </h4>
                    <h4 className="order-summary__product_value value_2">
                      {duration}
                    </h4>
                  </div>
                </div>
              ) : (
                "How did you order this? We do not have this product yet :)"
              )}
            </div>
            <div className="order-summary__total">
              <h2 className="order-summary__total__title">Total</h2>
              <h2 className="order-summary__total__value">${price}</h2>
            </div>
          </div>
        )}
      </div>
    );
  }
}
