const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).send('<h1>Welcome to homepage</h1> <a href="http://localhost:5000/todo"> click here </a>')
})

module.exports = router