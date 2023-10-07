import { useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import Events from "../Components/Events";
import RecentEvents from "../Components/RecentEvents";
import Streaming from "../Components/Streaming";

const Home = () => {
    const events = useLoaderData();
    return (
        <div className="max-w-screen-xl mx-auto">
            <Header></Header>
            <Events events={events}></Events>
            <RecentEvents></RecentEvents>
            <Streaming></Streaming>
        </div>
    );
};

export default Home;