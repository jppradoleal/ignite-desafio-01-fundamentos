import './global.css'

import { Header } from './components/Header'
import { TodoForm } from './components/TodoForm'
import { TodoContainer } from './components/TodoContainer'

function App() {
  const todos = [
    { id: 1, isCompleted: true, text: 'Lavar a louça' },
    { id: 2, isCompleted: false, text: 'Ir dormir' },
  ]
  return (
    <div className="App">
      <Header />
      <TodoForm />
      <TodoContainer todos={todos} />
    </div>
  )
}

export default App
