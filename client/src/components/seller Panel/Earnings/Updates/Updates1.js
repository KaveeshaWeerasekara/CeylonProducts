import React from "react";
function Updates1() {
  return (
    <>
      {/* Card is full width. Use in 12 col grid for best view. */}
      {/* Card code block start */}
      
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 p-11">


        <div className="bg-[#E3FFE9]  shadow px-8 py-6 flex items-center rounded-tl-[50px] rounded-br-[50px]">
          <div className="ml-6">
            <p className="  text-[#e47740] text-sm tracking-normal font-normal leading-5 mb-1 ">Net Income</p>
            <h3 className="mb-1 leading-5 text-[#C96838]  font-bold text-2xl mx-4 ">$14568.45 </h3>
          </div>
        </div>

        <div className="bg-[#E3FFE9]  shadow px-8 py-6 flex items-center rounded-tl-[50px] rounded-br-[50px]">
          <div className="ml-6">
            <p className=" text-[#e47740] text-sm tracking-normal font-normal leading-5 mb-1">Withdrawn</p>
            <h3 className="mb-1 leading-5 text-[#C96838]  font-bold text-2xl mx-4">$510</h3>
          </div>
        </div>

        <div className="bg-[#E3FFE9] shadow px-8 py-6 flex items-center rounded-tl-[50px] rounded-br-[50px] ">
          <div className="ml-6">
            <p className="text-[#e47740] text-sm tracking-normal font-normal leading-5 mb-1">Pending Clearance</p>
            <h3 className="mb-1 leading-5 text-[#C96838]  font-bold text-2xl mx-4">$121</h3>
          </div>
        </div>

        <div className="bg-[#E3FFE9] shadow px-8 py-6 flex items-center rounded-tl-[50px] rounded-br-[50px]">
          <div className="ml-6">
            <p className="text-[#e47740] text-sm tracking-normal font-normal leading-5 mb-1">Available for </p>
            <h3 className="mb-1 leading-5 text-[#C96838]  font-bold text-2xl mx-4">$98</h3>
          </div>
        </div>
      </div>
    
    </>
  );
}
export default Updates1;
