import React, { Component } from "react";
import "./index.css";

class EffectCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div class="CardContainer">
        <div>
          <text class="CardText">북극족 가족의 서식처가</text>
        </div>
        <div class="fillSpace"></div>
        <div>
          <text class="CardText">35% 줄어듭니다</text>
        </div>
      </div>
    );
  }
}

export default EffectCard;
