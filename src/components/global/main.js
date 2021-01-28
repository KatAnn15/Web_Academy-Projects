import React from "react";

export default class Main extends React.Component {
  render() {
    return (
      <main className="page__main">
        <h1>{this.props.data}</h1>
      </main>
    );
  }
}
