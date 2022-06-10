import React, { useState } from "react";
import Chart from "react-apexcharts";

//Export Bar Cart
function SellingRate() {

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
      {
        name: "Selling",
        data: [25, 60, 35, 80, 49, 70, 20, 81, 65, 89, 52, 78],
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
          type="bar"
          width="100%"
        />
      </div>
    </div>
  );
}

export default SellingRate;

// bar
// line
// area
// radar
// histogram
// scatter
// heatmap
