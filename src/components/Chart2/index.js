import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
const centiEndPoint = "http://192.168.0.66:8000/temperature_data/";
class Chart2 extends Component {
    constructor(props) {
        super(props);
        this.state = {centis: []};
      }
  
      async componentDidMount() {
        let { data: centis } = await axios.get(centiEndPoint, {});
        this.setState({centis});
      }
    
    render(){
        const {centis} = this.state;
        let yearlist = [];
        let nolist=[];
        let lowlist=[];
        for(let i=0; i<centis.length;i++){
          yearlist.push(centis[i].year);
          nolist.push(centis[i].no_smooth);
          lowlist.push(centis[i].lowess);
        }

        const data = {
            labels: yearlist,
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
              data:lowlist},
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
                  data:nolist}
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