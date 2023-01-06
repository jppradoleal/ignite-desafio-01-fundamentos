import './global.css'

import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TodoContainer } from './components/TodoContainer'
import { useState } from 'react'
import { TodoItem } from './components/Todo'

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, isCompleted: true, text: 'Lavar a louça' },
    { id: 2, isCompleted: false, text: 'Ir dormir' },
  ])

  const [controlId, setControlId] = useState(3)

  function onAddTodo(todoText: string) {
    const todoItem: TodoItem = {
      id: controlId,
      text: todoText,
      isCompleted: false,
    }

    setControlId(controlId => controlId + 1)

    setTodos(todos => [...todos, todoItem])
  }

  function onDeleteTodo(id: number) {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  function onUpdateTodo(id: number, isCompleted: boolean) {
    setTodos(todos => {
      return todos.map(todo => {
        if (todo.id == id) {
          todo.isCompleted = isCompleted
        }

        return todo
      })
    })
  }

  return (
    <div className="App">
      <Header />
      <TodoForm onAddTodo={onAddTodo} />
      <TodoContainer
        todos={todos}
        onDeleteTodo={onDeleteTodo}
        onUpdateTodo={onUpdateTodo}
      />
    </div>
  )
}

export default App
