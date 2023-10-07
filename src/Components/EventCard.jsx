/* eslint-disable react/prop-types */
const EventCard = ({ events }) => {
  const { name, image, short_description,price_for_organization } = events;
  return (
    <div className="card lg:card-side">
      <figure>
        <img
          src={image}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{short_description.length > 100 ? <p>{short_description.slice(0,75)}.........</p> : short_description }</p>
        <div className="card-actions justify-end items-center">
            <p className="text-lg">Cost: ${price_for_organization}</p>
          <button className="btn bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-800 text-white border-none">Show Details</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
