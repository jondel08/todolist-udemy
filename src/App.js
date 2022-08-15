import { useEffect, useState } from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Container from "./components/Container";
import Header from "./components/Header";
import InputTask from "./components/InputTask";
import { cleanup } from "@testing-library/react";
import TaskContent from "./components/TaskContent";

function App() {

  //pasar las tareas a localStorage
  let initialTasks = JSON.parse(localStorage.getItem("tasks"));

  if (!initialTasks){
    initialTasks = [];
  }

  const [tasks, setTasks] = useState(initialTasks);

  const createTask = (task) => {
    setTask([...tasks, task]);
  }

  useEffect(() => {
    if(initialTasks){
      localStorage.setItem("tasks". JSON.stringify(tasks));
    }else{
      localStorage.setItem("tasks". JSON.stringify([]));
    }
  }, [initialTasks, tasks])

  const deleteTask = ()=>{

  } 

  return (
    <Container>
      <Header />
      <InputTask createTask={createTask}/>
      <TaskContent task={tasks} deleteTask={deleteTask}/>
    </Container>
  );
}

export default App;
