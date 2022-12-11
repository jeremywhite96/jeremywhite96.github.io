import React from "react";
import Chart from "chart.js";

export default function CardBarChart() {
  React.useEffect(() => {
    let config = {
      type: "pie",
      options: {
      },
      data: {
        labels: [
          "Black (10%)",
          "Colour (90%)",
        ],
        datasets: [
          {
            backgroundColor: ["#ffa7d1","#88cf94"],
            barThickness: "flex",
            borderWidth: 2,
            data: [2, 18],
            fill: true,
          },
        ],
      },
    }
    let ctx = document.getElementById("pie2-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  
  return (
    <>
      <div className="rounded border-2 bg-gray-100">
        <div className="py-8 px-4 flex-auto">
          <h1 className="text-black text-center">Filter Underline: Colour or Black</h1>
          <div className="relative">
            <canvas id="pie2-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}

