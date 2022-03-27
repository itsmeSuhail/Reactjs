import React from 'react'
import High from './High'
const App = (props) => {
  console.log(props," dev props")
  return (
    <div>
      
      <h1>{props.name.name}</h1>
      <h1>{props.name.counter}</h1>
      <button onClick={props.in}>Increase</button><button onClick={props.de}>Decrease</button>
    </div>
  )
}

export default High(App);