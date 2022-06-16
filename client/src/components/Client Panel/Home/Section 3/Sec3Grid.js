import TextCard1 from "./TextCard1";
import TextCard2 from "./TextCard2";
import TextCard3 from "./TextCard3";
import TextCard4 from "./TextCard4";
import TextCard5 from "./TextCard5";

const Array = [
  {
    image:
      "https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

export default function Sec3Grid() {
  return (
    <div className=" container">
      <br></br>

      <div className="text-center  ">
        {" "}
        <p className=" font-nomal text-sm pb-2 text-[#c26739]">
          PASSIONATE GROWERS
        </p>
        <p className=" font-bold text-2xl"> Premium Quality </p>
        <p className="">------</p>
      </div>

      <br></br>
      <div className="grid grid-flow-col grid-rows-3 grid-cols-3 gap-x-8">
        <div className="row-start-1 col-start-1 row-span-3 h-[500px] w-full pr-10">
          <img
            className="w-full  relative h-full  "
            src={Array[0].image}
            alt=""
          />
        </div>
        <div className="row-start-1 col-start-2 col-span-1 h-[200px]  ">
          <TextCard1 />
        </div>
        <div className=" row-start-1 col-start-3 col-span-1 h-[200px] ">
          <TextCard2 />
        </div>
        <div className="row-start-2 col-start-2 col-span-1 h-[200px] ">
          <TextCard3 />
        </div>
        <div className="row-start-2 col-start-3 col-span-1 h-[200px]  ">
          <TextCard4 />
        </div>
        <div className="row-start-3 col-start-2 col-span-2 h-[100px]  ">
          <TextCard5 />
        </div>
      </div>
    </div>
  );
}
