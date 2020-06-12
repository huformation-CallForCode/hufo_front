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

  getRefsFromSimulator = (Refs) => {
    this.setState({
      simulRefs: Refs,
    });
  };

  getRefsFromEffects = (Refs) => {
    this.setState({
      EffectsRefs: Refs,
    });
  };

  getRefsFromLateGlobalWarming = (Refs) => {
    this.setState({
      warmingRefs: Refs,
    });
  };

  getRefsFromAbout = (Refs) => {
    this.setState({
      AboutRefs: Refs,
    });
  };

  getRefsFromContributing = (Refs) => {
    this.setState({
      ContributingRefs: Refs,
    });
  };

  render() {
    return (
      <div>
        <TopNav
          AboutRefs={this.state.AboutRefs}
          simulRefs={this.state.simulRefs}
          EffectsRefs={this.state.EffectsRefs}
          warmingRefs={this.state.warmingRefs}
          ContributingRefs={this.state.ContributingRefs}
        />
        <div class="container">
          <About getRefsFromAbout={this.getRefsFromAbout} />
          <Effects getRefsFromEffects={this.getRefsFromEffects} />
          <LateGlobalWarming
            getRefsFromLateGlobalWarming={this.getRefsFromLateGlobalWarming}
          />
          <Simulator getRefsFromSimulator={this.getRefsFromSimulator} />
          <Contributing
            getRefsFromContributing={this.getRefsFromContributing}
          />
        </div>
      </div>
    );
  }
}

export default EntirePage;
