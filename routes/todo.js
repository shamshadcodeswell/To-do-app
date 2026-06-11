const express = require('express')
const router = express.Router()
const {
    displayTodo,
    specificTodo,
    createTodo,
    updateTodo,
    deleteTodo
                } = require('../controllers/todo.js')

router.route('/').get(displayTodo)
                 .post(createTodo)

router.route('/:id').get(specificTodo)
                    .put(updateTodo)
                    .delete(deleteTodo)

module.exports = router