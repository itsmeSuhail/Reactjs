// yaha pr mai forward ref or useimperativehandle ka use kr rha hu
/*
1.agar aap child ke functions acces krna chahte ho toh forwardref or useimerativehandle use karo
2.agar aap kisi component mai ref pass kr rhe ho toh us component ko forward ref use krna hi padega
3.forward ref use kr ke ham  bahut sari functionalities access kr sakte hai
im(ref,()=>({
  // define function
}))

*/

import React, { forwardRef, useRef ,useImperativeHandle} from 'react'
const Button=forwardRef((props,ref)=>{
  useImperativeHandle(
    ref,
    () => ({
        showAlert() {
            alert("Child function called")
        }
     }),
 )
 return <>
 <button >Click me also</button>
 </>
})
const App = () => {
    const refo=useRef();
    const check=()=>{
      refo.current.showAlert()
      console.log(refo)
    }
  return (
    <div>
        <h1>we are using forward ref</h1>
        <Button name={"i'm button"} ref={refo}/>
        <button onClick={()=>check()}>details</button>
    </div>
  )
}

export default App