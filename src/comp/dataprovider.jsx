import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react'


export const Datacontext = createContext();
export const Dataprovider=(props)=> {
    const [todos,settodos]=useState([])
    
    useEffect(()=>{
        const todostore=JSON.parse(localStorage.getItem("todostore"))
        if(todostore) settodos(todostore)
    },[])
    useEffect(()=>{
        localStorage.setItem("todostore",JSON.stringify(todos))
    },[todos])
    
  return (
    <Datacontext.Provider value={[todos,settodos]}>
        {props.children}
    </Datacontext.Provider>
  )
}
