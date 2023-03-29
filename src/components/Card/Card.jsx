import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Cart from "../Cart/Cart";
import SingleCard from "../SingleCard/SingleCard";

const Card = () => {
  const [data, setData] = useState([]);
  const [isBuy, setIsBuy] = useState(false);
  //   function
  const handleBuy = (drink) => {
    console.log(drink);
    setIsBuy(true);
  };
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
      .then((res) => res.json())
      .then((drinks) => setData(drinks.drinks));
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="sticky top-0 w-full z-40 bg-white">
        {isBuy && <Cart />}
      </div>
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
        {data.map((drink) => (
          <SingleCard drink={drink} handleBuy={handleBuy} />
        ))}
      </div>
    </div>
  );
};

export default Card;
