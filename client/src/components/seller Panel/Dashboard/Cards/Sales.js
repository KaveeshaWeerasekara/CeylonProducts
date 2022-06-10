const Sales = (props) => (
    
        <div className=" py-1 px-6 flex justify-center items-center  ">
      
        <div className="justify-between bg-[#f5eae5] rounded-lg border border-gray-400 mb-6 py-4 px-4 h-56 w-96 ">
                    <div>
                        <h4 className="text-gray-800  font-bold mb-2">Sales(last week)</h4>
                        <div className="py-0 w-full flex items-center justify-between mt-0.1 border-b border-black mb-3 pb-6"></div>
                        {/* <hr className="mb-4 "></hr> */}
                        <p className="text-gray-800  text-sm">table</p> <br></br>
                        <p className="text-gray-800  text-sm">Today</p>
                        <p className="text-gray-800  text-sm">Last 7 days</p>
                        <p className="text-gray-800  text-sm">Last 31 days</p>
                    </div>
                    
                </div>
            </div>
        
);
export default Sales;
