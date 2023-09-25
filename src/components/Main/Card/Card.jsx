/* eslint-disable react/prop-types */

function Card({ data }) {
    return (
      <div>
        <div
          className="card card-compact bg-base-100 shadow-xl"
          style={{ backgroundColor: data.card_bg_color }}
        >
          <figure>
            <img
              className=" w-full"
              src={data.picture}
              alt={data.title}
            />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-start">
              <button
                className="py-1 px-3 font-medium text-sm rounded-lg"
                style={{
                  backgroundColor: data.button_bg_color,
                  color: data.btn_text_color,
                }}
              >
                {data.category}
              </button>
            </div>
            <h2
              className="card-title text-xl font-semibold"
              style={{ color: data.btn_text_color }}
            >
              {data.title}
            </h2>
            <p className=" h-11" style={{ color: data.btn_text_color }}>
              {data.description}
            </p>
            <p className="font-semibold" style={{ color: data.btn_text_color }}>Price: {data.price}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;
  