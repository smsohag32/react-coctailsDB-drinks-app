import React from "react";

const Li = (props) => {
  const item = props.item;
  const name = item.strDrink;
  return (
    <div>
      <li className="bg-green-200">{name}</li>
    </div>
  );
};

export default Li;
