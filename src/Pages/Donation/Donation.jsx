import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [doantionCard, setDonationCard] = useState([]);
  const [noFound, setNoFound] = useState(false);

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));

    if (donationItems) {
      setDonationCard(donationItems);
    } else {
      setNoFound("No Donation Yet");
    }
  }, []);

  const handleRemove = () => {
    localStorage.clear();
    setDonationCard([]);
    setNoFound("No Donation Yet");
  };

  return (
    <div>
      {noFound ? (
        <h1 className="h-[60vh] text-3xl font-semibold flex justify-center items-center">
          {noFound}
        </h1>
      ) : (
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 lg:px-20 py-4 my-9 ">
          {DonationCard.length > 0 && (
            <button
              onClick={handleRemove}
              className="btn text-white  normal-case font-semibold bg-[#009444] block mt-2 mb-10 mx-auto"
            >
              Remove Donation
            </button>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
            {isShow
              ? doantionCard.map((details) => (
                  <DonationCard
                    key={details.id}
                    details={details}
                  ></DonationCard>
                ))
              : doantionCard
                  .slice(0, 4)
                  .map((details) => (
                    <DonationCard
                      key={details.id}
                      details={details}
                    ></DonationCard>
                  ))}
          </div>

          <div className="mt-8 text-center">
            {doantionCard.length > 4 && (
              <button
                onClick={() => setIsShow(!isShow)}
                className="btn text-white normal-case font-semibold bg-[#009444]"
              >
                {isShow ? "See Less" : "See All"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Donation;
