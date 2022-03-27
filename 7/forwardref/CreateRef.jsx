// class use kr rha hu
// ham class ka use kr ke apne child ke saare function use kr sakte hai
// createref pass karo or child ke saare functions access kr lo
// function mai child ke functions access krne ke liye hame
// useimperativehandle use krna hoga taki child ke function mil sake

import React, { Component, createRef } from 'react'

export class App extends Component {
  constructor(props){
    super(props);
    this.parent=createRef()
  }
  ok=()=>{
    this.parent.current.ShowAler()
    console.log(this.parent.current)
  }
  render() {
    return <>
    <h1>parent</h1>
    <button onClick={this.ok}>Check</button>
    <Child ref={this.parent}/>
    
    </>
  }
}

class Child extends Component{
  constructor(props){
    super(props);
    this.state={
      counter:0,
      name:"child"
    }
    this.click=this.click.bind(this)
  }
  click(){
    this.setState(state=>({
      counter:state.counter+1
    }))
  
  
  
  
  
  
  
  
  }
  ShowAler(){
    console.log("50-50")
    alert("alert")
  }
  render(){
    return<>
    <h1>{this.state.counter}</h1>
    <h1>{this.state.name}</h1>
    <button onClick={this.click}>Increase</button>
    </>
  }
}
export default App