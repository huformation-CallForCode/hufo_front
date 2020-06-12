import React, { Component } from "react";
import "./index.css";
import { EffectCard } from "../../components";
import axios from "axios";
import { URL_GET_DAILY_CARDS, URL_GET_EVENT_CARDS } from "../../globals/apis";
class LateGlobalWarming extends React.Component {
  constructor() {
    super();
    this.state = {
      daily: true,
    };
    this.WarmingRefs = React.createRef();
  }

  componentDidMount() {
    this.props.getRefsFromLateGlobalWarming(this.WarmingRefs);
  }

  handleClick = (e) => {
    if (this.state.daily === true && e.target.innerHTML === "Event") {
      this.setState(
        {
          daily: false,
        },
        console.log(this.state.da)
      );
    } else if (this.state.daily === false && e.target.innerHTML === "Daily") {
      this.setState(
        {
          daily: true,
        },
        console.log(this.state.daily)
      );
    }
  };

  renderDailyCard = async () => {
    // try {
    //   const config = {}

    //   const res = await axios.get()
    // } catch (error) {
    //   console.log(error)
    //   console.error(error)
    // }

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return arr.map(({ index }) => {
      return <EffectCard></EffectCard>;
    });
  };
  renderEventCard = () => {
    const arr = [1, 2, 3, 4];
    return arr.map(({ index }) => {
      return <EffectCard></EffectCard>;
    });
  };
  render() {
    return (
      <div class="WarmingContainer" ref={this.WarmingRefs}>
        <div class="WarmingLeft"></div>
        <div class="WarmingMid">
          <div class="SelectDailyEvent">
            <div
              class="Daily"
              onClick={this.handleClick}
              style={
                this.state.daily === true
                  ? { color: "red" }
                  : { color: "black" }
              }
            >
              Daily
            </div>
            <div
              class="Event"
              onClick={this.handleClick}
              style={
                this.state.daily === false
                  ? { color: "red" }
                  : { color: "black" }
              }
            >
              Event
            </div>
          </div>
          <div class="WarmingTextBox1">
            <h3>일상 생활에서는 무엇을 할 수 있나요?</h3>
          </div>
          <div class="cardsBox">
            {this.state.daily === true
              ? this.renderDailyCard()
              : this.renderEventCard()}
          </div>
          <div class="WarmingCards"></div>
        </div>
        <div class="WarmingRight"></div>
      </div>
    );
  }
}

export default LateGlobalWarming;
