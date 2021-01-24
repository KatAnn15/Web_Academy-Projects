import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import { Content } from "./randomPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      getContentBtnClicked: false,
      data: {},
    };
  }
  fetchData() {
    const url = "https://www.themealdb.com/api/json/v1/1/random.php";

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ data: data.meals[0] });
        this.setState({ getContentBtnClicked: true });
      });
  }

  refreshData = () => {
    this.fetchData();
  };

  render() {
    return (
      <div className="page-container">
        <div className="page-content__initial">
          <h1 className="page__content-initial-title">Feeling hungry?</h1>
          <h2 className="page_content-initial-description">
            Get a random meal by clicking below
          </h2>
          <button className="page_get-content-btn" onClick={this.refreshData}>
            Get meal
          </button>
        </div>
        {this.state.getContentBtnClicked ? (
          <div className="page-content__wrapper">
            <Content data={this.state.data} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
