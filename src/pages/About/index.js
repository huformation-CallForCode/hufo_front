import React, { Component } from "react";
import "./index.css";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.AboutRefs = React.createRef();
  }

  componentDidMount() {
    this.props.getRefsFromAbout(this.AboutRefs);
  }
  render() {
    return (
      <div class="AboutContainer" ref={this.AboutRefs}>
        <div class="AboutLeft"></div>
        <div class="AboutMid">
          <div class="AboutTitleBox">
            <h2 class="AboutTitle">About</h2>
          </div>
          <div class="AboutList">
            <div class="AboutHL"></div>
            <h3 class="AboutListtTitle">어떤 웹사이트 인가요?</h3>
            <div class="AboutTextBox">
              <text class="AboutText">
                기후변화에 따른 지구의 피해에 대한 경각심을
              </text>
              <br></br>
              <text class="AboutText">
                사람들에게 일깨워주기 제작한 웹사이트입니다.
              </text>
            </div>

            <div class="AboutHL"></div>
            <h3 class="AboutListtTitle">어떤 기능을 제공하나요?</h3>
            <div class="AboutTextBox">
              <text class="AboutText">
                기후변화에 따른 지구의 피해에 대한 경각심을
              </text>
              <br></br>
              <text class="AboutText">
                사람들에게 일깨워주기 제작한 웹사이트입니다.
              </text>
            </div>
            <div class="AboutHL"></div>
          </div>
        </div>
        <div class="AboutRight"></div>
      </div>
    );
  }
}

export default About;
