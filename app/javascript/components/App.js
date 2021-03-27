import axios from "axios";
import React, { Component } from "react";
import PortfolioContainer from "./PortfolioContainer";

const csrfToken = document.querySelector('[name="csrf-token"]').content;
axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
export class App extends Component {
  render() {
    return <PortfolioContainer />;
  }
}

export default App;
