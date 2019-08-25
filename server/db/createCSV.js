const fs = require('fs');
const moment = require('moment');

// most recent (8/24) completed 10M records in ~ 38 minutes

const createReservation = (index, cb) => {
  startDate = moment([moment().year(), moment().month(), 1]).add(index, 'day')
  endDate = moment([moment().year(), moment().month(), 1]).add(index, 'day').add(Math.floor(Math.random() * 7), 'days');
  const checkout = {
    checkin: startDate,
    checkout: endDate
  };
  cb(checkout);
};

const saveRecordsToCSV = (totalNewRecords) => {
  let t0 = Date.now();
  if(!fs.existsSync('./server/db/MySQL/records.csv')) {
    createReservation(1, reservation => {
      fs.writeFileSync('./server/db/MySQL/records.csv', JSON.stringify(reservation.checkin) + ',' + JSON.stringify(reservation.checkout))
    });
  }
  for (let i = 1; i < totalNewRecords; i++) {
    createReservation(i, reservation => {
      fs.appendFileSync('./server/db/MySQL/records.csv', '\n' + JSON.stringify(reservation.checkin) + ',' + JSON.stringify(reservation.checkout));
    });
  };
  let t1 = Date.now();
  console.log(`${totalNewRecords} new records saved to records.csv in ${Math.floor((t1-t0) / 1000)} seconds or ~${Math.floor((t1-t0) / 1000 / 60)} minutes`);
};

saveRecordsToCSV(10000000);