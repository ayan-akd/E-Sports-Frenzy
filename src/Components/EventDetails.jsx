import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import EventDetailsCard from "./EventDetailsCard";

const EventDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  const intId = parseInt(id);
  const events = useLoaderData();
  useEffect(() => {
    const findEvent = events?.find((event) => event.id === intId);
    setDetails(findEvent);
  }, [id, events]);
  return <div>
    <EventDetailsCard details={details}></EventDetailsCard>
  </div>;
};

export default EventDetails;
