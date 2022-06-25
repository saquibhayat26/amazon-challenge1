const functions = require("firebase-functions");
const express = require("express");
// CORS IS FOR SOME SECURITY PURPOSE
const cors = require("cors");
const corsOptions = {
  origin: true,
  credentials: true, //access-control-allow-credentials:true
};

// it is a secret key taken from stripe account after revealing it
const stripe = require("stripe")(
  "sk_test_51KtuqKSIOsB9asYB9W6XM09uCQyn8MfsoZpRDoYw4b6oTfYiSgXl5CbiWbKC9QoIYA6jaVKHpWHiR6H0lIxfVY7N00Icy86GgJ"
);

///////////////  -----------------API SETUP--------------  /////////////////////

//----------------------App Config
const app = express();

//----------------------Middlewares
// app.use(cors({ origin: true }));
app.use(cors(corsOptions));
app.use(express.json());

// API routes
// THIS IS A DUMMY ROUTES (END POINTS) 200 IS GOOD
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment request recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  //201 IS OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
// CLOUD FUNCTIONS COMING FROM HERE
exports.api = functions.https.onRequest(app);

// Example Endpoint
// http://localhost:5001/clone-57f4b/us-central1/api

//
