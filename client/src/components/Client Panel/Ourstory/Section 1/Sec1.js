import AnimatedSlider from "./Coursel";

export default function Sec1() {
  return (
    <div>
      <div className=" absolute  z-30  left-0 right-0 ml-auto mr-auto text-center pt-[150px]">
        <div className=" font-mono text-gray-100 text-[72px] italic tracking-widest ">
        OUR STORY
        </div>
      </div>
      <div className="  ">
        <AnimatedSlider />
      </div>
    </div>
  );
}
