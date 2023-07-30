import React ,{useState} from "react"
import Todo from './Components/Todo'
import Search from './Components/Search'
function App() {

  const [todo,updateTodo] =useState([])
  const [input,updateInput]=useState()


  const add1=()=>
  {
    updateTodo((prev)=>
    
      [...prev,input]
    )
  }

const delete1=(index)=>
{
let dupli=[...todo]
dupli.splice(index,1)
updateTodo(dupli)
}

  return (
   <>

  <Search input={input} updateInput={updateInput} add1={add1}/>
  <Todo todo={todo} delete1={delete1}/>

   


   </>
  );
}

export default App;
