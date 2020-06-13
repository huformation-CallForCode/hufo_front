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
      dailyData: [],
      eventData: [],
    };
    this.WarmingRefs = React.createRef();
  }

  componentDidMount() {
    this.props.getRefsFromLateGlobalWarming(this.WarmingRefs);
    this._getDailyData();
    this._getEventData();
  }

  handleClick = (e) => {
    if (this.state.daily === true && e.target.innerHTML === "Event") {
      this.setState({
        daily: false,
      });
    } else if (this.state.daily === false && e.target.innerHTML === "Daily") {
      this.setState({
        daily: true,
      });
    }
  };

  _getDailyData = async () => {
    try {
      const config = {
        headers: {},
      };

      const res = await axios.get(URL_GET_DAILY_CARDS, config);

      if (res.status === 200) {
        this.setState({
          dailyData: res.data.cards,
        });
      }
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };
  _getEventData = async () => {
    try {
      const config = {
        headers: {},
      };

      const res = await axios.get(URL_GET_EVENT_CARDS, config);

      if (res.status === 200) {
        this.setState({
          eventData: res.data.cards,
        });
      }
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };

  renderDailyCard = () => {
    return this.state.dailyData.map((data) => {
      return <EffectCard data={data}></EffectCard>;
    });
  };
  renderEventCard = () => {
    return this.state.eventData.map((data) => {
      return <EffectCard data={data}></EffectCard>;
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
          {this.state.daily ? (
            <div class="WarmingTextBox1">
              <h3>일상 생활에서는 무엇을 할 수 있나요?</h3>
            </div>
          ) : (
            <div class="WarmingTextBox1">
              <h3>함께 해요!</h3>
            </div>
          )}

          <div class="WarmingCardsBox">
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
