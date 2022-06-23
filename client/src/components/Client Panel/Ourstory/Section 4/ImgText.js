const Array = [
  {
    image: "https://www.halpetea.com/wp-content/uploads/2019/12/factorytour-header-mobile-2.jpg",
  },
];

export default function ImgText() {
  return (
    <div>
      <div className="  static filter-none">
        <div className=" absolute text-center left-0 right-0 ml-auto mr-auto py-[200px] text-white ">
          {" "}
          <p className=" font-bold text-white text-lg">VISIT SRI LANKA</p>
          <br></br>
          <p className="text-white font-bold text-lg">
            Enjoy an Array of Culture Experiences
          </p>
          <br></br>
          <p className="">
            Sri Lanka is well known for the variety and quality of spices it provides. From Ceylon Cinnamon to cardamom, pepper,
             <br></br>cloves, nutmeg, and various others, the spice exports of Sri Lanka are at an all-time high.{" "}
          </p>
          <p>
          Sri Lanka is not only a breathtakingly beautiful land, and it has a rich cultural heritage that manifests itself in its unique arts and crafts.
          </p>
          <p>.</p>
        </div>
        <div className="w-full h-[600px] static">
          <img className="w-full  h-full " src={Array[0].image} alt="" />
        </div>
      </div>
    </div>
  );
}
