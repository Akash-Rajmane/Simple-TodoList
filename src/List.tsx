import React from 'react';
import "./App.css";
import {todo as props} from "./App";
import {FaEdit} from "react-icons/fa"
import {MdDelete} from "react-icons/md"

const List = ({todos,editTodo,deleteTodo}:props): JSX.Element => {

  return (
    <div>
        {   
            todos.map((el:any,index:number)=>{
                return(
                    <div key={index} className="list">
                        <p contentEditable="false">{el}</p>
                        <i onClick={()=>editTodo(index)}><FaEdit/></i>
                        <i onClick={()=>deleteTodo(index)}><MdDelete/></i>
                    </div>
                )}
            )
        }
    </div>
  )
}

export default List;
