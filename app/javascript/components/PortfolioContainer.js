import React, { Component } from "react";
import Search from "./Seach";
import Calculate from "./Calculate";
import axios from "axios";

export class PortfolioContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolio: [],
      search_results: [],
      active_currency: null,
      amount: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(e) {
    axios
      .post("http://localhost:3000/search", {
        search: e.target.value,
      })
      .then((data) => {
        this.setState({
          search_results: [...data.data.currencies],
        });
      })
      .catch((data) => {
        debugger;
      });

    console.log(this.state.search_results);
  }

  handleSelect(e) {
    e.preventDefault();
    const id = e.target.getAttribute("data-id");
    const activeCurrency = this.state.search_results.filter(
      (item) => item.id == parseInt(id)
    );

    this.setState({
      active_currency: activeCurrency[0],
      searchResults: [],
    });
  }
  render() {
    const searchOrCalculate = this.state.active_currency ? (
      <Calculate />
    ) : (
      <Search
        searchResults={this.state.search_results}
        handleChange={this.handleChange}
        handleSelect={this.handleSelect}
      />
    );

    return <div>{searchOrCalculate}</div>;
  }
}

export default PortfolioContainer;
