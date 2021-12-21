const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
   title: String,
   details: String,
   price: Number,
   description: String,
   images: [String],
   inStock: Number,
   generalInfo: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
