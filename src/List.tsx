import "./App.css";
import {todo as props} from "./App";
import {FaEdit} from "react-icons/fa"
import {MdDelete} from "react-icons/md";


const List = ({todos,editTodo,deleteTodo}:props): JSX.Element => {


  return (
    <div className='list-box'>
        {   
            todos.map((el:any,index:number)=>{
                return(
                    <div key={index} className="list">
                        <input type="checkbox"/>
                        <p contentEditable="false" id={"p"+`${index}`}>{el}</p>
                        <i className='icon' onClick={()=>editTodo(index)}><FaEdit/></i>
                        <i className='icon' onClick={()=>deleteTodo(index)}><MdDelete/></i>
                    </div>
                )}
            )
        }
    </div>
  )
}

export default List;



