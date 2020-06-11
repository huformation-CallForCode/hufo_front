import React, { Component } from "react";
import "./index.css";
class TopNav extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <nav class="topMenu">
        <h1 class="homeTitle">웹사이트 이름</h1>
        <div class="fillSpace"></div>
        <ul>
          <li>
            <a class="menuLink" href="#">
              소개
            </a>
          </li>
          <li>
            <a class="menuLink" href="#">
              현재 지구는?
            </a>
          </li>
          <li>
            <a class="menuLink" href="#">
              지구 온도 내리기
            </a>
          </li>
          <li>
            <a class="menuLink" href="#">
              시뮬레이터
            </a>
          </li>
          <li>
            <a class="menuLink" href="#">
              기여하기
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default TopNav;
