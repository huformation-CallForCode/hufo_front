import React, { Component } from "react";
import "./index.css";
import { EffectCard } from "../../components";
class LateGlobalWarming extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  renderCard = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return arr.map(({ index }) => {
      return <EffectCard></EffectCard>;
    });
  };
  render() {
    return (
      <div class="WarmingContainer">
        <div class="WarmingLeft"></div>
        <div class="WarmingMid">
          <div class="WarmingTextBox1">
            <h3>현재 지구의 표면 온도</h3>
            <text>24.01도</text>
          </div>
          <div class="WarmingTextBox2">
            <text class="WarmingText">0.01도 증가하면</text>
          </div>
          <div class="cardsBox">{this.renderCard()}</div>
          <div class="WarmingCards"></div>
        </div>
        <div class="WarmingRight"></div>
      </div>
    );
  }
}

export default LateGlobalWarming;
