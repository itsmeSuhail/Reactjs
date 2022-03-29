import React, { useEffect } from 'react'
import {Useshop} from "./Context";
const App = () => {
    const data=Useshop();
    console.log(data, "hey")
    useEffect(()=>{
        data.add()
    },[])
  return <>
  
  <h1>we are going to use useContext with useReducer</h1>
  {
      data.state.products?.map((x,index)=>(
          <h1 key={x+""+index}>hello</h1>
      ))
  }
  </>
}

export default App