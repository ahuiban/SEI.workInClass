import React, { Component } from "react";
import Chart from "chart.js";
class BarChart extends Component {
  prepareData = (data) => {
    const chartData = {
      labels: [],
      datasets: [
        {
          label: "Avg high temps",
          data: [],
          fill: false,
          lineTension: 0,

          backgroundColor: "rgba(192, 77,77,.5)",
          borderColor: "rgba(192, 77,77,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(192, 77,77,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(192,77,77,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          spanGaps: false,
        },

        {
          label: "Avg low temps",
          data: [],

          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          spanGaps: false,
        },
      ],
    };
    data.temperatures.forEach((temperature) => {
      chartData.labels.push(temperature.month);
      chartData.datasets[0].data.push(temperature.average_high_f);
      chartData.datasets[1].data.push(temperature.average_low_f);
    });
    return chartData;
  };
  createChart = (data) => {
    const ctx = document.querySelector("#temperatures");
    const tempsChart = new Chart(ctx, {
      type: "line",
      data: data,
    });
  };
  getData = () => {
    fetch("/locations/1")
      .then((response) => response.json())
      .then((jData) => this.prepareData(jData))
      .then((data) => this.createChart(data))
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <>
        <h1>Temperatures</h1>
        <canvas id="temperatures" width="300" height="100"></canvas>
      </>
    );
  }
}
export default BarChart;
