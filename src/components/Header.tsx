import Logo from '../assets/logo.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img className={styles.logo} src={Logo} alt="A rocket" />
    </header>
  )
}
