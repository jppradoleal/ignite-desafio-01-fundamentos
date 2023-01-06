import { NoResult } from './NoResult'
import { Todo, TodoItem } from './Todo'
import styles from './TodoContainer.module.css'

type TodoContainerProps = {
  todos: TodoItem[]
}

export function TodoContainer({ todos }: TodoContainerProps) {
  return (
    <main className={styles.todoContainer}>
      <header className={styles.statsHeader}>
        <p>
          Tarefas criadas <span>0</span>
        </p>
        <p>
          Concluídas <span>0</span>
        </p>
      </header>

      {todos.length > 0 ? (
        todos.map(todo => <Todo key={todo.id} todo={todo} />)
      ) : (
        <NoResult />
      )}
    </main>
  )
}
