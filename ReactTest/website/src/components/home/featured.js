import React from "react";
import blurMagazine from "../../assets/images/home-imgs/main/featured/blur-magazine.webp";
import frameMag from "../../assets/images/home-imgs/main/featured/frame-mag.webp";
import m from "../../assets/images/home-imgs/main/featured/m.webp";
import powerUp from "../../assets/images/home-imgs/main/featured/power-up.webp";
import strongToday from "../../assets/images/home-imgs/main/featured/strong-today.webp";

export default class Featured extends React.Component {
  render() {
    const importedArr = [strongToday, powerUp, blurMagazine, frameMag, m];
    const featuredArr = [];
    importedArr.forEach((item, i) => {
      featuredArr.push(
        <img
          src={item}
          alt="featured"
          key={`featured-${i}`}
          className={`featured_${i}`}
        />
      );
    });
    return (
      <div className="featured__wrapper">
        <h2 className="featured__title">As Featured On</h2>
        <div className="featured__list">{featuredArr}</div>
      </div>
    );
  }
}
