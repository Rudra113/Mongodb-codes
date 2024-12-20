import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";
import { Wow } from "./models/Wow.js";

let conn = await mongoose.connect("mongodb://localhost:27017/")


const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({ title: "Title of First todo", desc: "Description of this todo", isDone: false, days: Math.floor(Math.random() * 45 + 5 * Math.random()) })
    todo.save()
    res.send('Hello World!')
})
app.get('/a', async (req, res) => {
    let todo = await Todo.findOne({})
    console.log(todo)
    res.json({ title: todo.title, desc: todo.desc })
})
app.get('/wow', (req, res) => {
    const wow = new Wow({ desc: "Description of this wow", isDone: false, days: 5 })
    wow.save()
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})