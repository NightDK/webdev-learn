const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type: String,
    unique: [true],
    required: [true]
  }
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;