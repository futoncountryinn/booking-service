const mongoose = require('mongoose');

mongoose.connect('mongodb://ec2-18-216-161-149.us-east-2.compute.amazonaws.com/airbnbDB', { useNewUrlParser: true, poolSize: 1000 });

let checkoutSchema = {
  _id: Number,
  checkin: String,
  checkout: String
};

let Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports.Checkout = Checkout;