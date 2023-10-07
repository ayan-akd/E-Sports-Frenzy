import { useLoaderData } from "react-router-dom";
import BlogCard from "../Components/BlogCard";

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className="max-w-screen-xl mx-auto mb-16 p-4">
            <div className="my-16">
            <h2 className="text-5xl">Gaming Event <span className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">Blogs</span></h2>
            <p className="text-xl mt-5">Explore our latest gaming event blogs for insider tips, industry news, and exclusive interviews with top gamers. Stay up-to-date with the latest trends and developments in the gaming world by checking out our blog section today!</p>
            </div>

            <h1 className="text-4xl"><span className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">Category </span>: E-Sports</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-6">
            {
                blogs.map(blog=> <BlogCard key={blog.id} blog={blog}></BlogCard>)
            }
            </div>
        </div>
    );
};

export default Blogs;
