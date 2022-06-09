import React from "react";
import { Link } from "react-router-dom";
import ProductTable from "./ProductTable";

//Card Layout
const Card = ({ title, sCount, image, filterItem }) => {
  return (
    <div>
      <div>
        <br></br>
        <div className=" flex-wrap    w-full   ">
          <div className="w-full  h-40   shadow bg-white dark:bg-gray-800 rounded-t-lg">
            <img className="w-full  relative h-full   shadow bg-white rounded-t-lg" src={image} alt="" />
          </div>
          <div className="w-full  h-24 shadow  bg-[#f07335] rounded-b-lg">
          <p className="text-lg font-bold text-white pt-2 pl-3">
              {title}
            </p>
            <p className="text-base font-light text-white  pr-3 text-right">
              {sCount} Sellers
            </p>
            <p className="text-base font-light text-white  pr-3 text-right">
              Products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
