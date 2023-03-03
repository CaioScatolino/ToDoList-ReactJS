import { Circle, Trash } from "phosphor-react";
import styles from './Task.module.css'

export function Task(props) {
  console.log(props);

  return (
    <div className={styles.task}>
      <button><Circle/></button>
      <p>Essa é uma task do {props.author}</p>
      <button><Trash/></button>
    </div>
  );
}
