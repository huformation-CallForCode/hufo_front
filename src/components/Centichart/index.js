import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const centiEndPoint = "http://192.168.0.66:8000/temperature_data/";
class Centichart extends Component {
  constructor(props) {
    super(props);
    this.state = { centis: [] };
  }

  async componentDidMount() {
    let { data: centis } = await axios.get(centiEndPoint, {});
    this.setState({ centis });
  }

  render() {
    const { centis } = this.state;
    let yearlist = [];
    let nolist = [];
    let lowlist = [];
    for (let i = 0; i < centis.length; i++) {
      yearlist.push(centis[i].year);
      nolist.push(centis[i].no_smooth);
      lowlist.push(centis[i].lowess);
    }
    const data = {
      labels: yearlist,
      datasets: [
        {
          label: "Lowess smoothing",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "black",
          borderCapStyle: "butt",
          borderDash: [],
          borderColor: "black",
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "black",
          pointBackgroundColor: "black",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "black",
          pointHoverBorderColor: "black",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: lowlist,
        },
        {
          label: "Annual mean",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "lightgray",
          borderCapStyle: "butt",
          borderDash: [],
          borderColor: "lightgray",
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "lightgray",
          pointBackgroundColor: "lightgray",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "lightgray",
          pointHoverBorderColor: "lightgray",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: nolist,
        },
      ],
    };

    return (
      <div style={{ marginLeft: 30 }}>
        <h3 style={{ fontSize: 30 }}>표면 온도 증가 추세</h3>
        <Line width={600} height={400} data={data} />
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3>현재 지구의 표면 온도</h3>
          <text
            style={{
              color: "green",
              fontWeight: "bold",
            }}
          >
            24.01°C
          </text>
          <text>30년 안에 표면 온도 2°C 상승</text>
        </div>
      </div>
    );
  }
}

export default Centichart;
