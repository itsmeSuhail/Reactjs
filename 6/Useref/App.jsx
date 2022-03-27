// yaha pr ham useref ka use kr rhe hai 
/*
1.useref kisi bhi tag pr laga do
2.agar kisi pr useref laga hua hai then ham sari property access kr sakte hai
3.ref.current.click()
4.ref.current.innerTex="change"
*/
import React, { useRef } from 'react'
const App = () => {
  const dev=useRef()
  const c=()=>{
    dev.current.style.border="2px solid orange"
  }
  return (
    <div>
<h1 ref={dev} onClick={()=>{c()}}>pro hai apan</h1>
        <button 
        // onclick
        onClick={()=>{
        dev.current.click()
        console.log(dev.current.innerText)
        }}

        >tag change</button>

    </div>
  )
}

export default App