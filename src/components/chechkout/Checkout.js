import React from "react";
import CheckOutProduct from "../checkoutProduct/CheckOutProduct";
import { useStateValue } from "../../StateProvider";
import Subtotal from "../subtotal/Subtotal";
import "./Checkout.css";
import FlipMove from "react-flip-move";
// import { positions, style } from "@mui/system";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__header">
        <div className="checkout__headerLeft">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />
          <h2>Hello, {!user ? "Guest" : user.email}</h2>
          <div className="checkout__title">
            <h2>Your Shopping Basket </h2>
            <span>
              {basket.length} item(s) - Total of{" "}
              {basket.reduce((acc, cur) => acc + cur.price, 0)} Dollars
            </span>
            <hr />
          </div>
          {/* shopping items */}
          {/* <div style={{ positions: "relative" }}>
            <FlipMove> */}
          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              key={Math.random()}
            />
          ))}
          {/* </FlipMove> */}
        </div>
        <div className="checkout__headerRight">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
