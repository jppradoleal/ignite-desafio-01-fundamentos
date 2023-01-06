import { NoResult } from './NoResult'
import { Todo, TodoItem } from './Todo'
import styles from './TodoContainer.module.css'

type TodoContainerProps = {
  todos: TodoItem[]
  onDeleteTodo: (id: number) => void
  onUpdateTodo: (id: number, isCompleted: boolean) => void
}

export function TodoContainer({
  todos,
  onDeleteTodo,
  onUpdateTodo,
}: TodoContainerProps) {
  const completedAmount = todos.filter(todo => todo.isCompleted).length

  return (
    <main className={styles.todoContainer}>
      <header className={styles.statsHeader}>
        <p>
          Tarefas criadas <span>{todos.length}</span>
        </p>
        <p>
          Concluídas <span>{completedAmount} de {todos.length}</span>
        </p>
      </header>

      {todos.length > 0 ? (
        todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdateTodo={onUpdateTodo}
            onDeleteTodo={onDeleteTodo}
          />
        ))
      ) : (
        <NoResult />
      )}
    </main>
  )
}
