const {Schema, model} = require("mongoose");

const rangeSchema= new Schema({
    min:{type:Number},
    max:{type:Number}
})
const gradeSchema= new Schema({
    range:rangeSchema,
    grade:{type:String},
})


const Grade = model("Grade", gradeSchema)
module.exports = Grade