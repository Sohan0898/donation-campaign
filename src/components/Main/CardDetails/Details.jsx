/* eslint-disable react/prop-types */
import swal from "sweetalert";


const Details = ({ details }) => {
  const { id, picture, title, description, price } = details || {};

  const handleDonation = () => {
    const addedDonationArray =[];
    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (!donationItems){

        addedDonationArray.push(details);
        localStorage.setItem("donation", JSON.stringify(addedDonationArray));
        swal("Thank You", "Your Donation Added Successfully!", "success")
    }

    else{

        const isExits = donationItems.find((details)=>details.id ==id);
        if(!isExits){
            addedDonationArray.push(...donationItems, details);
            localStorage.setItem("donation", JSON.stringify(addedDonationArray));
            swal("Thank You", "Your Donation Added Successfully!", "success")
            
        }
        else{
            swal("Warning", "You Already Gave Donation!", "error")
        }
    }

    
  };


  return (
    <div>
      <div>
        <div>
          <img className="w-full h-[650px] rounded-3xl " src={picture} />
          <div className="bg-black  bg-opacity-50 rounded-b-3xl  relative py-7  bottom-[115px]">
            <button
              onClick={handleDonation}
              className="py-4 px-6 ml-7 rounded    bg-[#FF444A] text-white text-xl font-semibold"
            >
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
