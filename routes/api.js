const express = require("express");
const router = express.Router();
const Item = require("../models/items");

// get things from db
router.get('/items',(req, res, next)=>{
	// res.send({type:"GET"});
	Item.aggregate().near({
		type:'Point',
		near:[parseFloat(req.query.lng), parseFloat(req.query.lat)],
		maxDistance:100000,
		spherical:true,
		distanceField: "dist.calculated"
	})
	// ,
	// {
		
	// })
	.then((items)=>{
		res.send(items);
	})
});

// add new item to db
router.post('/items',(req, res,next)=>{
	// console.log(req.body);
	// var item= new item(req.body);
	// Ninja.save();
	Item.create(req.body)
	.then((item)=>{
		res.send({
			type : "POST",
			item : item
		});
	})
	.catch(next);
});

// update item in db
router.put('/items/:id',(req, res, next)=>{
	Item.findByIdAndUpdate({_id : req.params.id},req.body)
	.then(()=>{
		Item.findOne({_id:req.params.id})
		.then((item)=>{
			res.send({
				type:"PUT",
				item:item
			});
		});	
	})
	.catch(next);
});

// delete item from db
router.delete('/items/:id',(req, res,next)=>{
	console.log(req.params.id);
	Item.findByIdAndRemove({_id : req.params.id})
	.then((item)=>{
		res.send({
			type:"DELETE",
			item:item
		});
	})
	.catch(next);
});

module.exports = router;