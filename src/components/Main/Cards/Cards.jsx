import { useState, useEffect } from 'react';
import Card from '../Card/Card';

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/donation.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-20 py-4 my-9 ">
      <div className=" grid grid-cols-4 gap-5">
        {data.map((item) => (
          <Card key={data.id} data={item}></Card>
        ))}
      </div>
    </div>
  );
}

export default Cards;
