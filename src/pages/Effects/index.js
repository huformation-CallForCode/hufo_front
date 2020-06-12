import React, { Component } from "react";
import "./index.css";
import { EffectCard } from "../../components";
import axios from "axios";
import { URL_GET_NAGATIVE_CARDS } from "../../globals/apis";

class Effects extends React.Component {
  constructor() {
    super();
    this.state = {
      nagativeData: [],
    };
    this.effectsRefs = React.createRef();
  }

  componentDidMount() {
    this.props.getRefsFromEffects(this.effectsRefs);
    this._getNagativeData();
  }

  _getNagativeData = async () => {
    try {
      const config = {
        headers: {},
      };

      const res = await axios.get(URL_GET_NAGATIVE_CARDS, config);

      if (res.status === 200) {
        this.setState(
          {
            nagativeData: res.data.cards,
          },
          () => {
            console.log(this.state.nagativeData, "naga");
          }
        );
      }
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };

  renderCard = () => {
    return this.state.nagativeData.map((data) => {
      return <EffectCard data={data}></EffectCard>;
    });
  };

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
