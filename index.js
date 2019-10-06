const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// setup express app
const app = express();

var port = process.env.port || 4000;

mongoose.connect('mongodb://localhost/itemdb');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', require("./routes/api"));

// listen for requests
app.listen(port,()=>{
	console.log("now listening on port: "+port);
});