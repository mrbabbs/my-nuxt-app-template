<template>
  <div class="container">
    <ul>
      <Todo
        v-for="todo in todos"
        :id="todo.id"
        :key="todo.id"
        :completed="todo.completed"
        :completed-date="todo.completedAt"
        :created-date="todo.createdAt"
        @toggle="toggleTodo(todo.id)"
      >
        {{ todo.text }}
      </Todo>
    </ul>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex'
import Vue from 'vue'

export default Vue.extend({
  async fetch() {
    await this.initTodos()
  },
  computed: {
    ...mapGetters({
      todos: 'todos/todos',
    }),
  },
  methods: {
    ...mapActions({
      toggleTodo: 'todos/toggleTodo',
      initTodos: 'todos/initTodos',
    }),
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
