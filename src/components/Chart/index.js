import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import cchart from "../../cchart.svg";
class Chart extends Component {
  render() {
    const co2data = [
      [1990, 1991, 1992],
      ["Korea", "USA", "Canada"],
      [{ Korea: [20, 30, 40] }, { USA: [0, 10, 20] }, { Canada: [10, 20, 30] }],
    ];

    const color = [
      "#F8B195",
      "#F67280",
      "#C06C84",
      "#6C5B7B",
      "#355C7D",
      "#99B898",
      "#FECEAB",
      "#FF847C",
      "#E84A5F",
      "#2A363B",
      "#9DE0AD",
    ];

    const data = {
      labels: co2data[0],
      datasets: [],
    };

    const count = co2data[2].length;
    const dataa = co2data[2];

    for (let i = 0; i < count; i++) {
      let template = {
        label: null,
        fill: true,
        lineTension: 0.1,
        backgroundColor: null,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: null,
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: null,
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: null,
      };
      let nation = Object.keys(dataa[i]);
      let centigrade = Object.values(dataa[i]);
      template["label"] = nation[0];
      template["data"] = centigrade[0];
      template["backgroundColor"] = color[i];
      template["pointBackgroundColor"] = color[i];
      template["pointHoverBackgroundColor"] = color[i];
      data["datasets"].push(template);
    }
    return (
      <div>
        <h3 style={{ fontSize: 30 }}>탄소 배출 증가 추세</h3>
        <img
          src={cchart}
          style={{
            width: 650,
            height: 420,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>1인당 탄소 배출량</h3>
          <text
            style={{
              color: "red",
              fontWeight: "bold",
            }}
          >
            19.8 billion tones
          </text>
        </div>
      </div>
    );
  }
}

export default Chart;
