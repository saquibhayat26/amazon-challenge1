import React from "react";
import { useStateValue } from "./../../StateProvider";

import "./CheckOutProduct.css";

function CheckOutProduct({ id, title, image, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__left">
        <img src={image} alt="" />
      </div>
      <div className="checkoutProduct__right">
        <p className="checkoutProduct__rightInfo">{title}</p>
        <p className="checkoutProduct__rightPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__rightRating">
          {Array(rating)
            .fill()
            .map(() => {
              return <li key={Math.random()}>⭐</li>;
            })}
        </p>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove From Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckOutProduct;
