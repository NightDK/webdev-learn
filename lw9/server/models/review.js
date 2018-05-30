const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    required: [true]
  },
  description: {
    type: String,
    required: [true]
  }
});

const Review = mongoose.model('review', ReviewSchema);

module.exports = Review;