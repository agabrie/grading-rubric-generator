const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// setup express app
const app = express();

var port = process.env.port || 4000;
var username = "agabrie"
var password = "admin123"
var url = `mongodb+srv://${username}:${password}@itemtest-cyj0i.mongodb.net/test?retryWrites=true&w=majority` || 'mongodb://localhost/itemdb'
mongoose.connect(url, {
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
app.get('/',(req,res)=>{
	res.redirect('/public')
})
app.get('/public',(res)=>{
	res.sendFile(path.join(__dirname+"/index.html"));
})
// listen for requests
app.listen(port,()=>{
	console.log("now listening on port: "+port);
});