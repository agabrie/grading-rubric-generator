const {Schema, model} = require("mongoose");

const feedbackSchema= new Schema({
    rubric:Rubric,
    text:{type:String},
})

const Feedback = model("Feedback", feedbackSchema)
module.exports = Feedback