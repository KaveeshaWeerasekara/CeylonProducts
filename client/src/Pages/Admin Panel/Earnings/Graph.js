import React, { useState } from "react";
import Chart from "react-apexcharts";

function Graph() {
  //Chart Data
  const [state, setState] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "April",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "Profit",
        data: [30, 40, 45, 50, 49, 60, 70, 50, 15, 25, 63, 69],
      },
    ],
  });

  //Export Line Chart
  return (
    <div>
      <h1 className="pt-2 pb-7 text-gray-800  font-bold text-lg ">
        Summery of Profit
      </h1>
      <div>
        <Chart
          options={state.options}
          series={state.series}
          type="line"
          width="100%"
        />
      </div>
    </div>
  );
}

export default Graph;

// bar
// line
// area
// radar
// histogram
// scatter
// heatmap
