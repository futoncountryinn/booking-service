const db = require('./index.js');

const getRecords = (cb) => {
  // let t0 = Date.now();
  db.query('SELECT * FROM checkout WHERE id > 9000000 LIMIT 100', function (err, results) {
    if (err) throw err;
    cb(results);
    // let t1 = Date.now();
    // console.log(`Completed database query for GET API call in ${(t1 - t0)}ms.`)
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
  db.queryAsync(`DELETE FROM checkout WHERE id = ${deleteID}`, (err, results) => {
    if (err) {
      console.log(`Error with delete record function: `, err);
    }
    console.log(`Deleted reservation for ID: ${deleteID}`);
    cb(`Deleted reservation for ID: ${deleteID}`);
  })
};

const editRecord = (record, cb) => {
  db.queryAsync(`UPDATE checkout SET checkin = '${record.checkin}', checkout = '${record.checkout}' WHERE id = '${record.id}'`, (err, results) => {
    if (err) {
      console.log(`Error with edit record query: `, err);
    }
    console.log(`Edited record at ID: `, record.id);
    cb(`Edited record at ID: `, record.id);
  });
};

module.exports.insertRecord = insertRecord;
module.exports.getRecords = getRecords;
module.exports.deleteRecord = deleteRecord;
module.exports.editRecord = editRecord;