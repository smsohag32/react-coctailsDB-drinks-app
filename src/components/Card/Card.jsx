import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Cart from "../Cart/Cart";
import SingleCard from "../SingleCard/SingleCard";
import { addToDb, getShoppingCart } from "../Utilities/FackDb";

const Card = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [isBuy, setIsBuy] = useState(false);
  //   function
  const handleBuy = (drink) => {
    setIsBuy(true);
    const newCart = [...cart, drink];
    setCart(newCart);
    addToDb(drink.idDrink);
  };
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedCart = data.find((item) => item.idDrink === id);
      if (addedCart) {
        const quantity = storedCart[id];
        addedCart.id = quantity;
        savedCart.push(addedCart);
      }
    }
    setCart(savedCart);
  }, [data]);
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
      .then((res) => res.json())
      .then((drinks) => setData(drinks.drinks));
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="sticky top-10 w-full z-40 bg-white">
        {isBuy && <Cart cart={cart} />}
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
