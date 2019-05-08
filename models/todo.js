const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
}, { timestamps: true })

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo