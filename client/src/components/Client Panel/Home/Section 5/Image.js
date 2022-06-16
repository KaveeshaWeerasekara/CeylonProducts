const Array = [
  {
    image:
      "https://www.ubuy.com.lk/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFubkZoWjBlVFMuX0FDX1NMMTUwMF8uanBn.jpg",
  }
];

export default function Image(){
    return(
        <div className=" h-[500px] w-full ">
        <img className="w-full  relative h-full  " src={Array[0].image} alt="" />
      </div>
    )
}