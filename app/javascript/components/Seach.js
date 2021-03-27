import React, { Component } from "react";

export class Seach extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Crypto Currency Calculator</h1>
        <form>
          <div className="form-group">
            <label>Search for a Currency</label>
            <br />
            <input
              onChange={this.props.handleChange}
              autoComplete="off"
              type="text"
              name="name"
              placeholder="Ex: Bitcoin, Litecoin, Ethereum..."
              value={this.props.name}
              className="field"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Seach;
