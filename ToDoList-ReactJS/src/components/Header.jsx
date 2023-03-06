import styles from './Header.module.css'
import toDoListLogo from '../images/Logo.svg'

export function Header() {
    return (
      <div className={styles.header}>
        <img src={toDoListLogo} alt="" />
      </div>
    ); 
}