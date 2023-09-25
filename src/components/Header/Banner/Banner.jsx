
const Banner = () => {
    return (
        <div>
             <div>
        <div
          className="hero min-h-[60vh] bg-auto"
          style={{
            backgroundImage: "url(https://i.ibb.co/FzQq9MN/Rectangle-4281.png)"
          }}
        >
          <div className="hero-overlay bg-white  bg-opacity-95"></div>
            <div className="form-control">
            <h1 className="text-5xl font-bold text-center mb-10">I Grow By Helping People In Need</h1>
          <div className="input-group justify-center ">
            <input
              type="text"
              placeholder="Search here..."
              className="input input-bordered"
            />
            <button className="btn text-white font-semibold bg-[#FF444A]">
              <h2>Search</h2>
            </button>
          </div>
        </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;