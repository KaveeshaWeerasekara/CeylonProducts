import React from "react";
import Graph from "./Graph";
import Withdraw from "./Withdraw";

//Export Grid (Line Chart & Money Withdraw Methods)
function Grid() {
  return (
    <>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
        <div className="rounded  col-span-2">
          <Graph />
        </div>
        <div className="rounded ">
          <Withdraw />
        </div>
      </div>
    </>
  );
}
export default Grid;
