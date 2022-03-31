import React, { useState } from 'react'

const App = () => {
    const [info,setinfo]=useState({
        A:"",
        B:"",
        C:"",
        D:"",
        E:""
    })
    const Change=(e)=>{
        const {name,value}=e.target;
        console.log(name,value)
      setinfo((state)=>({
          ...state,[name]:value
      }))
    }
    const submit=()=>{
        alert("hello")
        const {...rest}=info;
        console.log(rest)
    }
  return <>
  <input placeholder='enter A' value={info.A} name='A' id='' onChange={Change} type="text" /><br/>
  <input placeholder='enter B' value={info.B} name='B' id='' onChange={Change} type="text" /><br/>
  <input placeholder='enter C' value={info.C} name='C' id='' onChange={Change} type="text" /><br/>
  <input placeholder='enter D' value={info.D} name='D' id='' onChange={Change} type="text" /><br/>
  <input placeholder='enter E' value={info.E} name='E' id='' onChange={Change} type="text" /><br/>
 <button onClick={submit}>Submit</button> 
  </>
}

export default App