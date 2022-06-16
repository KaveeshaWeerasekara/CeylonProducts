const Array = [
  {
    image: "https://live.staticflickr.com/65535/52058683352_e6bbb0a368_b.jpg",
  },
];

export default function ImgText() {
  return (
    <div>
      <div className="  static filter-none">
        <div className=" absolute text-center left-0 right-0 ml-auto mr-auto py-[100px] text-white ">
          {" "}
          <p className=" font-light">VISIT THE ESTATE</p>
          <br></br>
          <p className="text-white font-bold text-lg">
            Enjoy an Array of Tasting Experiences
          </p>
          <br></br>
          <p className="">
            Named a Top 100 Winery in 2019 & 2020 by Wine & Spirits Magazine, we{" "}
          </p>
          <p>
            invite you to visit our Russian River winery in person or virtually
          </p>
          <p>and immerse yourself in a true sense of place.</p>
        </div>
        <div className="w-full h-[500px] static">
          <img className="w-full  h-full " src={Array[0].image} alt="" />
        </div>
      </div>
    </div>
  );
}
