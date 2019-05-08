const express = require('express')
const Todo = require('./../models/todo')

const router = express.Router()

// INDEX
router.get('/', (req, res) => {
    Todo.find({}, (err, todos) => {
        err ? res.status(500).send(err) : res.send(todos)
    })
})

// CREATE
router.post('/new', (req, res) => {
    Todo.create(req.body, (err, todo) => {
        err ? res.status(500).send(err) : res.send(todo)
    })
})

// SHOW
router.get('/:id', (req, res) => {
    Todo.findById(req.params.id, (err, todo) => {
        err ? res.status(500).send(err) : res.send(todo)
    })
})

// DELETE
router.delete('/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id, (err, todo) => {
        err ? res.status(500).send(err) : res.send(todo)
    })
})

// UPDATE
router.put('/:id', (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, todo) => {
        err ? res.status(500).send(err) : res.send(todo)
    })
})

module.exports = router