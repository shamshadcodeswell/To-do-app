const mongoose = require ("mongoose")
const DB_NAME = require("../constants")
 
async function connectDB(){
    try {
       const connectionInstance =  await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
       console.log(`Database connected Successfully !`);
       
    } catch (error) {
        console.log("Error in connecting to database",error);
        
    }
}

module.exports = connectDB;