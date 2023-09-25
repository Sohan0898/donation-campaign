import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "../../components/Main/CardDetails/Details";

const CardDetails = () => {
  const [details, setDetails] = useState({});
  const { id } = useParams();


  const donation = useLoaderData();


  useEffect(() => {
    const findCardDetails = donation?.find((details) => details.id == id);


    setDetails(findCardDetails);
  }, [donation, id]);

  console.log(details);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-20 py-4 my-9 ">
      <Details details={details}></Details>
    </div>
  );
};

export default CardDetails;
