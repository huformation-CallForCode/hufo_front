import React, { Component } from "react";
import "./index.css";
import { EffectCard } from "../../components";
class Contributing extends React.Component {
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
      <div class="ContriContainer">
        <div class="ContriLeft"></div>
        <div class="ContriMid">
          <div class="ContriTextBox1">
            <h3>현재 지구의 표면 온도</h3>
            <text>24.01도</text>
          </div>
          <div class="ContriTextBox2">
            <text class="ContriText">0.01도 증가하면</text>
          </div>
          <div class="cardsBox">{this.renderCard()}</div>
          <div class="ContriCards"></div>
        </div>
        <div class="ContriRight"></div>
      </div>
    );
  }
}

export default Contributing;
