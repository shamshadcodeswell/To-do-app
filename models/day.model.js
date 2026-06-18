const mongoose = require ("mongoose")
const daySchema = new mongoose.Schema({
    day : {
        type : String,
        enum : ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday","sunday"],
        required : true
    },
    todos : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Todo"
    }]
},{timestamps : true})
module.exports = mongoose.model("Day",daySchema)