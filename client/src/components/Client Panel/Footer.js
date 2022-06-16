import React from "react";
import { Link} from "react-router-dom";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

import img from "../../assets/CeylonLogo.jpeg"

function Footer() {
    return (
        <>
            <div className=" bg-linear-pink-invert pb-12 bg-[#262523]">
                <div className="mx-auto container pt-5 flex flex-col items-center justify-center">
                    <div>
                    <Link to="/Home">
                  <img
                    className="hidden lg:block h-24 w-auto"             
                    src={img}
                    alt="Ceyloan Products"
                  />
                  </Link>
                    </div>
                    <div className="flex flex-col items-center  pt-3 text-white">
                        <h1 className="text-2xl font-black">CONTACT INFO</h1>
                        <div className=" items-center mt-5  text-base text-color text-center">
                            <p className=" pb-2 cursor-pointer">21 Taltarni Road, TOTTINGTON, Victoria 3478</p>
                            <p className=" pb-3 cursor-pointer font-semibold"> (03) 5333 5036</p>
                            <p className=" pb-2 cursor-pointer text-[#f07335]">Ceyloneproducts@gmail.com</p>
                        </div>
                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className=" mr-6 cursor-pointer pt-4 py-0">About</li>
                                <li className=" mr-6 cursor-pointer pt-4 py-0">Features</li>
                                <li className=" mr-6 cursor-pointer pt-4 py-0">Terms & Conditions</li>
                                <li className=" mr-6 cursor-pointer pt-4 py-0">Help</li>
                                <li className="cursor-pointer pt-4 lg:py-0">Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l">
                            <p> © 2022 Ceylon Products, LLC. All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />
                    <div className="flex justify-between items-center pt-12 text-white">
                        <div className="mr-4">
                            <h1 className="text-2xl font-black">FOLLOW US</h1>
                        </div>
                        <div className="pb-1 ">
                            <FacebookIcon className="mr-2"/>
                            <InstagramIcon className="mr-2"/>
                            <TwitterIcon className="mr-2"/>
                            <PinterestIcon className="mr-2"/>
                            <YouTubeIcon className="mr-2"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
