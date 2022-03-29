import React, { useReducer } from 'react'
import Counter from './Counter';
const reducer=(state,action)=>{
    const {type}=action;
    switch(type){
        case "in":return state+1;
        case "de":return state-1;

        default: return state;
    }
}
let initial=0;
const App = () => {
const [state,dispatch]   = useReducer(reducer,initial);
  return <>
  <h1>value:{state}</h1>
  <button onClick={()=>dispatch({type:"in",})}>Increment</button>
  <button onClick={()=>dispatch({type:"de",})}>Decrement</button>
  <Counter/>
  </>
}

export default App