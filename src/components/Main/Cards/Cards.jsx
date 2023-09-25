/* eslint-disable react/prop-types */
import Card from '../Card/Card';


  
  const Cards = ({cards}) => {

        return (
            <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-20 py-4 my-9 ">
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    cards?.map(card => <Card key={card.id} card={card}></Card>)
                }
              </div>
            </div>
          );
    }

export default Cards;
