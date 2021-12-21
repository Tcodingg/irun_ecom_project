const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
   title: String,
   details: String,
   description: String,
   images: [String],
   inStock: Number,
   returnPolicy: String,
});

const product = mongoose.model("product", productSchema);

module.exports = product;
