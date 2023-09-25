import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [doantionCard, setDonationCard] = useState([]);
  const [noFound, setNoFound] = useState(false);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (donationItems) {
      setDonationCard(donationItems);
    } else {
      setNoFound("No Donation Yet");
    }
  }, []);

  return (
    <div>
      |
      {noFound ? (
        <h1 className="h-[60vh] text-3xl font-semibold flex justify-center items-center">{noFound}</h1>
      ) : (
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-20 py-4 my-9 ">
          <div className="grid grid-cols-2 gap-5 ">
            {doantionCard.map((details) => (
              <DonationCard key={details.id} details={details}></DonationCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
