import React from "react";

//Export Tiles
function Tiles() {
  return (
    <>
      {/* Card is full width. Use in 12 col grid for best view. */}
      {/* Card code block start */}
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div className="bg-gray-800  shadow px-8 py-6 flex items-center rounded-tr-m  rounded-bl-m rounded-tl-3xl rounded-br-3xl">
          <div className="p-4 bg-gray-700 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-coin"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
              <path d="M12 6v2m0 8v2" />
            </svg>
          </div>
          <div className="ml-6">
            <h3 className="mb-1 leading-5 text-gray-100 font-bold text-2xl">
              $2,330
            </h3>
            <p className="text-gray-400 text-sm tracking-normal font-normal leading-5">
              Net Income
            </p>
          </div>
        </div>
        <div className="bg-gray-800  shadow px-8 py-6 flex items-center rounded-tr-m  rounded-bl-m rounded-tl-3xl rounded-br-3xl">
          <div className="p-4 bg-gray-700 rounded text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-zoom-money"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="10" cy="10" r="7" />
              <path d="M21 21l-6 -6" />
              <path d="M12 7h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
              <path d="M10 13v1m0 -8v1" />
            </svg>
          </div>
          <div className="ml-6">
            <h3 className="mb-1 leading-5 text-gray-100 font-bold text-2xl">
              $500
            </h3>
            <p className="text-gray-400 text-sm tracking-normal font-normal leading-5">
              Profit Earned
            </p>
          </div>
        </div>
        <div className="bg-gray-800 shadow px-8 py-6 flex items-center  rounded-tr-m  rounded-bl-m rounded-tl-3xl rounded-br-3xl">
          <div className="p-4 bg-gray-700 rounded text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-businessplan"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <ellipse cx="16" cy="6" rx="5" ry="3" />
              <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
              <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
              <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
              <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
              <path d="M5 15v1m0 -8v1" />
            </svg>
          </div>
          <div className="ml-6">
            <h3 className="mb-1 leading-5 text-gray-100 font-bold text-2xl">
              $523
            </h3>
            <p className="text-gray-400 text-sm tracking-normal font-normal leading-5">
              Pending Clearance
            </p>
          </div>
        </div>
        <div className="bg-gray-800 shadow px-8 py-6 flex items-center rounded-tr-m  rounded-bl-m rounded-tl-3xl rounded-br-3xl">
          <div className="p-4 bg-gray-700 rounded text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-stairs-down"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 20h4v-4h4v-4h4v-4h4" />
              <path d="M11 4l-7 7v-4m4 4h-4" />
            </svg>
          </div>
          <div className="ml-6 ">
            <h3 className="mb-1 leading-5 text-gray-100 font-bold text-2xl">
              -$245
            </h3>
            <p className="text-gray-400 text-sm tracking-normal font-normal leading-5">
              Cancellations
            </p>
          </div>
        </div>
      </div>
      {/* Card code block end */}
    </>
  );
}
export default Tiles;
