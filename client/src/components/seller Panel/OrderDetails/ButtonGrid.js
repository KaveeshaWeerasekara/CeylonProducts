import React from "react";

function ButtonGrid() {
  return (
    <div>
      <button className="mx-2 my-2 bg-[#f07335] transition duration-150 ease-in-out hover:bg-[#e48f64] rounded text-white px-6 py-2 text-xs">
        Pending
      </button>
      <button className="mx-2 my-2 bg-[#f07335] transition duration-150 ease-in-out hover:bg-[#e48f64] rounded text-white px-6 py-2 text-xs">
        Shipped
      </button>
      <button className="mx-2 my-2 bg-[#f07335] transition duration-150 ease-in-out hover:bg-[#e48f64] rounded text-white px-6 py-2 text-xs">
        All
      </button>
    </div>
  );
}

export default ButtonGrid;
