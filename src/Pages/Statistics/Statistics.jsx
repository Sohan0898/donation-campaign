import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const cards = useLoaderData();

  const getYourDonation = () => {
    const donationItems = JSON.parse(localStorage.getItem("donation"));
    return donationItems ? donationItems.length : 0;
  };

  // const getTotalDonation = () => {
  //
  //     const total = cards.reduce((accumulator, donation) => {
  //       const price = parseFloat(donation.price.replace("$", "").replace(",", ""));
  //       return accumulator + price;
  //     }, 0);
  //     return total.toFixed(2);
  //   };

  const getTotalDonation = 12;
  const yourDonation = (getYourDonation() / getTotalDonation) * 100;
  console.log(yourDonation);

  const data = [
    { name: "Total Donation", value: getTotalDonation },
    { name: "Your Donation", value: yourDonation },
  ];

  const colors = ["#00C49F", "#FF444A"];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        fontSize={16}
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div>
      <div>
        {
          <ResponsiveContainer width="100%" height={600}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={200}
                fill="#8884d8"
                dataKey="value"
                labelLine={false}
                label={renderCustomizedLabel}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        }
      </div>
      <div className="flex justify-center gap-12 items-center">
        <div className="flex gap-4 items-center">
          <p>Your Donation</p>
          <div className=" w-20 h-3 rounded bg-[#FF444A]"></div>
        </div>
        <div className="flex gap-4 items-center">
          <p>Total Donation</p>
          <div className=" w-20 h-3 rounded  bg-[#00C49F]"></div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
