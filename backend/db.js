const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://eulerbutcooler:aightmate@cluster0.hcm7qwb.mongodb.net/todos?retryWrites=true&w=majority')

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)
module.exports = {
    todo
}