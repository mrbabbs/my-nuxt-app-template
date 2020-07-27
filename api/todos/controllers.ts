import { Request, Response } from 'express'

export function getTodos(_: Request, res: Response) {
  res.json([
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
  ])
}
