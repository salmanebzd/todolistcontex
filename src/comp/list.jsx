import React,{useContext} from 'react'
import Listitem from './Listitem'
import { Datacontext } from './dataprovider'



export default function List() {
  const [todos,settodos]=useContext(Datacontext)
  const switchcomlete =id=>{
    const newtodos = [...todos]
    newtodos.forEach((todo,index)=>{
      if(index === id){
        todo.complete = !todo.complete
      }
    })
    settodos(newtodos)
  }
  const handleedittodos = (editvalue,id)=>{
    const newtodos = [...todos]
    newtodos.forEach((todo,index)=>{
      if(index === id){
        todo.name = editvalue
      }
    })
    settodos(newtodos)
  }
  return (
    <div>
        <ul>
          {
            todos.map((todo,index)=>(
              <Listitem todo={todo} key={index} id={index} checkcomplete={switchcomlete} handleedittodos={handleedittodos}/>
            ))
          }
        </ul>
    </div>
  )
}


