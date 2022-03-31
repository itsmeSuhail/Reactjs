import React from 'react'
import Simple from "./Drawer/Persistent"
const App = () => {
    const Parent={
        Width:"100%",
        // border:"2px solid orange",
        height:"100vh"
    }
  return <div className="Sidbar" style={Parent}>
      {/* <h1 style={{textAlign:"center"}}>i'm Sidebar</h1> */}
      <Simple/>
  </div>
}

export default App