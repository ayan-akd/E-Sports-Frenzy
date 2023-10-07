const RecentEvents = () => {
  return (
    <div className="mb-12 max-w-screen-xl mx-auto">
      <h1
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className="text-7xl text-center italic"
      >
        Recent{" "}
        <span className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">
          Events
        </span>
      </h1>
      <div className="grid md:grid-cols-2 items-center justify-center gap-10">
        {/* card 1 */}
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="card h-80"
        >
          <div className="card-body">
            <h2 className="card-title text-2xl font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">
              Valorant
            </h2>
            <p>29 August 2023 | 07.00 PM</p>
            <div className="flex items-center justify-center gap-8 mt-5">
              <img className="w-16" src="/images/NaVi_logo.svg" alt="" />

              <div className="flex justify-center gap-1 text-xl">
                <h2 className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">
                  3
                </h2>
                <h2>VS</h2>
                <h2>2</h2>
              </div>
              <img className="w-16" src="/images/TSM_Logo.svg" alt="" />
            </div>
            <button className="btn mt-5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-800 text-white border-none">
              Watch Now
            </button>
          </div>
        </div>
        {/* card 2 */}
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="card h-80"
        >
          <div className="card-body">
            <h2 className="card-title text-2xl font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">
              Rainbow Six Siege
            </h2>
            <p>25 August 2023 | 07.00 PM</p>
            <div className="flex items-center justify-center gap-8 mt-5">
              <img className="w-16" src="/images/TSM_Logo.svg" alt="" />

              <div className="flex justify-center gap-1 text-xl">
                <h2 className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">
                  3
                </h2>
                <h2>VS</h2>
                <h2>1</h2>
              </div>
              <img className="w-16" src="/images/G2.png" alt="" />
            </div>
            <button className="btn mt-5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-800 text-white border-none">
              Watch Now
            </button>
          </div>
        </div>
        {/* card 3 */}
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="card h-80"
        >
          <div className="card-body">
            <h2 className="card-title text-2xl font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">
              Dota 2
            </h2>
            <p>30 August 2023 | 07.00 PM</p>
            <div className="flex items-center justify-center gap-8 mt-5">
              <img className="w-16" src="/images/team-secret-logo.svg" alt="" />

              <div className="flex justify-center gap-1 text-xl">
                <h2>3</h2>
                <h2>VS</h2>
                <h2 className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">
                  5
                </h2>
              </div>
              <img className="w-16" src="/images/team-liquid.svg" alt="" />
            </div>
            <button className="btn mt-5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-800 text-white border-none">
              Watch Now
            </button>
          </div>
        </div>
        {/* card 4 */}
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="card h-80"
        >
          <div className="card-body">
            <h2 className="card-title text-2xl font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">
              CS:GO
            </h2>
            <p>2 September 2023 | 07.00 PM</p>
            <div className="flex items-center justify-center gap-8 mt-5">
              <img className="w-16" src="/images/G2.png" alt="" />

              <div className="flex justify-center gap-1 text-xl">
                <h2 className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">
                  5
                </h2>
                <h2>VS</h2>
                <h2>4</h2>
              </div>
              <img className="w-16" src="/images/team-secret-logo.svg" alt="" />
            </div>
            <button className="btn mt-5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-800 text-white border-none">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEvents;
