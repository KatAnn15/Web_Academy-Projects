import React from "react";

export class Content extends React.Component {
  componentDidMount() {
    console.log("This is the data: ", this.props.data);
    this.replaceUrl();
  }

  replaceUrl() {
    const { data } = this.props;
    let url = data.strYoutube;
    let newUrl = url.replace("watch?v=", "embed/");
    console.log(newUrl);
    return newUrl;
  }

  render() {
    const { data } = this.props;
    const ingredients = [];
    console.log("This is data: ", data);
    for (let i = 0; i < 20; i++) {
      const key = "strIngredient" + i;
      const value = "strMeasure" + i;

      const element = (
        <li>
          {data[key]} - {data[value]}
        </li>
      );
      if (data[key] !== "" && data[key] !== null && data[key] !== undefined) {
        ingredients.push(element);
      }
    }

    return (
      <div className="page__content">
        <div className="content__side-block">
          <img
            src={data.strMealThumb}
            width="200px"
            className="content__main-block__img"
            alt="meal"
          ></img>
          <div className="content__side-block__general-info">
            <h3>
              <span>Category: </span>
              {data.strCategory}
            </h3>
            <h3>
              <span>Area: </span>
              {data.strArea}
            </h3>
            <h3>
              <span>Tags: </span>
              {data.strTags}
            </h3>
          </div>
          <div className="content__side-block__additional-info">
            <h2 className="side-block__title">Ingredients:</h2>
            <ul className="content__ingredients-list">{ingredients}</ul>
          </div>
        </div>
        <div className="content__main-block">
          <h2 className="content__main-block__title">{data.strMeal}</h2>
          <h3 className="content__main-block__description">
            {" "}
            <p>{data.strInstructions}</p>
          </h3>
        </div>
        <div className="content__media-block">
          <h2 className="content__media__title">Video Recipe</h2>
          <iframe
            title="myFrame"
            className="content__media-item_video"
            width="800px"
            height="450px"
            src={this.replaceUrl()}
          ></iframe>
        </div>
      </div>
    );
  }
}
