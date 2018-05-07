const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/products');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', require('./routes/routes'));

const Product = mongoose.model('product');

app.listen(process.env.port || 1999, function () {
  console.log('Server running!');
});