/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const DonationCard = ({ details }) => {
  const { id, picture, title, price,button_bg_color, btn_text_color,category,card_bg_color} = details || {};

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl " style={{ backgroundColor: card_bg_color }}>
        <figure>
          <img className="w-[240px] h-full"
            src={picture} 
          />
        </figure>
        <div className="card-body">
        <div className="card-actions justify-start">
            <button
              className="py-1 px-3 font-medium text-sm rounded-lg"
              style={{
                backgroundColor: button_bg_color,
                color: btn_text_color,
              }}
            >
              {category}
            </button>
          </div>
          <div>
          <h2
            className="card-title text-xl font-semibold"
            style={{ color: btn_text_color }}
          >
            {title}
          </h2>
          <p  className=" py-2 font-semibold" style={{
                color: btn_text_color,
              }}>{price}.00</p>
          </div>
          <div>
           <Link to={`/cardDetails/${id}`}> <button className="btn text-white normal-case text-lg font-semibold" style={{
                backgroundColor: btn_text_color,
                
              }}>View Details</button> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
