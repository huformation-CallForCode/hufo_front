import React, { Component } from "react";
import "./index.css";
import { EffectCard } from "../../components";
class LateGlobalWarming extends React.Component {
  constructor() {
    super();
    this.state = {
      daily: true,
    };
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

  renderDailyCard = () => {
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
      <div class="WarmingContainer">
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
