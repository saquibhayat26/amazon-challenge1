import React from "react";
import { useStateValue } from "./../../StateProvider";
import "./Product.css";

function Product({ title, price, rating, image, id }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="product__rating">
          {Array(rating)
            .fill()
            .map(() => {
              return <li key={Math.random()}>⭐</li>;
            })}
        </p>
      </div>
      <img className="product__image" src={image} alt="" />
      <button className="product__button" onClick={addToBasket}>
        Add To Basket
      </button>
    </div>
  );
}

export default Product;
