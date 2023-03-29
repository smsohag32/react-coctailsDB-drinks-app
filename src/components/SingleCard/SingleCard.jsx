import React from "react";
import "aos/dist/aos.css";
const SingleCard = (props) => {
  const handleBuy = props.handleBuy;
  const drink = props.drink;
  //   console.log(drink);
  const {
    strDrinkThumb,
    strGlass,
    strIngredient,
    strIngredient1,
    strInstructions,
    strInstructionsDE,
    strCategory,
    strDrink,
    dateModified,
    idDrink,
  } = drink;
  let date = new Date(dateModified);
  const day = date.getDate();
  const month = date.getMonth();
  const years = date.getFullYear();
  //   console.log(years);
  const fullDate = day + "/" + month + "/" + years;
  return (
    <div
      data-aos="zoom-in-up"
      className="card lg:card-side bg-base-100 shadow-xl"
    >
      <figure className="">
        <img className="w-full" src={strDrinkThumb} alt="Album" />
      </figure>
      <div className="card-body w-full">
        <h2 className="card-title">{strGlass}</h2>
        <p>{strDrink}</p>
        <p>{strCategory}</p>
        <p>{strIngredient1}</p>
        <p>{strIngredient}</p>
        <p>{fullDate}</p>
        <div className="card-actions justify-end">
          {/* function er vitor single drinks data pass  */}
          <button onClick={() => handleBuy(drink)} className="btn btn-primary">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
