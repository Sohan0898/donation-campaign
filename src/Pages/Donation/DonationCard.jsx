
const DonationCard = ({details}) => {
    const { id, picture, title, description, price } = details || {};

    return (
        <div>
            <div
        className="card card-compact bg-base-100 shadow-xl"
        
      >
        <figure>
          <img className=" w-full" src={picture} alt={title} />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-start">
            <button
              className="py-1 px-3 font-medium text-sm rounded-lg"
              
            >
            
            </button>
          </div>
          <h2
            className="card-title text-xl font-semibold"
            
          >
            {title}
          </h2>
          
        </div>
      </div>
        </div>
    );
};

export default DonationCard;