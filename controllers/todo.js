const express = require('express')
const Todo = require('./../models/todo')

const router = express.Router()

router.get('/', (req, res) => {
    Todo.find({}, (err, todos) => {
        err ? res.status(500).send(err) : res.send(todos)
    })
})

router.post('/new', (req, res) => {
    Todo.create(req.body, (err, todo) => {
        err ? res.status(500).send(err) : res.send(todo)
    })
})

module.exports = router