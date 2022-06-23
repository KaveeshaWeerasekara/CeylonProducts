import React, { useState } from "react";

export default function Last() {
    return (
        <div className=" 2xl:container flex justify-center items-center w-full 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="w-80 md:w-auto grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6">
                <div className="relative group">
                    <img className="lg:block hidden w-full" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F06%2F12%2Fgame-changers-superior-spices-VT-MAG0721.jpg&q=60" alt="Spices" />
                    
                    <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                    <div className=" absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8">
                        <p className=" font-semibold text-2xl leading-6 text-white">Women</p>
                    </div>
                </div>
                <div className=" lg:px-6 lg:py-0 md:py-16 md:px-24 py-16 px-6 flex flex-col justify-center items-center text-center bg-gray-300">
                    <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-10 leading-9 text-gray-800 lg:w-full md:w-7/12 w-full">Shop your Favourite Things</h2>
                    <p className=" font-medium text-base leading-6 text-gray-600 mt-4 lg:w-full md:w-7/12 w-full">We offer a huge colletion of goods & the best service for our customers</p>
                   <a href="/contactUs" >
                   <button
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-orange-700 text-white text-base leading-4 bg-orange-800 lg:px-10 py-4 lg:w-auto w-72 mt-16" >Contact Us
                    </button>
                   </a> 
                </div>
                <div className="relative group">
                    <img className="lg:block hidden w-full" src="https://img.freepik.com/free-photo/handmade-bracelets-made-leather-thread-with-inlays-various-colors_529727-330.jpg?w=2000" alt="Mask" />
                    <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
                    <div className=" absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8">
                        <p className=" font-semibold text-2xl leading-6 text-white">Men</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

