const express = require("express");
const router = express.Router();
const Ninja = require("../models/items");

// get things from db
router.get('/items',(req, res)=>{
	res.send({type:"GET"});
});

// add new item to db
router.post('/items',(req, res)=>{
	// console.log(req.body);
	// var item= new item(req.body);
	// Ninja.save();
	Ninja.create(req.body);
	res.send({
		type:"POST",
		body:req.body
	});
});

// update item in db
router.put('/items/:id',(req, res)=>{
	res.send({type:"PUT"});
});

// delete item from db
router.delete('/items/:id',(req, res)=>{
	res.send({type:"DELETE"});
});

module.exports = router;