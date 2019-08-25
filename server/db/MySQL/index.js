const mysql = require('mysql');
const createTables = require('./config');
const Promise = require('bluebird');
const database = 'airbnb';

const connection = mysql.createConnection({
  user: 'root',
  password: ''
});

const db = Promise.promisifyAll(connection);

db.connectAsync()
  .then(() => console.log(`Connected to ${database} database as ID ${db.threadId}`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`, (err, results) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`Using ${database} database`)
    }
  }))
  .then(() => createTables(db));

module.exports = db;