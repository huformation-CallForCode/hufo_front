import React, { Component } from "react";
import "./index.css";
import { SeaLevelMap } from "../../components";

class Simulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.simulRefs = React.createRef();
  }

  componentDidMount() {
    this.props.getRefsFromSimulator(this.simulRefs);
  }

  render() {
    return (
      <div class="SimulContainer" ref={this.simulRefs}>
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
