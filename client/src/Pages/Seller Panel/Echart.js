import React, { useState } from "react";
import Chart from "react-apexcharts";

//Export Bar Cart
function Echart() {

  //Chart Data
  const [state, setState] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
      },
    },
    series: [
      {
        name: "Buying",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 15, 25, 63, 69],
      },
    ],
  });
  return (
    <div>
        <h1 className="pt-2 pb-7 text-gray-800  font-bold text-lg text-center">Summery of Selling & Buying</h1>
      <div >
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

export default Echart;

// bar
// line
// area
// radar
// histogram
// scatter
// heatmap
