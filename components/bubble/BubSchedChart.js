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
          "Outlined Dates (40%)",
          "Filled Dates (60%)",
        ],
        datasets: [
          {
            backgroundColor: ["#88cf94", "#ffa7d1"],
            barThickness: "flex",
            borderWidth: 2,
            data: [8, 12],
            fill: true,
          },
        ],
      },
    }
    let ctx = document.getElementById("pie3-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);
  
  return (
    <>
      <div className="rounded border-2 bg-gray-100">
        <div className="py-8 px-4 flex-auto">
          <h1 className="text-black text-center">Filter Underline: Regular or Bolded</h1>
          <div className="relative">
            <canvas id="pie3-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}

