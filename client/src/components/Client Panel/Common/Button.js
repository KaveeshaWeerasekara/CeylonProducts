import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Button =({name,path})  => {
  return (
    <div className="flex">
      <Link
        to={path}
        className="transition duration-150 ease-in-out  hover:bg-[#c26739] hover:text-white  text-gray-900 px-5  py-3 text-xl border-4 border-[#c25c2a] rounded-none uppercase"
      >
        {name}
        <ArrowForwardIcon className=" mx-3  mb-0.5" />
      </Link>
    </div>
  );
}
export default Button;