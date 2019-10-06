const express = require('express');
// setup express app
// const routes = require("./routes/api");
const app = express();
// listen for requests
var port = process.env.port || 4000

app.use('/api', require("./routes/api"));

app.listen(port,()=>{
	console.log("now listening on port: "+port);
});