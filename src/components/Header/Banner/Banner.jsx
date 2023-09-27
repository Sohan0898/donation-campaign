/* eslint-disable react/prop-types */

const Banner = ({ setSearchCategory, handleSearch }) => {
  const handleChange = (e) => {
    setSearchCategory(e.target.value);
  };

  return (
    <div>
      <div>
        <div
          className="hero min-h-[50vh] bg-cover"
          style={{
            backgroundImage: "url(https://i.ibb.co/FzQq9MN/Rectangle-4281.png)",
          }}
        >
          <div className="hero-overlay bg-white  bg-opacity-95"></div>
          <div className="form-control">
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
              I Grow By Helping People In Need
            </h1>
            <div className="input-group justify-center ">
              <input
                type="text"
                placeholder="Search here..."
                className="input input-bordered"
                onChange={handleChange}
              />
              <button
                onClick={handleSearch}
                className="btn text-white font-semibold bg-[#FF444A]"
              >
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
