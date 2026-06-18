const express = require('express')
const router = express.Router()
const {
    createTodo,
    updateTodo,
    deleteTodo,
    displayWeek,
    specificDay
                } = require('../controllers/todo.js')
router.route('/').get(displayWeek)

router.route('/:day/query').put(updateTodo)
                            .delete(deleteTodo)

router.route('/:day').get(specificDay)
                    .post(createTodo)
                    




module.exports = router