import { Circle, Trash } from "phosphor-react";
import styles from "./Task.module.css";

export function Task({ content, onDeleteTask }) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <div className={styles.task}>
      <button>
        <Circle size={16} />
      </button>
      <p>{content}</p>
      <button onMouseDown={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </div>
  );
}
