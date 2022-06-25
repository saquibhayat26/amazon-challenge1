import moment from "moment";
import React from "react";
import "./Order.css";
import CheckOutProduct from "./../checkoutProduct/CheckOutProduct";
import { CurrencyFormat } from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:ma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckOutProduct
          id={item.id}
          item={item}
          key={Math.random()}
          image={item.image}
          rating={item.rating}
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
