import React, { Component } from "react";
import { SeaLevelMap, TopNav } from "../../components";
import {
  About,
  Effects,
  Simulator,
  LateGlobalWarming,
  Contributing,
} from "../../pages";

import "./index.css";

class EntirePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <TopNav />
        <div class="container">
          <About />
          <Effects />
          <LateGlobalWarming />
          <Simulator />
          <Contributing />
        </div>
      </div>
    );
  }
}

export default EntirePage;
