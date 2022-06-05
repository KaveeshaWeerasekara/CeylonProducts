import React from "react";
import SellingRate from "./SellingRate";
import Trafic from "./Trafic";

//Export Second Grid
function Grid2() {
  return (
    <>
      <div className="container mx-auto grid grid-cols-3 pt-6 gap-8">
        <div
          className="rounded 
         col-span-3"
        >
          <SellingRate />
        </div>
        {/* <div className="rounded border-gray-700 border-dashed border-2 h-24">
          <Trafic />
        </div> */}
      </div>
    </>
  );
}
export default Grid2;
