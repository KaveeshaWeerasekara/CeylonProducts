import React from "react";
function Sec3() {
    return (
        <>
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className="flex flex-col-reverse lg:flex-row w-full bg-white dark:bg-gray-800 shadow rounded pb-4">
                <div className="w-full lg:w-1/2">
                    <div className=" pt-4 lg:pt-6 pb-4 lg:pb-6 pl-4 lg:pl-6 pr-4 lg:pr-6">
                        <div className="   items-center lg:items-start flex-row-reverse lg:flex-col">
                            <h4 className="font-bold text-2xl text-center text-orange-700 dark:text-orange-600 tracking-normal leading-4">Ceylon Products</h4>
                            <h4 className="text-center lg:mt-3 text-gray-600 dark:text-gray-400 text-base font-normal">About Us</h4>
                        </div>
                        <h2 className="text-gray-800 dark:text-gray-400 mt-3 mb-2 tracking-normal text-xl lg:text-2xl font-bold ">What is this?</h2>
                        <p className="mb-6 font-normal text-gray-900 dark:text-gray-600 text-sm tracking-normal w-11/12  text-justify ">We provide is an Online Selling and Buying System that software to handle the process of selling Sri Lankan indigenous products to mainly foreign customers via direct communication between sellers and buyers, through this platform local sellers and foreign customers can directly share their ideas, sellers can create their own blog posts and they can share their knowledge with each other, capable of publishing, buying, customizing products, and requesting, reviewing the products likewise with more other features. However, when we conducted a literature survey, we found out that there are some software products that provide different solutions to a similar problem that we are addressing here. We found different strengths and weaknesses in each such software, but none of them exactly provide all of the features that we provide here from our solution to meet the company’s requirements.{" "}</p>
                        <div className="flex lg:items-center items-start flex-col lg:flex-row">
                            
                           
                        </div>
                    </div>
                    
                </div>
                <div className="relative w-full h-64 lg:h-auto lg:w-1/2 rounded-t lg:rounded-t-none lg:rounded-r inline-block">
                    <img className="w-full h-full absolute inset-0 object-cover rounded-t lg:rounded-r lg:rounded-t-none" src="https://i0.wp.com/ceylonartshop.com/wp-content/uploads/2020/04/masks-2.jpg" alt="banner" />
                </div>

                
            </div>
            {/* Card code block end */}
        </>
    );
}
export default Sec3;
