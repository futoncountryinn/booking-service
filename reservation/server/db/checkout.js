const db = require('./index.js');

const getRecords = (cb) => {
  db.query('SELECT * FROM checkout', function (err, results) {
    if (err) throw err;
    cb(results);
  });
};

const insertRecord = (checkout, cb) => {
  db.queryAsync(`INSERT INTO checkout SET ?`, checkout, (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(`Inserted record ${JSON.stringify(checkout)}`);
    cb();
  });
};

const deleteRecord = (deleteID, cb) => {
  db.queryAsyc(`DELETE FROM checkout WHERE id = ${deleteID}`, (err, results) => {
    if (err) {
      console.log(`Error with delete record function: `, err);
    }
    console.log(`Deleted reservation for ID: `, deleteID);
    cb(`Deleted reservation for ID: `, deleteID);
  })
};

module.exports.insertRecord = insertRecord;
module.exports.getRecords = getRecords;
module.exports.deleteRecord = deleteRecord;