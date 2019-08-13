const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/airbnbDB');

let checkoutSchema = {
  id: Number,
  checkin: String,
  checkout: String
}

let db = {};

let Checkout = mongoose.model('Checkout', checkoutSchema);

db.save = (array, callback) => {
  Checkout.deleteMany({}, () => {
    Checkout.insertMany(array, (err) => {
      if (err) {
        console.log(`Save method error --> `, err);
      } else {
        callback();
      }
    })
  });
};

db.getDocument = (id, callback) => {
  Checkout.find({id:id}, (err, items) => {
    if (err) {
      console.log(`getDocument method error --> `, err);
    } else {
      callback(items);
    }
  })
}

module.exports.db = db;