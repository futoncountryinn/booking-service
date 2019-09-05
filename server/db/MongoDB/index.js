const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/airbnbDB', { useNewUrlParser: true });

let checkoutSchema = {
  _id: Number,
  checkin: String,
  checkout: String
};

let Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports.Checkout = Checkout;