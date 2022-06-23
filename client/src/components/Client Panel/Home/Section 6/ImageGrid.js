const Array = [
  {
    image:
      "https://images.unsplash.com/photo-1547825407-2d060104b7f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRlYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1536898020039-ddcbb58ab3c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVkJTIwcG90c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1602943543714-cf535b048440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    image:
      "https://media.istockphoto.com/photos/herbs-and-spices-in-bowels-picture-id1297420369?b=1&k=20&m=1297420369&s=170667a&w=0&h=4g6W-cnBEVeEaKG_4-dTOs6s86Q-XsrmIQbtErEi8PY=",
  },
];

export default function ImageGrid() {
  return (
    <div>
      <br></br>
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-0">
        <div className="row-start-1 col-start-1 col-span-1 h-[300px] w-full ">
          <img
            className="w-full  relative h-full  "
            src={Array[0].image}
            alt=""
          />
        </div>
        <div className="row-start-1 col-start-2 col-span-1 h-[600px]  row-span-2 ">
          <img
            className="w-full  relative h-full  "
            src={Array[1].image}
            alt=""
          />
        </div>
        <div className=" row-start-1 col-start-3 col-span-1 h-[300px] w-auto ">
          <img
            className="w-full  relative h-full  "
            src={Array[2].image}
            alt=""
          />
        </div>
        <div className="row-start-2 col-start-1 col-span-1 h-[300px] w-auto ">
          <img
            className="w-full  relative h-full  "
            src={Array[3].image}
            alt=""
          />
        </div>
        <div className="row-start-2 col-start-3 col-span-1 h-[300px] w-auto ">
          <img
            className="w-full  relative h-full  "
            src={Array[4].image}
            alt=""
          />
        </div>
      </div>
      <br></br>
    </div>
  );
}
