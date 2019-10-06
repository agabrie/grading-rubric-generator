const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// setup express app
const app = express();

var port = process.env.port || 4000;

mongoose.connect('mongodb://localhost/itemdb', {
	useFindAndModify: false,
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.Promise = global.Promise;
app.use(express.static('public'))
app.use(bodyParser.json());

app.use('/api', require("./routes/api"));
app.use((err, req,res, next)=>{
	console.log(err);
	res.status(422).send({error:err});
});

// listen for requests
app.listen(port,()=>{
	console.log("now listening on port: "+port);
});