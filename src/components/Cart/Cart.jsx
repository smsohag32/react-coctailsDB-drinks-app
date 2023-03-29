import React from "react";

const Cart = (props) => {
  const drink = props.cart;
  console.log(drink);

  let totalPrice = 0;
  return (
    <div className="rounded-md shadow-xl h-20">
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 py-2">
        <div>
          <h1 className="font-bold text-xs">Order Summary__</h1>
          <p className="text-sm">Selected Items:{drink.length}</p>
          <p>Total Price: $</p>
        </div>
        <div>
          <h1>hello</h1>
          <div className="text-right">
            <button className="bg-green-600 text-right text-white p-1 rounded-sm text-xs">
              Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
