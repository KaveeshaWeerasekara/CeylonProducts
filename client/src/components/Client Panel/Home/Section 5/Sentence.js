//Import Icons
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SpaIcon from "@mui/icons-material/Spa";
import BrunchDiningIcon from "@mui/icons-material/BrunchDining";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

export default function Sentence() {
  return (
    <div>
      <div className="   font-medium py-4 text-xl">
        <ShoppingBagIcon className="text-[#c26739] mr-5 mb-2" />
        Spices to season your life - spice up things a little
      </div>
      <div className=" font-medium text-xl py-4">
        <SpaIcon className="text-[#c26739] mr-5 mb-2" />
        Perfect blend of herbs{" "}
      </div>
      <div className=" font-medium text-xl py-4">
        <BrunchDiningIcon className="text-[#c26739] mr-5 mb-2" />
        Tickle your taste buds{" "}
      </div>
      <div className=" font-medium text-xl py-4">
        <AirplanemodeActiveIcon className="text-[#c26739] mr-5 mb-2" />
        Flavors of Sri lanka{" "}
      </div>
    </div>
  );
}
