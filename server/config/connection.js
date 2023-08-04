const mongoose = require("mongoose");

const DB_URL = process.env.DB_URL || 'mongodb://127.0.0.1:27017'
const DB_NAME = process.env.DB_NAME || 'test'

const connectionString = `${DB_URL}/${DB_NAME}`
mongoose.set('strictQuery', true);
const connection = mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
// .then((connectionData)=>{
    // let connection = connectionData.connections[0];
    // console.log(`Connection [${connection._readyState}] to db[${connection.name}] on port => ${connection.port}`)
// })

module.exports = mongoose.connection;