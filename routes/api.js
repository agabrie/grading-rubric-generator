const express = require("express");
const router = express.Router();

// get things from db
router.get('/item',(req, res)=>{
	res.send({type:"GET"});
});

// add new item to db
router.post('/item',(req, res)=>{
	res.send({type:"POST"});
});

// update item in db
router.put('/item/:id',(req, res)=>{
	res.send({type:"PUT"});
});

// delete item from db
router.delete('/item/:id',(req, res)=>{
	res.send({type:"DELETE"});
});

module.exports = router;