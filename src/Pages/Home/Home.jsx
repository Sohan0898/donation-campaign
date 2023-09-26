import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Cards from "../../components/Main/Cards/Cards";
import { useState } from "react";

const Home = () => {
  const cards = useLoaderData();
  const [searchCategory, setSearchCategory] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);

  const handleSearch = () => {
    // Filter the cards based on the entered category
    const newFilteredCards = cards.filter((card) =>
      card.category.toLowerCase().includes(searchCategory.toLowerCase())
    );
    // Update the filtered cards
    setFilteredCards(newFilteredCards);
  };

  return (
    <div>
      <Banner
        setSearchCategory={setSearchCategory}
        handleSearch={handleSearch}
      ></Banner>
      <Cards cards={searchCategory ? filteredCards : cards}></Cards>
    </div>
  );
};

export default Home;
