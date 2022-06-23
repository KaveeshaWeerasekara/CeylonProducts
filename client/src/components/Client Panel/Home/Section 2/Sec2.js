import Text from "./text";

const Array = [
  {
    image:
      "https://images.unsplash.com/photo-1575549592564-4d50aa43b3af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGNpbm5hbW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1622798337764-259682f03741?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2lubmFtb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535395155851-2088a2a94701?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default function Sec2() {
  return (
    <div className=" container">
      <br></br>
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8 ">
        <div className="row-start-1 col-start-1 row-span-2 h-[550px] w-full pr-10">
          <Text />
        </div>
        <div className="row-start-1 col-start-2 row-span-2 h-[550px]  ">
          <img
            className="w-full  relative h-full  "
            src={Array[0].image}
            alt=""
          />
        </div>
        {/* class name height 275-32/2 */}
        <div className=" row-start-1 col-start-3 col-span-1 h-[259px] ">
          <img
            className="w-full  relative h-full  "
            src={Array[1].image}
            alt=""
          />
        </div>
        <div className="row-start-2 col-start-3 col-span-1 h-[259px] ">
          <img
            className="w-full  relative h-full  "
            src={Array[2].image}
            alt=""
          />
        </div>
      </div>
      <br></br>
    </div>
  );
}
