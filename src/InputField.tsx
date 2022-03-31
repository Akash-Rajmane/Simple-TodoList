import React,{useState} from 'react';
import "./App.css";
//import { todo as props} from './App';

interface props{
  todos: string[],
  setTodos: React.Dispatch<React.SetStateAction<string[]>>
}


const InputField = ( {todos, setTodos}:props ):JSX.Element => {
  const [task, setTask] = useState<string>("");
  

  const addTodo = () => {
   // e.preventDefault();
    setTodos([...todos,task]);
   // setTask(" ");
  }

 

  return (
    <div className='input-box'>
        <input type="text" placeholder=' ...Add Task' onChange={e=>setTask(e.target.value)}/>
        <button className="add-btn" onClick={addTodo}>Add</button>
    </div>
  )
}

export default InputField;