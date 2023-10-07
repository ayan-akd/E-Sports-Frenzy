import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600 mr-1" : "mr-1"
              } to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600 mr-1" : "mr-1"
              } to={"/gallery"}>Gallery</NavLink>
      </li>
      
    </>
  );
  return (
    <div data-aos="fade-down" data-aos-duration="2000" className="navbar bg-base-100 max-w-screen-xl mx-auto p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="normal-case text-lg md:text-3xl font-bold">
          E-Sports{" "}
          <span className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">
            Frenzy
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <Link to={"/login"}><button className="btn lg:text-lg bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-800 text-white border-none">
          Login
        </button></Link>
      </div>
    </div>
  );
};

export default Navbar;
