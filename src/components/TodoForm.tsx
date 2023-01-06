import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import styles from './TodoForm.module.css'

type TodoFormProps = {
  onAddTodo: (text: string) => void
}

export function TodoForm({ onAddTodo }: TodoFormProps) {
  const [todoText, setTodoText] = useState('')

  function handleAddTodo(e: FormEvent) {
    e.preventDefault()

    onAddTodo(todoText)

    setTodoText('')
  }

  return (
    <form className={styles.todoForm} onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} weight={'bold'} />
      </button>
    </form>
  )
}
