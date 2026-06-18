const mongoose = require("mongoose")
const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    completed : {
        type : Boolean,
        default : false, 
    },
    day : {
        type : String,
        enum : ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],
        required : true
    },
    priority:{
        type: String,
        enum : ["high","normal"],
        default : "normal"
    }

},{timestamps : true})

module.exports = mongoose.model("Todo", todoSchema)