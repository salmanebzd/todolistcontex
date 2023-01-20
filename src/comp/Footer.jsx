import React,{useContext,useState} from 'react'
import {Datacontext} from "./dataprovider"
export default function Footer() {
  const [checkall,setcheckall]=useState(false)
  const [todos,settodos]=useContext(Datacontext)

  const handlecheckall =()=>{
    const newtodos =[...todos]
    newtodos.forEach(todo=>{
      todo.complete = !checkall
    })
    settodos(newtodos)
    setcheckall(!checkall)
  }
  const newtodoscomplete = ()=>{
    return todos.filter(todo => todo.complete === false)
  }
  const deletetodo =()=>{
    settodos(newtodoscomplete())
    setcheckall(false)
  }
  return (
    <>
    {
      todos.length === 0 ? <h2>Congrat nothing to do</h2> 
      :<div className="row">
          <label htmlFor="all">
              <input type="checkbox" name="all" id="all" onChange={handlecheckall} checked={checkall}/>
                All
          </label>
            <p>you have {newtodoscomplete().length} to do </p>
            <button id='delete' onClick={deletetodo}>Delete</button>
        </div>
    }
    </>
    
          
    
  )
}
