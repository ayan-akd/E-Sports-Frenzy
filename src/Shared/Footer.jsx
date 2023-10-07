import {
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-neutral">
      <footer data-aos="fade-up" data-aos-duration="2000" className="footer p-10 text-neutral-content max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <aside className="flex items-center gap-6">
          <img className="w-14" src="/image_49.png" alt="" />
          <p className="text-xl lg:text-3xl">
            E-Sports{" "}
            <span className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">
              Frenzy
            </span>
            <br />
            Providing reliable E-Sports Event Since 2005
          </p>
        </aside>
        <nav className="flex flex-col items-center">
          <header className="text-2xl lg:text-4xl mb-1 lg:mb-5">
            Social{" "}
            <span className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">
              Links
            </span>
          </header>
          <div className="grid grid-flow-col gap-4 text-3xl text-red-500">
            <a>
              <FaFacebook></FaFacebook>
            </a>
            <a>
              <FaTwitter></FaTwitter>
            </a>
            <a>
              <FaTwitch></FaTwitch>
            </a>
            <a>
              <FaInstagram></FaInstagram>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
