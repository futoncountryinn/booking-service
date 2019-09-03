const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/airbnbDB', { useNewUrlParser: true });

let checkoutSchema = {
  _id: Number,
  checkin: String,
  checkout: String
}

let Checkout = mongoose.model('Checkout', checkoutSchema);

// let db = {};

// db.save = (array, callback) => {
//   Checkout.deleteMany({}, () => {
//     Checkout.insertMany(array, (err) => {
//       if (err) {
//         console.log(`Save method error --> `, err);
//       } else {
//         callback();
//       }
//     })
//   });
// };

// db.getDocument = (id, callback) => {
//   Checkout.find({id:id}, (err, items) => {
//     if (err) {
//       console.log(`getDocument method error --> `, err);
//     } else {
//       callback(items);
//     }
//   })
// }

module.exports.Checkout = Checkout; // export Checkout variable?