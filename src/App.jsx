import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import { Header } from "./components/Header";
// import reactLogo from './assets/react.svg'
import { Task } from "./components/Task";
import "./global.css";
import "./taskForm.css";

export function App() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <form class="adicionarTask">
        <input
          class="inputTask"
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button class="botaoEnviar" type="submit">
          {" "}
          <span>Criar</span> <PlusCircle size={16} />{" "}
        </button>
      </form>

      <div class="resumoTask">
        <div class="statusTask">
          <div class = "criadas">
            <p>Tarefas Criadas</p> 0
          </div>

          <div class = "concluidas">
            <p>Concluídas</p> 0
          </div>
        </div>

        <div class="listaTask">

          <Task author="Caio" />
          <Task author="Tevez" />
        </div>
      </div>
    </div>
  );
}
