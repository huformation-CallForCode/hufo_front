import React, { Component } from "react";
import "./index.css";
import { EffectCard, Chart, Centichart } from "../../components";
import axios from "axios";
import {
  URL_GET_NAGATIVE_CARDS,
  URL_GET_TEMPERATURE,
} from "../../globals/apis";

class Effects extends React.Component {
  constructor() {
    super();
    this.state = {
      nagativeData: [],
      temperature: 0,
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
        this.setState({
          nagativeData: res.data.cards,
        });
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
          <div class="EffectsTextBox2">
            <Chart></Chart>

            <Centichart></Centichart>
          </div>

          <div class="EffectsCardsBox">{this.renderCard()}</div>
          <div class="EffectsCards"></div>
        </div>
        <div class="EffectsRight"></div>
      </div>
    );
  }
}

export default Effects;
