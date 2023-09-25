import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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
    <div>
      <h1>phone</h1>
    </div>
  );
};

export default CardDetails;
