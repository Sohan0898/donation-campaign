import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ card }) => {
  const {
    id,
    card_bg_color,
    picture,
    title,
    button_bg_color,
    btn_text_color,
    category,
    
  } = card || {};

  return (

    <div>
      <Link to={`/cardDetails/${id}`}>
      <div
        className="card card-compact bg-base-100 shadow-xl"
        style={{ backgroundColor: card_bg_color }}
      >
        <figure>
          <img className=" w-full" src={picture} alt={title} />
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
          <h2
            className="card-title text-xl font-semibold"
            style={{ color: btn_text_color }}
          >
            {title}
          </h2>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
