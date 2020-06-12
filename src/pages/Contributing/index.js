import React, { Component } from "react";
import "./index.css";
import { EffectCard } from "../../components";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

class Contributing extends React.Component {
  constructor() {
    super();
    this.state = {
      option1: ["서울", "경기", "기타"],
      option2: ["봉사1", "봉사2"],
      pressedCalBtn: false,
      firstDay: moment(new Date()),
      lastDay: moment(new Date()).add(1, "days"),
    };
    this.ContriRefs = React.createRef();
  }

  componentDidMount() {
    console.log(this.state.firstDay.date(), this.state.lastDay.date());
    this.props.getRefsFromContributing(this.ContriRefs);
  }

  handleBtnPress = () => {
    if (this.state.pressedCalBtn === true) {
      this.setState({
        pressedCalBtn: false,
      });
    } else {
      this.setState({
        pressedCalBtn: true,
      });
    }
  };

  setfirstDay = (value) => {
    if (moment(value) < this.state.lastDay) {
      this.setState({
        firstDay: moment(value),
      });
    } else {
      alert("적절한 기간을 설정해주세요!");
    }
  };

  setlastDay = (value) => {
    if (moment(value) > this.state.firstDay) {
      this.setState({
        lastDay: moment(value),
      });
    } else {
      alert("적절한 기간을 설정해주세요!");
    }
  };

  renderCard = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return arr.map(({ index }) => {
      return <EffectCard></EffectCard>;
    });
  };
  render() {
    return (
      <div class="ContriContainer" ref={this.ContriRefs}>
        <div class="ContriLeft"></div>
        <div class="ContriMid">
          <div class="DropDownAndCalendarBox">
            <Dropdown
              className="DropDown1"
              options={this.state.option1}
              value={this.state.option1[0]}
            ></Dropdown>
            <Dropdown
              className="DropDown2"
              options={this.state.option2}
              value={this.state.option2[0]}
            ></Dropdown>
            <div
              class="calendarbtn"
              style={
                this.state.pressedCalBtn
                  ? { color: "blue" }
                  : { color: "black" }
              }
              onClick={this.handleBtnPress}
            >
              {this.state.firstDay.years() +
                ". " +
                this.state.firstDay.month() +
                ". " +
                this.state.firstDay.date() +
                " ~ " +
                this.state.lastDay.years() +
                ". " +
                this.state.lastDay.month() +
                ". " +
                this.state.lastDay.dates()}
            </div>
          </div>
          {this.state.pressedCalBtn && (
            <div class="CalendarBox">
              <Calendar onChange={this.setfirstDay} />
              <Calendar onChange={this.setlastDay} />
            </div>
          )}

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
