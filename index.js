require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const todoController = require('./controllers/todo')

const DB_NAME = process.env.DB_NAME
const PORT = process.env.PORT || 8000

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log(`connected to ${DB_NAME} database`));

app.use(express.urlencoded({ extended: true }))
app.use('/todos', todoController)

app.get('/', (req, res) => res.send('running...'))

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))