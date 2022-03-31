import React from 'react';
import {FcTodoList} from "react-icons/fc";

const Header = () => {
  return (
    <div className='header'>
    <h1><i><FcTodoList/></i> <span> Todo List</span></h1>
    </div>
  )
}

export default Header;