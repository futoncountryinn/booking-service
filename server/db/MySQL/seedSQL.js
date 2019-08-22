const mysql = require('mysql');
const moment = require('moment');
const Promise = require('bluebird');
const createCsvWriter = require('csv-writer').createObjectCsvWriter
// const fs = require('fs');

// const connection = mysql.createConnection({
//   user: 'root',
//   password: '',
//   database: 'airbnb'
// });

// const db = Promise.promisifyAll(connection);

const createReservation = (index, cb) => {
  startDate = moment([moment().year(), moment().month(), 1]).add(index, 'month')
  endDate = moment([moment().year(), moment().month(), 1]).add(index, 'month').add(Math.floor(Math.random() * 7), 'days');
  const checkout = {
    checkin: startDate,
    checkout: endDate
  }
  cb(checkout);
};

// below attempts to populate CSV

const csvWriter = createCsvWriter({
  path: './server/db/MySQL/records.csv',
  header: [
    {id: 'checkin', title: 'CheckIn'},
    {id: 'checkout', title: 'CheckOut'}
  ],
  append: true
});

const saveRecordsToCSV = (totalNewRecords) => {
  let csvEntries = [];
  for (let i = 0; i < totalNewRecords; i++) {
    createReservation(i, (entry) => {
      csvEntries.push(entry);
    });
  };
  csvWriter.writeRecords(csvEntries)
    .then(() => {
      console.log(`New records saved successully.`)
    });
};

for (let i = 0; i < 8; i++) {
  saveRecordsToCSV(1000000);
}