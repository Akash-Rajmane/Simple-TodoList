import React, { useState } from "react";
import "./App.css";

interface props {
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
}

const InputField = ({ todos, setTodos }: props): JSX.Element => {
  const [task, setTask] = useState<string>("");
  let input = document.getElementById("input")! as HTMLInputElement;

  const addTodo = (e:any) => {
    if(input.value===""){
      alert("please enter the task");
      return;
    }
    setTodos([...todos, task]);
    input.value = "";
  };

  return (
    <div className="input-box">
      <input
        id="input"
        type="text"
        placeholder=" ...Add Task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="add-btn" onClick={addTodo}>
        Add
      </button>
    </div>
  );
};

export default InputField;
