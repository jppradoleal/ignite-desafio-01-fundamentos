import { Trash } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import styles from './Todo.module.css'

export type TodoItem = {
  id: number
  isCompleted: boolean
  text: string
}

type TodoProps = {
  todo: TodoItem
  onDeleteTodo: (id: number) => void
  onUpdateTodo: (id: number, isCompleted: boolean) => void
}

export function Todo({ todo, onDeleteTodo, onUpdateTodo }: TodoProps) {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  function handleUpdateTodo (e:React.ChangeEvent<HTMLInputElement>) {
    const newIsCompleted = e.target.checked 
    setIsCompleted(newIsCompleted)
    onUpdateTodo(todo.id, newIsCompleted)
  }

  return (
    <div className={styles.todo}>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={handleUpdateTodo}
      />
      <p>{todo.text}</p>
      <button onClick={() => onDeleteTodo(todo.id)}>
        <Trash size={24} />
      </button>
    </div>
  )
}
