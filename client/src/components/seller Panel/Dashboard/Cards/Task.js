const Task = (props) => (
  <div className="  py-1 px-6 flex justify-center items-center  ">
    <div className="justify-between bg-[#f5eae5] rounded-lg border border-gray-400 py-4 px-4 h-56 w-96 my-0.5">
      <div>
        <h4 className="text-gray-800  font-bold mb-2 ">Task</h4>
        <div className="py-0 w-full flex items-center justify-between mt-0.1 border-b border-black mb-3 pb-6"></div>
        {/* <hr className="mb-4 "></hr> */}
        <p className="text-gray-800  text-sm">Ship within 24 hours</p>
        <p className="text-gray-800  text-sm">Buyer questions</p>
        <p className="text-gray-800  text-sm">Send offers</p>
        <p className="text-gray-800  text-sm">Awaiting feedback</p>
      </div>
    </div>
  </div>
);
export default Task;
