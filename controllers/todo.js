const express = require('express')
const Todo = require('./../models/todo')

const router = express.Router()

router.get('/', (req, res) => {
    Todo.find({}, (err, todos) => {
        err ? res.status(500).send(err) : res.send(todos)
    })
})

module.exports = router