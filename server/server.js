const newrelic = require('newrelic');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');
const database = require('./db/MongoDB/checkout.js');
const app = express();
const port = process.env.PORT || 3002;
const cors = require('cors');

app.locals.newrelic = newrelic;

// Allow CORS
app.use(cors());

// Log all 4xx and 5xx responses
app.use(morgan('dev'));

// Log all requests to access.log
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}));

// Parse all requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve public folder
app.use(express.static(path.join(__dirname, '../public')));

// Checkout dates
app.get('/checkout', async (req, res) => {
  let results = await database.getRecords()
    res.send(results);
});

// Checkout user
app.post('/', async (req, res) => {
  let response = await database.insertRecord(req.body);
  res.send(response);
});

// Delete record by ID
app.delete('/', (req, res) => {
  database.deleteRecord(req.body.id, (response) => {
    res.send(response);
  });
});

// Edit reservation
app.put('/', (req, res) => {
  database.editRecord(req.body, (response) => {
    res.send(response);
  });
});

// Listen for requests
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
