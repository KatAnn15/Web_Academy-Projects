import React from "react";
import HeaderStrip from "../global/headerStrip";
import Footer from "../global/footer";
import GetInTouch from "../global/getInTouch";
import advance from "../../assets/images/foxFit/advance.png";
import flexible from "../../assets/images/foxFit/flexible.png";
import guidance from "../../assets/images/foxFit/guidance.png";
import results from "../../assets/images/foxFit/results.png";
import suitable from "../../assets/images/foxFit/suitable.png";
import trainers from "../../assets/images/foxFit/trainers.png";

export default class FoxFit extends React.Component {
  constructor() {
    super();
    this.state = {
      foxFitData: {},
      foxFitPerks: [],
    };
  }
  componentDidMount() {
    this.getJsonData();
  }
  getJsonData() {
    let fetchedData = require("../../assets/json/data.json");
    let stripData = fetchedData.strips;
    let foxFitPerks = fetchedData.foxFitPerks;
    this.setState({ foxFitData: stripData[2] });
    this.setState({ foxFitPerks: foxFitPerks });
  }
  render() {
    const {
      stripName,
      title,
      description,
      description2,
    } = this.state.foxFitData;

    const pros = [suitable, flexible, guidance, advance, results, trainers];
    const perks = [];

    this.state.foxFitPerks.forEach((perk, i) => {
      const { name } = perk;
      perks.push(
        <div className={`foxFit-pro__item item${i}`} key={`item-${i}`}>
          <img src={pros[i]} alt={name} width="65px" />
          <span>{name}</span>
        </div>
      );
    });
    return (
      <div className="page__container">
        <HeaderStrip info={"About FoxFit"} />
        <div className={`strip-wrapper strip__${stripName}`}>
          <div className="fox-fit__container">
            <div className="strip-info__fox-wrapper">
              <h2 className={`strip__${stripName}__info_title`}>{title}</h2>
              <p className={`strip__${stripName}__info_beginning`}>
                {description}
              </p>
              <p className={`strip__${stripName}__info_ending`}>
                {description2}
              </p>
            </div>

            <div className="why-foxFit">
              <div className="why-foxFit__info">
                <h2 className="why-foxFit__info__title">Why FoxFit</h2>
                <div className="why-foxFit__info-wrapper">{perks}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-strip"></div>
        <GetInTouch />
        <Footer />
      </div>
    );
  }
}
