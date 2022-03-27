// yaha mai usememo or usecallback ka use kar rha hu
/*
1.usememo value ko cache kr lega agar wo change nhi ho rhi toh
2.usecallback bhi value ko cache kr leta hai agar wo change nhi ho rhi toh
3.without usememo or callback ke ye fir se call hote hai page render hone par


*/
import React, { useCallback, useMemo, useState } from 'react'
const App = () => {
  const [save,setsave]=useState(0);
  const [save2,setsave2]=useState(0);

  const fun=()=>{
    console.log("again")
    for(var i=0;i<=1000;i++){
console.log("gamee")
    }
    console.log("tap")
    return "rihan"
  }
 const g=()=>{
   setsave(save+1)
 }
 const g2=()=>{
  setsave2(save2+1)
}
//usememo
//  const fu=useMemo(()=>fun(),[save2])
 const fu=useCallback(()=>fun(),[save2])

  return (
    <div>
<h1>{fu}</h1>
<h1>{save}</h1>
<h1>{save2}</h1>
<button onClick={()=>g()}>Call</button>
<button onClick={()=>g2()}>Call specail</button>

    </div>
  )
}

export default App