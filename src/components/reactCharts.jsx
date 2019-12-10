import React, { useState } from 'react';
import { Bar, Radar, Line } from "react-chartjs-2"


const ReactCharts = () => {
  const [sensrData, fetchData] = useState({})
  async function getData() {
    const url = "http://127.0.0.1:7410/data";
    await fetch(url)
      .then((response) => response.json())
      .then(data => fetchData(Object.values(data)[0]))
      .catch(err => console.log(err))
  }

  getData();
  const sensor0 = Object.values(sensrData)[2];
  const sensor1 = Object.values(sensrData)[3];
  const sensor2 = Object.values(sensrData)[4];
  const sensor3 = Object.values(sensrData)[5];
  const sensor4 = Object.values(sensrData)[6];
  const sensor5 = Object.values(sensrData)[7];
  const sensor6 = Object.values(sensrData)[8];
  const sensor7 = Object.values(sensrData)[9];
  const sensor8 = Object.values(sensrData)[10];
  const sensor9 = Object.values(sensrData)[11];

  const options = {
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Classes'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Samples'
        }
      }]
    }
  };
  const Data = {
    labels: ['0', '20', '40', '60', '80', '100', '120', '140', '160', '180', '200', '220', '240', '260', '280', '300', '320', '340', '360', '380', '400'],
    datasets: [
      {
        label: 'Sensor - 0',
        backgroundColor: 'rgba(235, 232, 70)',
        borderColor: 'rgba(235, 232, 70)',
        pointBorderColor: 'rgba(235, 232, 70)',
        fill: false,
        pointRadius: 2,
        lineTension: 0.1,
        data: sensor0
      },
      {
        label: 'Sensor - 1',
        backgroundColor: 'rgba(255, 153, 0)',
        borderColor: 'rgba(255, 153, 0)',
        pointBorderColor: 'rgba(255, 153, 0)',
        fill: false,
        lineTension: 0.1,
        pointRadius: 2,
        data: sensor1
      },
      {
        label: 'Sensor - 2',
        backgroundColor: 'rgba(0, 225, 255)',
        borderColor: 'rgba(0, 225, 255)',
        pointBorderColor: 'rgba(0, 225, 255)',
        fill: false,
        lineTension: 0.1,
        pointRadius: 2,
        data: sensor2
      },
      {
        label: 'Sensor - 3',
        backgroundColor: 'rgba(0, 89, 255)',
        borderColor: 'rgba(0, 89, 255)',
        pointBorderColor: 'rgba(0, 89, 255)',
        fill: false,
        lineTension: 0.1,
        pointRadius: 2,
        data: sensor3
      },
      {
        label: 'Sensor - 4 ',
        backgroundColor: 'rgba(179, 153, 255)',
        borderColor: 'rgba(153, 153, 255)',
        pointBorderColor: 'rgba(153, 179, 255)',
        fill: false,
        lineTension: 0.1,
        pointRadius: 2,
        data: sensor4
      },
      {
        label: 'Sensor - 5',
        backgroundColor: 'rgba(240, 3, 252)',
        borderColor: 'rgba(240, 3, 252)',
        pointBorderColor: 'rgba(240, 3, 252)',
        fill: false,
        lineTension: 0.1,
        pointRadius: 2,
        data: sensor5
      },
      {
        label: 'Sensor - 6',
        backgroundColor: 'rgba(252, 3, 132)',
        borderColor: 'rgba(252, 3, 132)',
        pointBorderColor: 'rgba(252, 3, 132)',
        fill: false,
        lineTension: 0.1,
        pointRadius: 2,
        data: sensor6
      },

      {
        label: 'Sensor - 7',
        backgroundColor: 'rgba(132, 3, 252)',
        borderColor: 'rgba(132, 3, 252)',
        pointBorderColor: 'rgba(132, 3, 252)',
        fill: false,
        lineTension: 0.1,
        pointRadius: 2,
        data: sensor7
      },
      {
        label: 'Sensor - 8',
        backgroundColor: 'rgba(3, 132, 252)',
        borderColor: 'rgba(3, 132, 252)',
        pointBorderColor: 'rgba(3, 132, 252)',
        pointRadius: 2,
        lineTension: 0.1,
        fill: false,
        data: sensor8
      },
      {
        label: 'Sensor - 9',
        backgroundColor: 'rgba(3, 252, 119)',
        borderColor: 'rgba(3, 252, 119)',
        pointBorderColor: 'rgba(3, 252, 119)',
        pointRadius: 2,
        lineTension: 0.1,
        fill: false,
        data: sensor9
      },
    ],
  }


return (
  <div className='library' >
    <h1> Data Visualization using Bar Chart </h1>
    <Bar data={Data} options={options} />
    <h1> Data Visualization using Line Chart </h1>
    <Line data={Data} options={options} />
    <h1> Data Visualization using Radar Chart </h1>
    <Radar data={Data} options={options} />
  </div>
);
}
export default ReactCharts ;