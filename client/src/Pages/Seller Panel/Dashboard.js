import React from "react";
import Feedbacks from "../../components/seller Panel/Dashboard/Cards/Feedbacks";
import Listings from "../../components/seller Panel/Dashboard/Cards/Listings";
import OrderDetails from "../../components/seller Panel/Dashboard/Cards/OrdersDetails";
import Sales from "../../components/seller Panel/Dashboard/Cards/Sales";
import Task from "../../components/seller Panel/Dashboard/Cards/Task";
import Traffic from "../../components/seller Panel/Dashboard/Cards/Traffic";
import Updates from "../../components/seller Panel/Dashboard/Updates/Updates";

function SDashboard() {
  return (
    <div >
      <div className="pl-12 text-5xl text-[#e47740] 	">Welcome , NAME</div>
      <Updates />
      <div>
       <div className=" grid grid-flow-col grid-rows-2 grid-cols-3 p-4 ">
        <div> <Task /></div>
        <div> <Feedbacks /></div>
        <div> <Sales /></div>
        <div> <Listings /></div>
        <div> <OrderDetails /></div>
        <div> <Traffic /></div>
       </div>
      
      </div>
      
    </div>
  );
}

export default SDashboard;
