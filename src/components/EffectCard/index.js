import React, { Component } from "react";
import "./index.css";

class EffectCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div
        class="CardContainer"
        style={{
          backgroundImage: `url(${data.image_url})`,
        }}
      >
        <div>
          <text class="CardText">{data.title}</text>
        </div>
        <div class="fillSpace"></div>
        <div>
          <text class="CardText">{data.subtitle}</text>
        </div>
      </div>
    );
  }
}

export default EffectCard;
