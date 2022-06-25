import React, { useState, useEffect } from "react";
import { useStateValue } from "./../../StateProvider";
import "./Payment.css";
import CheckOutProduct from "./../checkoutProduct/CheckOutProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./../../reducer";
import axios from "./../../axios";
import { db } from "./../../firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigate("/orders");
      });
  };

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
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
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic will go */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

// function Payment() {
//   const [{ basket, user }, dispatch] = useStateValue();
//   const navigate = useNavigate();

//   const stripe = useStripe();
//   const elements = useElements();

//   const [error, setError] = useState(null);
//   const [disabled, setDisabled] = useState(true);
//   const [processing, setProcessing] = useState("");
//   const [succeeded, setSucceeded] = useState(false);
//   const [clientSecret, setClientSecret] = useState(true);

//   // useEffect runs once when the payment components loads and it will re run only when we pass any second parameters in useeffect
//   useEffect(() => {
//     //Generates the special stripe secret which allow us to charge a customer and whenever the basket changes we need a new secret
//     const getClientSecret = async () => {
//       // axios is a way of making request like we can make a post request, get request(API CALLS POWERED BY AXIOS)
//       const response = await axios({
//         method: "post",
//         //stripe expects the total in a currencies sub-units which is dollar to cents
//         url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
//       });
//       // res.data.clientsecret coming from backend
//       setClientSecret(response.data.clientSecret);
//     };

//     // we call it afterwards
//     getClientSecret();
//   }, [basket]);

//   console.log("the secret id  ", clientSecret);

//   const handleSubmit = async (e) => {
//     // all stripe fancy stuff
//     e.preventDefault();
//     setProcessing(true);

//     //Payload is the essential information in a data block that you send to or receive from the server when making API requests.
//     const payload = await stripe
//       .confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//         },
//       })
//       .then(({ paymentIntent }) => {
//         //paymnetIntent = payment Confirmation
//         setSucceeded(true);
//         setError(null);
//         setProcessing(false);

//         navigate("/orders");
//       });
//   };

//   const handleChange = (e) => {
//     // Listen for changes in the CardElement
//     // and display any errors as the customer types their card details
//     setDisabled(e.empty);
//     setError(e.error ? e.error.message : "");
//   };

//   return (
//     <div className="payment">
//       <div className="payment__container">
//         <h1>
//           Checkout (<Link to={"/checkout"}>{basket?.length} Items</Link>)
//         </h1>
//         {/* Payment Section -- Delivery Address */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Delivery Address</h3>
//           </div>
//           <div className="payment__address">
//             <p>{user?.email}</p>
//             <p>111 React Road</p>
//             <p>Patna, India</p>
//           </div>
//         </div>

//         {/* Payment Section -- Review Items */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Review Items & Delivery</h3>
//           </div>
//           <div className="payment__items">
//             {basket.map((item) => (
//               <CheckOutProduct
//                 id={item.id}
//                 title={item.title}
//                 image={item.image}
//                 price={item.price}
//                 rating={item.rating}
//                 key={Math.random()}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Payment Section -- Payment Method */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Payment Method</h3>
//           </div>
//           <div className="payment__details">
//             {/* stripe functionality */}
//             <form onSubmit={handleSubmit}>
//               {/* CARD ELEMENT WILL PROVIDE A LAYOUT FOR YOUR CARD   i.e. card no. & cvv */}
//               <CardElement onChange={handleChange} />

//               <div className="payment__priceContainer">
//                 <CurrencyFormat
//                   renderText={(value) => (
//                     <>
//                       <h3>Order Total: {value}</h3>
//                     </>
//                   )}
//                   decimalScale={2}
//                   value={getBasketTotal(basket)}
//                   displayType={"text"}
//                   thousandSeparator={true}
//                   prefix={"$"}
//                 />
//                 <button disabled={processing || disabled || succeeded}>
//                   <span>{processing ? <p>processing</p> : "Buy Now"}</span>
//                 </button>
//               </div>

//               {/* errors */}
//               {error && <div>{error}</div>}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Payment;
