import { Link } from "react-router-dom";
import Slider from "./Slider";

const Header = () => {
  return (
    <div className="mt-3 relative">
      <Slider></Slider>
      <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 md:translate-x-0 lg:translate-y-0 flex flex-col gap-5 items-center">
        <h2 className="text-xl md:text-3xl lg:text-5xl text-center text-white">
          Welcome To The{" "}
          <span className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">
            Ultimate
          </span>{" "}
          Realm of Gaming Events
        </h2>
        <Link to={"/login"}><button className="btn text-center w-max lg:text-lg bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-800 text-white border-none">
          Become a Gamer
        </button></Link>
      </div>
    </div>
  );
};

export default Header;
