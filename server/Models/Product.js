const { Schema, model } = require("mongoose");
const ProductSchema = new Schema({
  
  Name: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
  Status: {
    type: String,
    required: true,
  },
  Img : {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  Brand: {
    type: String,
    required: true,
  },
});

const Product = model("Product", ProductSchema);

module.exports = Product;
