require ("dotenv").config()
const express = require('express')
const app = express()
const homeRouter = require('./routes/auth')
const todoRouter = require('./routes/todo')
const connectDB = require('./db')
const todoModel = require('./models/todo.model')
app.use(express.json())
app.use('/',homeRouter)
app.use('/todo',todoRouter)
;(async()=>{
   try {
        await connectDB()
        // await todoModel.create({
        //     title : "make todo project",
        //     day: "thursday"
        // }) 
        // await todoModel.create({
        //     title : "finish linked list medium questions",
        //     day: "thursday"
        // }) 
        app.listen(5000, ()=>{
        console.log('server started listening to port 5000');   
        })
    } 
   catch (error) {
     console.log("Error",error);
     
   }
})()






