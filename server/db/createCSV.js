const fs = require('fs');
const moment = require('moment');

// most recent (8/24) completed 10M records in ~ 38 minutes

const createReservation = (index) => {
  CuID = index,
  startDate = moment([moment().year(), moment().month(), 1]).add(index, 'day')
  endDate = moment([moment().year(), moment().month(), 1]).add(index, 'day').add(Math.floor(Math.random() * 7), 'days');
  const checkout = {
    CuID: CuID,
    checkin: startDate,
    checkout: endDate
  };
  return checkout;
};

const saveRecordsToCSV = async (totalNewRecords) => {
  let t0 = Date.now();
  if(!fs.existsSync('./server/db/testPromises.csv')) {
      fs.writeFileSync('./server/db/testPromises.csv', 'CuID,checkin,checkout')
  }
  for (let i = 1; i <= totalNewRecords; i++) {
    let reservation = await createReservation(i);
    fs.appendFileSync('./server/db/testPromises.csv', '\n' + reservation.CuID + ',' + JSON.stringify(reservation.checkin) + ',' + JSON.stringify(reservation.checkout));
  };
  let t1 = Date.now();
  console.log(`${totalNewRecords} new records saved to testPromises.csv in ${Math.floor((t1-t0) / 1000)} seconds or ~${Math.floor((t1-t0) / 1000 / 60)} minutes`);
};

// saveRecordsToCSV(10000000);

saveRecordsToCSV(100);