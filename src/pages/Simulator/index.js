import React, { Component } from "react";
import "./index.css";
import { SeaLevelMap } from "../../components";

class Simulator extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div class="SimulContainer">
        <div class="SimulLeft"></div>
        <div class="SimulMid">
          <SeaLevelMap />
        </div>
        <div class="SimulRight"></div>
      </div>
    );
  }
}

export default Simulator;
