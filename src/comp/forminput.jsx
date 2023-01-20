import React,{useState,useContext,useRef,useEffect} from 'react'
import { Datacontext } from './dataprovider'


export default function Forminput() {
const [todos,settodos]=useContext(Datacontext);
const [todoname,settodoname]=useState("");
const todoinput=useRef();
const addtodo = e =>{
  e.preventDefault();
  settodos([...todos,{name:todoname,complete:false}])
  settodoname("");
  todoinput.current.focus();
}
useEffect(()=>{
  todoinput.current.focus();
},[])
  return (
    <div>
        <form autoComplete='off' onSubmit={addtodo}>
          <input type="text" name='todos' id='todo' ref={todoinput} required 
          placeholder='what tasks you finish ?' value={todoname} 
          onChange={e=>settodoname(e.target.value.toLowerCase())}/>
          <button type='submit'>Create</button>
        </form>
    </div>
  )
}
