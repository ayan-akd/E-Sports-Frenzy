const Streaming = () => {
  return (
    <div className="max-w-screen-xl mx-auto mb-16 p-3">
      <div data-aos="fade-up" data-aos-duration="1500" className="text-center flex flex-col items-center gap-3">
        <p className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600 text-xl italic">
          RATING & STATISTIC
        </p>
        <h1 className="text-5xl">Events & Streaming Rate</h1>
        <hr className="bg-red-500 mt-2" width="200px;"></hr>
      </div>
      <div data-aos="fade-down" data-aos-duration="1500" className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-6">
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-8xl font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">4.8</h1>
            <p className="text-xl mt-2">Rating Published</p>
        </div>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-8xl font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">150+</h1>
            <p className="text-xl mt-2">Games Organized</p>
        </div>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-8xl font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">10B</h1>
            <p className="text-xl mt-2">Money Views Reach</p>
        </div>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-8xl font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">10K</h1>
            <p className="text-xl mt-2">Community Members</p>
        </div>
      </div>
      <div className="mt-10">
        <h1 data-aos="fade-up" data-aos-duration="1500" className="text-5xl text-center italic ">Watch <span className="font-extrabold bg-clip-text text-transparent bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-500 to-red-600">Live</span></h1>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <iframe className="w-full h-[300px] md:h-[500px] mt-10" src="https://www.youtube.com/embed/Ng6nflV3Vxw?si=Twl-2Efh31hXjcik" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Streaming;
