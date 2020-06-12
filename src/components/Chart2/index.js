import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class Chart2 extends Component {
    render(){
        const centidata = {
            year:[1880,1881,1882,1883,1884],
            no_smoth:[2,2,2,2,2],
            lowess:[1,2,3,4,5]
        };
        const low = centidata.lowess;
        const years = centidata.year;
        const nosmoth = centidata.no_smoth;
        const data = {
            labels: years,
            datasets: [{
            label:"Lowess smoothing",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "black",
              borderCapStyle: 'butt',
              borderDash: [],
              borderColor: "black",
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "black",
              pointBackgroundColor: "black",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "black",
              pointHoverBorderColor: "black",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data:low},
              {
                label:"Annual mean",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "lightgray",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderColor: "lightgray",
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "lightgray",
                  pointBackgroundColor: "lightgray",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "lightgray",
                  pointHoverBorderColor: "lightgray",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data:nosmoth}
            ]
        };
          
          return (
            <div>
            <Line data={data} />
          </div>
          );
    }
}

export default Chart2;