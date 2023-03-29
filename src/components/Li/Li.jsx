import React from "react";

const Li = (props) => {
  const item = props.item;
  return (
    <div>
      <li className="bg-green-200">{item.strDrink}</li>
    </div>
  );
};

export default Li;
