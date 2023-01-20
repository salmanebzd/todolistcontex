import React,{useState} from 'react'

export default function Listitem({todo,id,checkcomplete,handleedittodos}) {
  const [onedit,setonedit]=useState(false)
  const [editvalue,seteditvalue]=useState(todo.name)
  const handleonedit=()=>{
      setonedit(true)
  }
  const handlesave = id=>{
    setonedit(false)
    if(editvalue){
      handleedittodos(editvalue,id)
    }else{
      seteditvalue(todo.name)
    }
  }
  if(onedit){
    return (
      <li>
          
            <input type="text" id='editvalue' value={editvalue} name="editvalue" onChange={e=>seteditvalue(e.target.value.toLowerCase())}/>
            {todo.name}
          <button onClick={()=>handlesave(id)}>save</button>
      </li>
)
  }else{
     return (
        <li>
            <label htmlFor={id} className={todo.complete ? "active" :""}>
              <input type="checkbox" id={id} checked={todo.complete} onChange={()=>checkcomplete(id)} />
              {todo.name}
            </label>
            <button disabled={todo.complete} onClick={handleonedit}>Edit</button>
        </li>
  )
  }
 
}
