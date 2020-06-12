import React, { Component } from "react";
import "./index.css";
class TopNav extends React.Component {
  constructor() {
    super();

    this.state = {
      AboutLocation: 0,
      EffectsLocation: 0,
      WarmingLocation: 0,
      SimulLocation: 0,
      ContriLocation: 0,
    };
  }

  handleClicked = (e) => {
    const value = e.target.innerHTML;
    if (value === "소개") {
      window.scrollTo({ top: this.state.AboutLocation, behavior: "smooth" });
    } else if (value === "현재 지구는?") {
      window.scrollTo({ top: this.state.EffectsLocation, behavior: "smooth" });
    } else if (value === "지구 온도 내리기") {
      window.scrollTo({ top: this.state.WarmingLocation, behavior: "smooth" });
    } else if (value === "시뮬레이터") {
      window.scrollTo({ top: this.state.SimulLocation, behavior: "smooth" });
    } else if (value === "기여하기") {
      window.scrollTo({ top: this.state.ContriLocation, behavior: "smooth" });
    }
  };

  componentDidMount() {
    this.setState({
      AboutLocation: document.querySelector(".AboutContainer").offsetTop,
      EffectsLocation: document.querySelector(".EffectsContainer").offsetTop,
      WarmingLocation: document.querySelector(".WarmingContainer").offsetTop,
      SimulLocation: document.querySelector(".SimulContainer").offsetTop,
      ContriLocation: document.querySelector(".ContriContainer").offsetTop,
    });
  }

  render() {
    return (
      <nav class="topMenu">
        <h1 class="homeTitle">웹사이트 이름</h1>
        <div class="fillSpace"></div>
        <ul>
          <li>
            <a class="menuLink" onClick={this.handleClicked}>
              소개
            </a>
          </li>
          <li>
            <a class="menuLink" onClick={this.handleClicked}>
              현재 지구는?
            </a>
          </li>
          <li>
            <a class="menuLink" onClick={this.handleClicked}>
              지구 온도 내리기
            </a>
          </li>
          <li>
            <a class="menuLink" onClick={this.handleClicked}>
              시뮬레이터
            </a>
          </li>
          <li>
            <a class="menuLink" onClick={this.handleClicked}>
              기여하기
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default TopNav;
