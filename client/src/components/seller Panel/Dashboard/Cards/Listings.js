const Listings = (props) => (
  
    <div className=" py-1 px-6 flex justify-center items-center  ">
      
        <div className="justify-between bg-[#f5eae5] rounded-lg border border-gray-400 mb-6 py-4 px-4 h-56 w-96 ">
          <div>
            <h4 className="text-gray-800  font-bold mb-2">Listings</h4>
            <div className="py-0 w-full flex items-center justify-between mt-0.1 border-b border-black mb-3 pb-6"></div>
            {/* <hr className="mb-3 border-black"></hr> */}
            <a href="/Form
            "><p className=" text-blue-800 font-medium text-sm mb-2.5">Create listing +</p></a>
            {/* <p className="text-gray-800  text-sm">Drafts</p> */}
            <a href="/ProductView
"><p className="text-gray-800  text-sm">Drafts</p></a>
            <a href="/Shop"><p className="text-gray-800  text-sm">Active listings</p></a>
            <p className="text-gray-800  text-sm">With questions</p>
            {/* <p className="text-gray-800  text-sm">With open offers from buyers</p>
            <p className="text-gray-800  text-sm">All auctions</p> */}
            {/* <p className="text-gray-800  text-sm">With reserve met</p> */}
          </div>
          
        </div>
      </div>
    
);
export default Listings;
