import React, { Component } from "react";

class TabSelector extends Component {
  render() {
    const { active } = this.props;
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={this.props.handleChangeTab}
          className={active === "home" ? "active" : ""}
        >
          Home
        </button>
        <button
          id="about"
          onClick={this.props.handleChangeTab}
          className={active === "about" ? "active" : ""}
        >
          About
        </button>
        <button
          id="contact"
          onClick={this.props.handleChangeTab}
          className={active === "contact" ? "active" : ""}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
