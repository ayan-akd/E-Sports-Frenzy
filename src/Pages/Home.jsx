import { useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import Events from "../Components/Events";

const Home = () => {
    const events = useLoaderData();
    return (
        <div className="max-w-screen-xl mx-auto">
            <Header></Header>
            <Events events={events}></Events>
        </div>
    );
};

export default Home;