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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <Calculate />
      </div>
    );
  }
}

export default PortfolioContainer;
