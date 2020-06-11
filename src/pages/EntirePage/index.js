import React, { Component } from "react";
import { SeaLevelMap, TopNav } from "../../components";
import { About, Effects } from "../../pages";

import "./index.css";

class EntirePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <body>
        <TopNav />

        <div class="container">
          <About />
          <Effects />
          <SeaLevelMap />
        </div>
      </body>
    );
  }
}

export default EntirePage;
