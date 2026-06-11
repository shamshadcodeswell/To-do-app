let  todos = require('../data.js')
let nextId = todos.length+1;
const displayTodo = (req,res)=>{
    res.status(200).json(todos)
}

const specificTodo = (req,res)=>{
    const reqId = req.params.id
    const match = todos.find((todo)=>todo.id === Number(reqId))
    if(!match){
        return res.status(404).json({success:false , msg : "required todo does not exist"})
    }
    res.status(200).json(match)
}
const createTodo = (req,res)=>{
    const {title} = req.body
    if (title === undefined){
         return res.status(400).json({success:false , msg : "please enter a valid title for the to-do"})
    }
    todos.push({id : nextId++, title : title, completed: false})
    res.status(201).send(todos)
}
const updateTodo = (req,res)=>{
    const reqId = Number(req.params.id)
    const {title,completed} = req.body
    const match = todos.find((todo)=>todo.id === reqId)
     if(!match){
        return res.status(404).json({success:false , msg : "required todo does not exist"})
    }
    const index = todos.indexOf(match)
    if (title !== undefined) todos[index].title = title
    if (completed !== undefined) todos[index].completed = completed
    res.status(200).json(todos)
}
const deleteTodo = (req,res)=>{
    const reqId = Number(req.params.id)
    const match = todos.find((todo)=>todo.id === reqId)
     if(!match){
        return res.status(404).json({success:false , msg : "required todo does not exist"})
    }
    const index = todos.indexOf(match)
    todos.splice(index,1)
    res.status(200).json({'success' :true, 'todolist' : todos})
}

module.exports = {
    displayTodo,
    specificTodo,
    createTodo,
    updateTodo,
    deleteTodo  
}