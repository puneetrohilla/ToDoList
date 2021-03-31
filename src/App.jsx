import React, { useState } from "react";
import "./index.css"
import ToDoList from "./ToDoList.jsx"
const App=()=>
{
    const[inputList,setInputList]=useState("");
    const[items,setItems]=useState([]);

    const inputEvent=(event)=>
    { 
        let val=event.target.value;
        setInputList(val);
    }
    const deleteItems=(id)=>
    {
console.log("deleted");
setItems((oldelements)=>{
    return oldelements.filter((arrElem,index)=>{
 return index!==id;
    });
});
    }
    const listOfItems=()=>
    {
  setItems((oldelements)=> //oldelements takes the value of usestate previous
 {
     
return [...oldelements,inputList]
 });
 setInputList("");
    }
    return(
        <>
<div className="main-div">
<div className="center-div"> <br />
<h1> ToDo List</h1>
<input type="text" onChange={inputEvent} placeholder="Add a item " value={inputList}/>
<button onClick={listOfItems}> +</button>

   <ol>
    {/* <li>{inputList}</li> */}

    {
        items.map((itemVal,index) =>
      { return(
          <ToDoList te={itemVal} key={index} id={index} onSelect={deleteItems}/>
      )
       }
    )
    }
   </ol>
            <br />
            </div>
            </div>
        </>
);
}
export default App;