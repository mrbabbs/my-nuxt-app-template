import { Request, Response } from 'express'
const todos = [
  {
    id: 1,
    text: 'Hello World',
    completed: false,
    createdAt: new Date('2020-06-05').toISOString(),
  },
  {
    id: 2,
    text: 'Ciao mondo',
    completed: true,
    createdAt: new Date('2020-07-08').toISOString(),
    completedAt: new Date('2020-07-28').toISOString(),
  },
]

export function getTodos(_: Request, res: Response) {
  res.json(todos)
}

export function updateTodo(req: Request, res: Response) {
  const id = Number(req.params.id)
  const todoIdx = todos.findIndex((t) => t.id === id)
  const todo = req.body

  todos[todoIdx] = { ...todos[todoIdx], ...todo }
  res.status(204).send()
}
