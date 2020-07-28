import express from 'express'

import { getTodos, updateTodo } from './controllers'

const todos = express.Router()

todos.get('/todos', getTodos)

todos.get('/todos/:id', (_, res) => {
  res.json({})
})

todos.post('/todos', (_, res) => {
  res.json([{}])
})

todos.put('/todos/:id', updateTodo)

todos.delete('/todos/:id', (_, res) => {
  res.json([{}])
})

export default todos
