let  todos = require('../data.js')

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
    const {id,title,completed} = req.body
    todos.push({id : id, title : title, completed: completed})
    res.status(200).send(todos)
}
const updateTodo = (req,res)=>{
    const reqId = Number(req.params.id)
    const {id,title,completed} = req.body
    const match = todos.find((todo)=>todo.id === reqId)
     if(!match){
        return res.status(404).json({success:false , msg : "required todo does not exist"})
    }
    const index = todos.indexOf(match)
    if (id !== undefined) todos[index].id = id
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
    const updateTodo = todos.filter((todo)=>todo.id !== reqId)
    todos = [];
    let i= 0;
    for (const todo of updateTodo) {   
        todos[i] = todo
        i++; 
    }
    res.status(200).json({'success' :true, 'todolist' : todos})
}

module.exports = {
    displayTodo,
    specificTodo,
    createTodo,
    updateTodo,
    deleteTodo  
}