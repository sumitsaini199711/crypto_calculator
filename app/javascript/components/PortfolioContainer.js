import React, { Component } from "react";
import Search from "./Seach";
import Calculate from "./Calculate";

export class PortfolioContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      portfolio: [],
      search_result: [],
      active_currency: null,
      amount: "",
    };
  }
  render() {
    return (
      <div>
        <Search />
        <Calculate />
      </div>
    );
  }
}

export default PortfolioContainer;
