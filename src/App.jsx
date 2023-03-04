import { CheckCircle, CircleDashed, PlusCircle } from "phosphor-react";
import { useState } from "react";
import { Header } from "./components/Header";
// import reactLogo from './assets/react.svg'
import { Task } from "./components/Task";
import "./global.css";
import "./taskForm.css";

export function App() {
  const [tasks, setTasks] = useState([]);

  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask() {
    event.preventDefault();

    const newTask = {
      id: Math.random(),
      content: newTaskText,
      isComplete: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  }

  function handleNewTaskChange() {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function deleteTask(id) {
    const tasksWithOutDeletedOne = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(tasksWithOutDeletedOne);
  }

  function CompleteTask(id) {
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, isComplete: !task.isComplete } : task
    );
    setTasks(newTasks);
  }

  let count = 0;
  tasks.map((task) => {
    if (task.isComplete === true) {
      count++;
    }
  });

  return (
    <div>
      <header>
        <Header />
      </header>

      <form class="adicionarTask" onSubmit={handleCreateNewTask}>
        <input
          class="inputTask"
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleNewTaskChange}
          value={newTaskText}
          required
        />
        <button class="botaoEnviar" type="submit">
          {" "}
          <span>Criar</span> <PlusCircle size={16} />{" "}
        </button>
      </form>

      <div class="resumoTask">
        <div class="statusTask">
          <div class="criadas">
            <p>Tarefas Criadas</p> <span>{tasks.length}</span>
          </div>

          <div class="concluidas">
            <p>Concluídas</p>{" "}
            <span>
              {" "}
              {count} de {tasks.length}
            </span>
          </div>
        </div>

        <div>
          {tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                content={task.content}
                isComplete={task.isComplete}
                onDeleteTask={deleteTask}
                onCompleteTask={CompleteTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
