import Clipboard from '../assets/Clipboard.png'
import styles from './NoResult.module.css'

export function NoResult() {
  return (
    <section className={styles.noResult}>
      <img src={Clipboard} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </section>
  )
}
