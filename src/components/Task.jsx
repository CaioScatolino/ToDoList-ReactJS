import { CheckCircle, Circle, CircleDashed, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.css";

export function Task({ id ,content, onDeleteTask, onCompleteTask, isComplete}) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleCompleteTask() {
    onCompleteTask();
  }


  return (
    <div className={styles.task}>
      <button>
        <Circle size={16} onMouseDown={handleCompleteTask} />
      </button>
      <p className= {styles.pendingTask}>
        {content}
      </p>
      <button onMouseDown={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </div>
  );
}
