const express = require('express')
const app = express()
const homeRouter = require('./routes/auth')
const todoRouter = require('./routes/todo')



app.use(express.json())

app.use('/',homeRouter)
app.use('/todo',todoRouter)



app.listen(5000, ()=>{
    console.log('server started listening to port 5000');
    
})