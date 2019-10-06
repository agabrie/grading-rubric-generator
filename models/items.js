const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
	type:{
		type:String,
		default:"Point"
	},
	coordinates:{
		type:[Number],
		index:"2dsphere"
	}
});

const ItemSchema = new Schema({
	username:{
		type: String,
		required:[true,'username field required']
	},
	firstname:{
		type: String,
		required:[true,'firstname field required']
	},
	lastname:{
		type: String,
		required:[true,'lastname field required']
	},
	email:{
		type:String,
		required:[true, 'email address field required']
	},
	validated:{
		type:Boolean,
		default:false
	},
	geometry:GeoSchema
});

const Item = mongoose.model('item', ItemSchema);

module.exports = Item;