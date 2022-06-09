import React from "react";
import QuickNofiti from "./QuickNofiti";
import TopSellers from "./TopSellers";

//Export First Grid
function Grid1() {
    return (
        <>
            <div className="container mx-auto grid  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 ">
            <div className="rounded " >
                <TopSellers />
                </div>
                <div><QuickNofiti /></div>
            </div>
            
        </>
    );
}
export default Grid1;
