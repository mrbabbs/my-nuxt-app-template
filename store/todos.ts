import axios from 'axios'
const INIT_TODOS = 'INIT_TODOS'
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const UPDATE_TODO = 'TOGGLE_TODO'

interface Todo {
  id: number
  text: string
  createdAt: string
  completedAt: string
  completed: boolean
}

interface State {
  todos: Todo[]
}

export const state = () => ({
  todos: [],
})

export const mutations = {
  [INIT_TODOS](state: State, todos: Todo[]) {
    state.todos = todos
  },
  [ADD_TODO](state: State, todo: Todo) {
    state.todos.push(todo)
  },
  [REMOVE_TODO](state: State, id: number) {
    state.todos = state.todos.filter((t) => t.id !== id)
  },
  [UPDATE_TODO](state: State, todo: Todo) {
    const idx = state.todos.findIndex((t) => t.id === todo.id)
    state.todos[idx] = todo

    console.log(state.todos[idx])
  },
}

export const getters = {
  todos: (state: State) => state.todos,
}

export const actions = {
  async initTodos({ commit }: any) {
    const { data } = await axios.get('http://localhost:3000/api/v1/todos')
    await commit(INIT_TODOS, data)
  },
  async createTodo({ commit }: any, todo: Todo) {
    await commit(ADD_TODO, todo)
  },
  async deleteTodo({ commit }: any, id: number) {
    await commit(REMOVE_TODO, id)
  },
  async toggleTodo({ commit, state }: any, id: number) {
    const todo = state.todos.find((t: Todo) => t.id === id)
    if (!todo) {
      return
    }
    const completed = !todo.completed
    const updatedTodo = {
      ...todo,
      completed,
      completedAt: completed ? new Date().toISOString() : '',
    }

    await axios.post(`http://localhost:3000/api/v1/todos/${id}`, updatedTodo)
    await commit(UPDATE_TODO, updatedTodo)
  },
}
