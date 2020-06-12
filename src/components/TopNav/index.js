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
      value: 1,
    };
  }

  onScroll = () => {
    const scrollTop = window.scrollY;
    if (
      this.state.value === 1 &&
      scrollTop > this.props.EffectsRefs.current.offsetTop
    ) {
      this.setState({
        value: 2,
      });
    } else if (
      this.state.value === 2 &&
      scrollTop < this.props.EffectsRefs.current.offsetTop
    ) {
      this.setState({
        value: 1,
      });
    } else if (
      this.state.value === 2 &&
      scrollTop > this.props.warmingRefs.current.offsetTop
    ) {
      this.setState({
        value: 3,
      });
    } else if (
      this.state.value === 3 &&
      scrollTop < this.props.warmingRefs.current.offsetTop
    ) {
      this.setState({
        value: 2,
      });
    } else if (
      this.state.value === 3 &&
      scrollTop > this.props.simulRefs.current.offsetTop
    ) {
      this.setState({
        value: 4,
      });
    } else if (
      this.state.value === 4 &&
      scrollTop < this.props.simulRefs.current.offsetTop
    ) {
      this.setState({
        value: 3,
      });
    } else if (
      this.state.value === 4 &&
      scrollTop > this.props.ContributingRefs.current.offsetTop
    ) {
      this.setState({
        value: 5,
      });
    } else if (
      this.state.value === 5 &&
      scrollTop < this.props.ContributingRefs.current.offsetTop
    ) {
      this.setState({
        value: 4,
      });
    }
  };

  handleClicked = (e) => {
    const value = e.target.innerHTML;
    if (value === "소개") {
      window.scrollTo(0, this.props.AboutRefs.current.offsetTop);
      this.setState({
        value: 1,
      });
    } else if (value === "현재 지구는?") {
      window.scrollTo(0, this.props.EffectsRefs.current.offsetTop);
      this.setState({
        value: 2,
      });
    } else if (value === "지구 온도 내리기") {
      window.scrollTo(0, this.props.warmingRefs.current.offsetTop);
      this.setState({
        value: 3,
      });
    } else if (value === "시뮬레이터") {
      window.scrollTo(0, this.props.simulRefs.current.offsetTop);
      this.setState({
        value: 4,
      });
    } else if (value === "기여하기") {
      window.scrollTo(0, this.props.ContributingRefs.current.offsetTop);
      this.setState({
        value: 5,
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
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
            <a
              class="menuLink"
              style={
                this.state.value === 1 ? { color: "red" } : { color: "black" }
              }
              onClick={this.handleClicked}
            >
              소개
            </a>
          </li>
          <li>
            <a
              class="menuLink"
              onClick={this.handleClicked}
              style={
                this.state.value === 2 ? { color: "red" } : { color: "black" }
              }
            >
              현재 지구는?
            </a>
          </li>
          <li>
            <a
              class="menuLink"
              onClick={this.handleClicked}
              style={
                this.state.value === 3 ? { color: "red" } : { color: "black" }
              }
            >
              지구 온도 내리기
            </a>
          </li>
          <li>
            <a
              class="menuLink"
              onClick={this.handleClicked}
              style={
                this.state.value === 4 ? { color: "red" } : { color: "black" }
              }
            >
              시뮬레이터
            </a>
          </li>
          <li>
            <a
              class="menuLink"
              onClick={this.handleClicked}
              style={
                this.state.value === 5 ? { color: "red" } : { color: "black" }
              }
            >
              기여하기
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default TopNav;
