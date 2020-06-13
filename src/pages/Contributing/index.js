import React, { Component } from "react";
import "./index.css";
import { EffectCard } from "../../components";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import axios from "axios";
import { URL_GET_VOLUNTEERS } from "../../globals/apis";
class Contributing extends React.Component {
  constructor() {
    super();
    this.state = {
      pressedCalBtn: false,
      firstDay: moment(new Date()),
      lastDay: moment(new Date()).add(1, "days"),
      volunteersData: [],
    };
    this.ContriRefs = React.createRef();
  }

  componentDidMount() {
    this.props.getRefsFromContributing(this.ContriRefs);
    this._getVolunteers();
  }

  _getVolunteers = async () => {
    try {
      const config = {
        headers: {},
      };

      const res = await axios.get(URL_GET_VOLUNTEERS, config);

      if (res.status === 200) {
        this.setState(
          {
            volunteersData: res.data,
          },
          () => {
            console.log(this.state.volunteersData);
          }
        );
      }
    } catch (error) {
      console.log(error);
      console.error(error);
    }
  };

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
    return this.state.volunteersData.map((data) => {
      if (
        moment(data.start_date).diff(this.state.firstDay) > 0 &&
        moment(data.end_date).diff(this.state.lastDay) < 0
      ) {
        return <EffectCard data={data}></EffectCard>;
      }
    });
  };
  render() {
    return (
      <div class="ContriContainer" ref={this.ContriRefs}>
        <div class="ContriLeft"></div>
        <div class="ContriMid">
          <div class="DropDownAndCalendarBox">
            <div
              class="calendarbtn"
              style={
                (this.state.pressedCalBtn
                  ? { color: "blue" }
                  : { color: "black" },
                { fontWeight: "Bold" })
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
            <h3 style={{ fontSize: 30 }}>기후변화 관련 봉사</h3>
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
