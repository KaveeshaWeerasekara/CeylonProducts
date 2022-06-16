import React from "react";
function Updates() {
  return (
    <>
      {/* Card is full width. Use in 12 col grid for best view. */}
      {/* Card code block start */}
      
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 p-11">


        <div className="bg-[#E3FFE9]  shadow px-8 py-6 flex items-center rounded-tl-[50px] rounded-br-[50px]">
          <div className="ml-6">
            <p className="  text-[#e47740] text-sm tracking-normal font-normal leading-5 mb-1 ">Unread Messages</p>
            <h3 className="mb-1 leading-5 text-[#C96838]  font-bold text-2xl mx-4 ">14 </h3>
          </div>
        </div>

        <div className="bg-[#E3FFE9]  shadow px-8 py-6 flex items-center rounded-tl-[50px] rounded-br-[50px]">
          <div className="ml-6">
            <p className=" text-[#e47740] text-sm tracking-normal font-normal leading-5 mb-1">Awaiting Shipment</p>
            <h3 className="mb-1 leading-5 text-[#C96838]  font-bold text-2xl mx-4">5</h3>
          </div>
        </div>

        <div className="bg-[#E3FFE9] shadow px-8 py-6 flex items-center rounded-tl-[50px] rounded-br-[50px] ">
          <div className="ml-6">
            <p className="text-[#e47740] text-sm tracking-normal font-normal leading-5 mb-1">Net Sales(31 days)</p>
            <h3 className="mb-1 leading-5 text-[#C96838]  font-bold text-2xl mx-4">$4121.56</h3>
          </div>
        </div>

        <div className="bg-[#E3FFE9] shadow px-8 py-6 flex items-center rounded-tl-[50px] rounded-br-[50px]">
          <div className="ml-6">
            <p className="text-[#e47740] text-sm tracking-normal font-normal leading-5 mb-1">Seller Status</p>
            <h3 className="mb-1 leading-5 text-[#C96838]  font-bold text-2xl mx-4">Level II</h3>
          </div>
        </div>
      </div>
    
    </>
  );
}
export default Updates;
