const {db} = require('./index.js');
const moment = require('moment');

let fakeReservations = [];
let fakeEntriesCount = 100

for (let i = 0; i < fakeEntriesCount; i++) {
  let singleRes = {
    id: i,
    checkin: moment().add(i, 'months').format("MMM Do YY"),
    checkout: moment().add(i, 'months').add(Math.floor(Math.random() * 7), 'days').format("MMM Do YY")
  };
  fakeReservations.push(singleRes);
};

db.save(fakeReservations, () => {
  console.log(`New entries saved in MongoDB.`);
});