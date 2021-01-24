import React from "react";

export default class Main extends React.Component {
  render() {
    return (
      <main className="page__main">
        <h1>This is the main of {this.props.pageName} page</h1>
      </main>
    );
  }
}
