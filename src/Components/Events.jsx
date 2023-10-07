/* eslint-disable react/prop-types */
import EventCard from "./EventCard";

const Events = ({ events }) => {
  return (
    <div>
      <h1 data-aos="zoom-in-up"
        data-aos-duration="2000" className="text-7xl text-center italic mt-12">
        All{" "}
        <span className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">
          Events
        </span>
      </h1>
      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        className="grid lg:grid-cols-2 gap-6 my-10"
      >
        {events.map((event) => (
          <EventCard key={event.id} events={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default Events;
