import React from "react";
import Chart from "chart.js";

export default function CardBarChart() {
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "Mean",
        ],
        datasets: [
          {
            backgroundColor: ["#88cf94", "#ff6d74", "#88cf94", "#88cf94", "#ff6d74", "#88cf94", "#ffa7d1"],
            barThickness: "flex",
            borderColor: ["green", "red", "green", "green", "red", "green", "palevioletred"],
            borderWidth: 2,
            data: [90, 27.5, 85, 65, 40, 97.5, 67.5],
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: true,
        responsive: true,
        title: {
          display: true,
          text: "SUS Scores",
        },
        tooltips: {
          mode: "nearest",
          intersect: true,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          display: false,
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Participant",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {min: 0, stepSize: 20},
              display: true,
              scaleLabel: {
                display: false,
                labelString: "SUS Score",
                beginAtZero: true,
              },
              gridLines: {
                borderDash: [5],
                drawBorder: false,
                borderDashOffset: [5],
                color: "rgba(0, 0, 0, 0.75)",
                zeroLineColor: "rgba(0, 0, 0, 0.25)",
                zeroLineBorderDash: [5],
                zeroLineBorderDashOffset: [5],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  
  return (
    <>
      <div className="dark:bg-white bg-gray-100 border-2 border-current rounded col-span-8">
        <div className="py-8 px-4 flex-auto">
          {/* Chart */}
          <div className="relative">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}

