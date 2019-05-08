const express = require('express')
const app = express()
const mongoose = require('mongoose')

const todoController = require('./controllers/todo')

const DB = 'todoapp'
const PORT = process.env.PORT || 3000

mongoose.connect(`mongodb://localhost:27017/${DB}`, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`connected to ${DB} database`));

app.use(express.urlencoded({ extended: true }))
app.use('/todos', todoController)

app.get('/', (req, res) => res.send('running...'))

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))