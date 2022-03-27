// yaha pr mai code splitting krne wala hu
// import method use karenge 
// lazy loading ka bhi use karenge isme


import React, { Suspense } from 'react'
import("./Method").then(mul=>{
  console.log(mul.Method(5,5));
})
const Load=React.lazy(()=>import("./Lazy"))
const App = () => {
  return<>
  <h1>parent going to use suspense</h1>
  <Suspense fallback={<h1>loading......</h1>}>

<Load/>
  </Suspense>
  
  </>
}

export default App