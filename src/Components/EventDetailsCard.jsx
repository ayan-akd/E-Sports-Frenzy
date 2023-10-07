import { Link } from "react-router-dom";

const EventDetailsCard = ({ details }) => {
  const { name, description, image , price_for_organization } = details || {};
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="my-20 px-4">
      <div className="relative">
        <img className="object-cover w-[1280px]" src={image} alt="" />
        <div className="absolute z-10 bottom-0 w-full h-20 md:h-20 lg:h-24 bg-black bg-opacity-50"></div>
        <button className="absolute border-0
        bottom-4 left-6 lg:bottom-5 lg:left-9 btn bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-800 text-white border-none rounded z-20 text-white">
            Organize for ${price_for_organization}
        </button>
      </div>
      <div>
        <h1 className="text-4xl font-bold mt-14">{name}</h1>
        <p className="mt-6 text-justify">{description}</p>
        <Link to={"/"}><button className="btn mt-6 lg:text-lg bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-800 text-white border-none">
          Back to Home
        </button></Link>
      </div>
    </div>
    </div>
  );
};

export default EventDetailsCard;
