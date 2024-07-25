const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: String,
  size: String,
  price: Number
});

const Clothing = mongoose.model('Clothing', clothingSchema);
module.exports = Clothing;
2