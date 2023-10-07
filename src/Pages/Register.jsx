import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { BiLogoGoogle } from "react-icons/bi";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { googleLogin, createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    // validation
    if (password.length < 6) {
      toast("Password must be at least 6 characters", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast("Password must contain at least one capital letter", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    } else if (!/[!@#$%^&*()_+]/.test(password)) {
      toast("Password must contain at least one special characters", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        navigate(location?.state ? location.state : "/");
        toast("Registered successfully", {
          icon: "✅",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        toast(error.message, {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast("Registered successfully", {
          icon: "✅",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        toast(error.message, {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold">
              Be A{" "}
              <span className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">
                GAMER
              </span>
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name....."
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url....."
                  name="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email....."
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password....."
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p className="label-text-alt mt-3 text-xl">
                    Already have an account?{" "}
                    <Link to={"/login"}>
                      <span className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">
                        Sign in
                      </span>
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6 space-y-5">
                <button className="btn bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-800 text-white border-none">
                  Register
                </button>
                <p className="text-center">Or</p>
              </div>
            </form>
            <div className="flex items-center justify-center mb-5 px-8">
              <button
                onClick={handleGoogleLogin}
                className="btn w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-800 text-white border-none"
              >
                <BiLogoGoogle></BiLogoGoogle>Register with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
