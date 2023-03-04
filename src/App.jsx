import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import { Header } from "./components/Header";
// import reactLogo from './assets/react.svg'
import { Task } from "./components/Task";
import "./global.css";
import "./taskForm.css";

export function App() {
  const [tasks, setTasks] = useState(["Task dahora em"]);

  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask() {
    event.preventDefault();

    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
  }

  function handleNewTaskChange() {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function deleteTask(taskToDelete) {
    const tasksWithOutDeletedOne = tasks.filter((task) => {
      return task != taskToDelete;
    });

    setTasks(tasksWithOutDeletedOne);
  }

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
            <p>Tarefas Criadas</p> 0
          </div>

          <div class="concluidas">
            <p>Concluídas</p> 0
          </div>
        </div>

        <div class="listaTask">
          {tasks.map((task) => {
            return <Task key={task} content={task} onDeleteTask={deleteTask} />;
          })}
        </div>
      </div>
    </div>
  );
}
