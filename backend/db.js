const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://eulerbutcooler:aightmate@cluster0.hcm7qwb.mongodb.net/todos')

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)
module.exports = {
    todo
}