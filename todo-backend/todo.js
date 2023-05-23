const express = require('express')
const todoRouter = express.Router()
const {v4: uuidv4} = require('uuid')
const todoData = require('./todoData')
todoRouter.use(express.json())


// GET Requests

todoRouter.get('/', (req, res) =>{
    res.send(todoData)
})

todoRouter.get('/:todoId', (req, res) =>{
    const todoId = req.params.todoId
    const foundTodo = todoData.find(item => item._id === todoId)
    res.send(foundTodo)
})

todoRouter.get('/search/completed', (req, res) =>{
    const completed = req.query.completed
    const filteredTodo = todoData.filter(item => item.completed == completed)
    res.send(filteredTodo)
})

// POST Request

todoRouter.post('/', (req, res) =>{
    const newTodo = req.body
    newTodo._id = uuidv4()
    todoData.push(newTodo)
    res.send(`${req.body.name} has been added`)
})

// DELETE Request

todoRouter.delete('/:todoId', (req, res) =>{
    todoId = req.params.todoId
    const todoIndex = todoData.findIndex(item => item._id === todoId)
    todoData.splice(todoIndex, 1)
    res.send('Successfully removed from database')
})

// PUT Request

todoRouter.put('/:todoId', (req, res) =>{
    const todoId = req.params.todoId
    const todoIndex = todoData.findIndex(item => item._id === todoId)
    const updatedTodo = Object.assign(todoData[todoIndex], req.body)
    res.send(updatedTodo)
})

module.exports = todoRouter