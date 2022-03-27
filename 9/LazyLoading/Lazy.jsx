import React, { useEffect } from 'react'
const Lazy = () => {
    useEffect(()=>{
        for(var i=0;i<1000;i++){}
    },[])
  return<>
  <h1 style={{textAlign:"center"}}>i'm lazy </h1>
  </>
}

export default Lazy