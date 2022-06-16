import Button from "../../Common/Button";

export default function Member() {
  return (
    <div className="grid grid-flow-col grid-cols-2 gap-0">
      <div>
        <div className=" font-medium text-xl">Become a Member</div>
        <br></br>
        <div>
          Discover Bodoni spice through wine club membership, and enjoy limited
          production wines delivered to your door, special benefits when you
          visit the winery and discounts on wines throughout the year. ----
        </div>
      </div>

      <div className="py-4  justify-self-end ">
        <Button name="join now" path="#" />
      </div>
    </div>
  );
}
