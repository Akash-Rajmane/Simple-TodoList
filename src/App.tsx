import React,{useState} from 'react';
import Header from "./Header";
import './App.css';
import InputField from './InputField';
import List from "./List";
import Footer from "./Footer"


export interface todo {
  todos: string[] ,
  setTodos?: React.Dispatch<React.SetStateAction<string[]>>,
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
 
    let id:string =  "p"+`${idx}`
    let p = document.getElementById(id)! as HTMLParagraphElement;
    p.setAttribute("contentEditable", "true");
    p.onmouseout = function (){
      if(p.contentEditable){
        p.setAttribute("contentEditable", "false");
      }
    };
     
  }
 

  return (
    <div className="App">
      <Header/>
      <InputField todos={todos} setTodos={setTodos} /> 
      <List todos={todos} editTodo={editTodo}  deleteTodo={deleteTodo}/>
      <Footer/>
    </div>
  );
}

export default App;
