let  todos = require('../data.js')
const path = require('path');
const todoModel = require('../models/todo.model.js')

const displayWeek = (req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'homepage.html'))
}

const specificDay = async(req,res)=>{
    const reqDay = req.params.day 
    const match = await todoModel.find({day:reqDay})
    if(!match ||  match.length === 0){
        return res.status(404).json({success:false , msg : "required todo does not exist"})
    }
    res.status(200).json(match)
}
const createTodo = async(req,res)=>{
    const day = req.params.day
    const {title} = req.body
    if (title === undefined){
         return res.status(400).json({success:false , msg : "please enter a valid title for the to-do"})
    }
    await todoModel.create({
        title : title,
        day : day, 
    })
    specificDay(req,res);
}
const updateTodo = async(req,res)=>{
    const reqday = req.params.day
    const reqtitle = req.query.title
    console.log(reqtitle);
    
    const match = await todoModel.find({day:reqday , title : reqtitle})
     if(!match || match.length===0 ){
        return res.status(404).json({success:false , msg : "required todo does not exist"})
    }
    const {day, title, completed} = req.body
    await todoModel.findOneAndUpdate({day: reqday, title: reqtitle}, 
                                     {$set : {day : day, title: title, completed : completed}}, {new : false})

     specificDay(req,res);

}
const deleteTodo = async (req,res)=>{
    const reqday = req.params.day
    const reqtitle = req.query.title
    const match = await todoModel.find({day:reqday , title : reqtitle})
     if(!match || match.length===0 ){
        return res.status(404).json({success:false , msg : "required todo does not exist"})
    }
    await todoModel.findOneAndDelete({day : reqday, title:reqtitle })
    specificDay(req,res)
}

module.exports = {
    displayWeek,
    specificDay,
    createTodo,
    updateTodo,
    deleteTodo  
}