const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const Ably = require("ably");
dotenv.config();


//ably init 
var ably = new Ably.Realtime({
  key: process.env.APIKEY,
});

//cors
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

//dotenv


//App iniat
const app = express();
const server = app.listen(process.env.PORT);

//DB MONGO
mongoose.set("strictQuery", false);
mongoose.connect(
  process.env.DBURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));

//Product model
const Product = require("./Models/Product");

//Routes
app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/api/insert/product", (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.save((err, Product) => {
    if (err) {
      res.status(500).send(err);
    } else {
      
      ably.channels.get("products").publish("new-product", newProduct);
      res.status(200).send(Product);
    }
  });
});

app.get("/api/products", (req, res) => {
  Product.find({})
    .sort({ Date: -1 })
    .exec(function (err, docs) {
      if (err) {
        res.send([]);
      } else {
        res.send(docs);
      }
    });
});


