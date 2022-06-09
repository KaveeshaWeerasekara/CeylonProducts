import React from "react";

//Import Dashboard Components
import TilesDash from "./TilesDash";
import TopSelling from "./TopSelling";
import Grid1 from "./Grid1";
import Grid2 from "./Grid2";

//Export Dashboard
export default function Dashboard() {
  return (
    <div className="container mx-auto px-4">
      <br></br>
      <h1 className="font-bold mt-3 text-3xl italic">
        Hi Welcome Chinthaka...
      </h1>
      <br></br>
      <TilesDash />
      <TopSelling />
      <Grid1 />
      <Grid2 />
      <br></br>
    </div>
  );
}
