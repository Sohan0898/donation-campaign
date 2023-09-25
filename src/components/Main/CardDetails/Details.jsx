const Details = ({ details }) => {
  const { id, picture, title, description, price } = details || {};
  return (
    <div>
      <div>
        <div>
          <img className="w-full h-[650px] rounded-3xl " src={picture} />
          <div className="bg-black  bg-opacity-50 rounded-b-3xl  relative py-7  bottom-[115px]">
            <button className="py-4 px-6 ml-7 rounded    bg-[#FF444A] text-white text-xl font-semibold">
              Donate {price}
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold -mt-20">{title}</h2>
          <p className="mt-6">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
