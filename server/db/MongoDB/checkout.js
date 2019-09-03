const {Checkout} = require('./index.js');

const getRecords = () => {
  try {
      let items = Checkout.find({_id: { $gt: 9500000 }}).limit(100);
      return items;
  }
  catch(err) {
    console.log(`getRecords Error: `, err);
  }
};

const insertRecord = (data) => {
  Checkout.countDocuments()
  .then((count) => {
    Checkout.create({"_id": count + 1,"checkin": data.checkin, "checkout": data.checkout}, err => {
      if (err) {
        console.log(`Save method error --> `, err);
      } else {
        return 'New reservation saved successfully.'
      }
    })
  });
};

module.exports.getRecords = getRecords;
module.exports.insertRecord = insertRecord;
// module.exports.deleteRecord = deleteRecord;
// module.exports.editRecord = editRecord;