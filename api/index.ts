import express from 'express'
import bodyParser from 'body-parser'
import todos from './todos'

const app = express()

app.use(bodyParser.json())
app.use('/v1', todos)

export default {
  path: '/api',
  handler: app,
}
