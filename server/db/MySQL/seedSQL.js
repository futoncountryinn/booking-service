const mysql = require('mysql');
const db = require('./index.js');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'airbnb'
});

connection.connect(error => {
  if (error) {
    console.log(`Error opening MySQL connection: `, error);
  } else {
    insertAllCSVRecords();
  }
});

const insertAllCSVRecords = () => {
  let t0 = Date.now();
  db.queryAsync(
    `use airbnb
    load data local infile './server/db/records.csv'
    into table checkout
    fields terminated by ','
    lines terminated by '\n'
    ignore 1 rows
    (CuID, checkin, checkout)`, (err) => {
    if (err) {
      console.log(`insertAllCSVRecords error:`, err);
    } else {
      let t1 = Date.now();
      console.log(`CSV saved to MySQL database in ${Math.floor((t1-t0) / 1000)} seconds or ~${Math.floor((t1-t0) / 1000 / 60)} minutes`);
    }
  });
};