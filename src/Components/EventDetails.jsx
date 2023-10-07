import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import EventDetailsCard from "./EventDetailsCard";

const EventDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  const events = useLoaderData();
  useEffect(() => {
    const findEvent = events?.find((event) => event.id == id);
    setDetails(findEvent);
    console.log(findEvent);
  }, [id, events]);
  return <div>
    <EventDetailsCard details={details}></EventDetailsCard>
  </div>;
};

export default EventDetails;
