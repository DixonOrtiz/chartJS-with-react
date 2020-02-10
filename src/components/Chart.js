import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Metropolitana",
          "Valparaíso",
          "Biobío",
          "Maule",
          "La Araucanía"
        ],
        datasets: [
          {
            label: "Population",
            data: [7112808, 1815902, 1556805, 1044950, 957224],
            backgroundColor: "purple"
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: { display: true, text: "Regiones", fontSize: 25 },
            legend: { display: true, position: "right" }
          }}
        />
      </div>
    );
  }
}

export default Chart;
