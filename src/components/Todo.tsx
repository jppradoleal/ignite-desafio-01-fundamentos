import { Trash } from 'phosphor-react'
import styles from './Todo.module.css'

export type TodoItem = {
  id: number
  isCompleted: boolean
  text: string
}

type TodoProps = {
  todo: TodoItem
}

export function Todo({ todo }: TodoProps) {
  return (
    <form className={styles.todo}>
      <input type="checkbox" checked={todo.isCompleted} />
      <p>{todo.text}</p>
      <Trash size={24} />
    </form>
  )
}
