import React from "react";

//Export Money Withdraw Buttons
function Withdraw() {
  return (
    <div>
      <h1 className="pt-2 pb-3 text-black-500  font-bold text-lg text-left">
        Withdraw Money
      </h1>

      <div className="flex justify-center pt-3 ">
        <a
          className=" mr-0  bg-green-800  transition duration-150 ease-in-out hover:bg-green-700 rounded text-white px-3 md:px-6 py-2 text-sm w-full  text-center"
          href="#"
        >
          Paypal Account
        </a>
      </div>

      <div className="flex justify-center pt-3">
        <a
          className=" mr-0  bg-green-800  transition duration-150 ease-in-out hover:bg-green-700 rounded text-white px-3 md:px-6 py-2 text-sm w-full  text-center"
          href="#"
        >
          Bank Transfer
        </a>
      </div>

      <div className="flex justify-center pt-3">
        <a
          className=" mr-0  bg-green-800  transition duration-150 ease-in-out hover:bg-green-700 rounded text-white px-3 md:px-6 py-2 text-sm w-full  text-center"
          href="#"
        >
          Link a Card
        </a>
      </div>
    </div>
  );
}

export default Withdraw;
