const {Schema, model} = require("mongoose");

const criterionOptionSchema= new Schema({
    text:{type:String},
    value:{type:Number},
    feedback:{type:String},
})
const criterionSchema= new Schema({
    name:{type:String},
    description:{type:String},
    options:[criterionOptionSchema]
})

const sectionSchema = new Schema({
    name:{type:String},
    weight:{type:Number},
    criteria:[criterionSchema]
})

const rubricSchema= new Schema({
    name:{type:String},
    sections:[sectionSchema]
})

const Rubric = model("Rubric", rubricSchema)

module.exports = Rubric
