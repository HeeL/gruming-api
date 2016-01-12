const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

const words = require('./routes/v1/words');
app.use('/v1/words', words);

module.exports = app;
