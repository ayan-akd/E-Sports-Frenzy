import { Link } from "react-router-dom";


const Login = () => {
    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Welcome Back, <span className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">GAMER</span></h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                    Do not have an account? <Link to={"/register"}><span className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">Sign up</span></Link>
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

export default Login;
