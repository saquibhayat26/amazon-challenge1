import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/chechkout/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/orders/Orders";

// first step for stripe functionality
const promise = loadStripe(
  // IT IS A PUBLIC KEY WHICH COMES FROM STRIPE ACCOUNT AND IT'S SECRET KEY WILL BE USED INSIDE THE BACKEND OF OUR APP IN INDEX.JS FILE
  "pk_test_51KtuqKSIOsB9asYB7eUSwB3ucRj1TiNcrQMl4e8jnFNZcaUW5pF30GxuaD1KnUGv18w6PEqvwsPVqBYv6Hhlo0kJ00nXDJMZ3w"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //Only Run Once when the App Component is Loaded

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />

          <Route path="/orders" element={<Orders />} />

          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />

          <Route path={"/login"} element={<Login />} />

          <Route
            path={"/payment"}
            element={
              <div>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </div>
            }
          />

          <Route path={"*"} element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
