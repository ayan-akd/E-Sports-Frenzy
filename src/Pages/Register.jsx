import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);
    }

    return (
        <div className="max-w-screen-xl mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Welcome Back, <span className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">GAMER</span></h1>
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
                    Already have an account? <Link to={"/login"}><span className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">Sign in</span></Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-800 text-white border-none">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;