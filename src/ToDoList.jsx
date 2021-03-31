import React from "react";
import App from "./App.jsx"

import "./index.css"

const ToDoList=(props)=>
{
  
return (
<>
<div className="todo-style">
<i className="fa fa-times" onClick={()=>props.onSelect(props.id)}></i>
<li> {props.te} </li>

</div>
</>
)
}
export default ToDoList;