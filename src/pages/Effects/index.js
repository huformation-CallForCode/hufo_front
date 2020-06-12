import React, { Component } from "react";
import "./index.css";
import { EffectCard } from "../../components";

class Effects extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.effectsRefs = React.createRef();
  }
  renderCard = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return arr.map(({ index }) => {
      return <EffectCard></EffectCard>;
    });
  };

  componentDidMount() {
    this.props.getRefsFromEffects(this.effectsRefs);
  }
  render() {
    return (
      <div class="EffectsContainer" ref={this.effectsRefs}>
        <div class="EffectsLeft"></div>
        <div class="EffectsMid">
          <div class="EffectsTextBox1">
            <h3>현재 지구의 표면 온도</h3>
            <text>24.01도</text>
          </div>
          <div class="EffectsTextBox2">
            <text class="EffectsText">0.01도 증가하면</text>
          </div>
          <div class="cardsBox">{this.renderCard()}</div>
          <div class="EffectsCards"></div>
        </div>
        <div class="EffectsRight"></div>
      </div>
    );
  }
}

export default Effects;
