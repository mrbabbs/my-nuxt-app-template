import express from 'express'

import { getTodos } from './controllers'

const todos = express.Router()

todos.get('/todos', getTodos)

todos.get('/todos/:id', (_, res) => {
  res.json({})
})

todos.post('/todos', (_, res) => {
  res.json([{}])
})

todos.put('/todos/:id', (_, res) => {
  res.json([{}])
})

todos.delete('/todos/:id', (_, res) => {
  res.json([{}])
})

export default todos
