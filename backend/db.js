
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  
const mongoose = require('mongoose')

mongoose.connect(process.env.VITE_APP_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)
module.exports = {
    todo
}