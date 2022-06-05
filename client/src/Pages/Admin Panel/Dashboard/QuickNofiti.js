import React from "react";

//Expot Recent Update Panel
export default function QuickNofiti() {
    return (
        <>
            <div className="flex items-center justify-center ">
                <div className="md:w-full rounded-md shadow-lg p-5 bg-gray-800 ">
                    <h1 className="pt-2 pb-7 text-gray-100 font-bold text-lg">Recent Updates</h1>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="w-11 h-11 flex items-center justify-center bg-purple-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A78BFA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx={9} cy={19} r={2} />
                                    <circle cx={17} cy={19} r={2} />
                                    <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                                </svg>
                            </div>
                            <p className="text-gray-100 text-sm font-medium pl-3">Order# IDO-214-152</p>
                        </div>
                        <p className="text-sm font-medium text-indigo-500">$145</p>
                    </div>
                    <div className="flex items-center justify-between pt-3">
                        <div className="flex items-center">
                            <div className="w-11 h-11 flex items-center justify-center bg-green-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-2" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2DD4BF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />
                                    <line x1={8} y1={9} x2={16} y2={9} />
                                    <line x1={8} y1={13} x2={14} y2={13} />
                                </svg>
                            </div>
                            <p className="text-gray-100 text-sm font-medium pl-3">
                                New message from <span className="text-blue-500">@Kelly190</span>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-3">
                        <div className="flex items-center">
                            <div className="w-11 h-11 flex items-center justify-center bg-purple-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A78BFA" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <circle cx={9} cy={19} r={2} />
                                    <circle cx={17} cy={19} r={2} />
                                    <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                                </svg>
                            </div>
                            <p className="text-gray-100 text-sm font-medium pl-3">Order# IDO-325-664</p>
                        </div>
                        <p className="text-sm font-medium text-indigo-500">$205</p>
                    </div>
                    <div className="flex items-center justify-between pt-3">
                        <div className="flex items-center">
                            <div className="w-11 h-11 flex items-center justify-center bg-green-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-invoice" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2DD4BF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                    <line x1={9} y1={7} x2={10} y2={7} />
                                    <line x1={9} y1={13} x2={15} y2={13} />
                                    <line x1={13} y1={17} x2={15} y2={17} />
                                </svg>
                            </div>
                            <p className="text-gray-100 text-sm font-medium pl-3">Invoice generated</p>
                        </div>
                        <a href="javascript:void(0)">
                            <p className="text-sm font-medium cursor-pointer text-indigo-500">View</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
