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

const LinkSchema = new Schema({
	url:{
		type:String,
		required:[true]
	},
	description:{
		type:String
	}

});

const TaskSchema= new Schema({
	name:{
		type:String,
		required:[true, 'Taskname required']
	},
	description:{
		type:String
	},
	links:{
		type:[LinkSchema]
	},
	completed:{
		type:Boolean
	},
	priority:{
		type:Number
	},
	timeStamp:{
		type:Date
	}
});

const ComponentSchema= new Schema({
	name:{
		type:String,
		required:[true, 'Taskname required']
	},
	description:{
		type:String
	},
	links:{
		type:[LinkSchema]
	},
	// completed:{
	// 	type:Boolean
	// },
	tasks:{
		type:[TaskSchema]
	},
	priority:{
		type:Number
	},
	timeStamp:{
		type:Date
	}
});
const SectionSchema= new Schema({
	name:{
		type:String,
		required:[true, 'Taskname required']
	},
	description:{
		type:String
	},
	links:{
		type:[LinkSchema]
	},
	// completed:{
	// 	type:Boolean
	// },
	components:{
		type:[ComponentSchema]
	},
	priority:{
		type:Number
	},
	timeStamp:{
		type:Date
	}
});
const ProjectSchema= new Schema({
	name:{
		type:String,
		required:[true, 'Taskname required']
	},
	description:{
		type:String
	},
	links:{
		type:[LinkSchema]
	},
	// completed:{
	// 	type:Boolean
	// },
	sections:{
		type:[SectionSchema]
	},
	timeStamp:{
		type:Date
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
const Project = mongoose.model('project',ProjectSchema)
module.exports = {Item,Project};