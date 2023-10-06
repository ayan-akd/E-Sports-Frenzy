import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className=" p-8 rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-semibold">404 - Not Found</h1>
        <p className="mt-4">The page you are looking for does not exist.</p>
        <Link to={"/"}><a className="mt-8 inline-block px-4 py-2 bg-red-500 text-white border-none">Go Back Home</a></Link>
      </div>
    </div>
  );
};

export default NotFound;
