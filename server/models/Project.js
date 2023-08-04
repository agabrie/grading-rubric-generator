const {Schema, model, Types} = require("mongoose");
// const Rubric = require("./Rubric");

const projectSchema = new Schema({
    name:{type:String},
    rubric:{type:Types.ObjectId,ref:"Rubric"}
})


const Project = model("Project", projectSchema)
module.exports = Project