import React,{useState} from 'react';
import Header from "./Header";
import './App.css';
import InputField from './InputField';
import List from "./List";


export interface todo {
  todos: string[] ,
  setTodos?: React.Dispatch<React.SetStateAction<string[]>>,
 // flag?: boolean,
  editTodo?: any,
  deleteTodo?: any
}



function App() {
  const [todos, setTodos] = useState<Array<string>>([]);
  

  const deleteTodo = (idx:number) => {
    let finalList = todos.filter((el:any,index:any)=>{
      return index!==idx;
    });
    setTodos(finalList);
   // console.log(finalList);
  }

  
  const editTodo = (idx:number) => {
    let editedTodo:any = todos.find((el:any,index:any)=>{
       return index===idx;
    }) ;
    console.log(editedTodo);
    //let p = document.getElementById()
    editedTodo.p.setAttribute("contentEditable", "true");

  }
 

  return (
    <div className="App">
      <Header/>
      <InputField todos={todos} setTodos={setTodos} /> 
      <List todos={todos} editTodo={editTodo}  deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
