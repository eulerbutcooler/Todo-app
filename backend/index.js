const express = require('express');
const { createTodo, updateTodo } = require('./types');
const {todo} = require('./db');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const path = require('path')

app.use(express.json())
app.use(cors());

app.use(express.static(path.join(__dirname, '../frontend/dist')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.post("/todo", async (req,res)=>{
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    
    const newTodo = await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json(newTodo)
})

app.get("/todos", async (req,res)=>{
    const todos = await todo.find();
    console.log(todos);
    res.json(todos);
})

app.put("/completed", async (req, res) => {
    const { _id } = req.body;

    try {
        await todo.updateOne({ _id }, { completed: true });
        res.json({ msg: "Todo marked as completed" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Failed to mark todo as done" });
    }
});

app.delete("/todo", async (req, res) => {
    const { _id } = req.body;

    try {
        await todo.deleteOne({ _id });
        res.json({ msg: "Todo deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Failed to delete todo" });
    }
});

app.get('*', (req, res) => {
    res.send('Route not found');
  });

app.listen(port);