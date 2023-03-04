import { CheckCircle, Circle, CircleDashed, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.css";

export function Task({
  id,
  content,
  onDeleteTask,
  onCompleteTask,
  isComplete,
}) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleCompleteTask() {
    onCompleteTask(id);
  }

  console.log(isComplete);
  return (
    <div className={styles.task}>
      <label className={styles.container}>
        <input
          type="checkbox"
          readOnly
          checked={isComplete}
          onClick={handleCompleteTask}
        />
        <span className="checkmark"></span>
      </label>

      <p className={isComplete ? styles.concludedTask : styles.pendingTask}>
        {content}
      </p>
      <button onMouseDown={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </div>
  );
}
