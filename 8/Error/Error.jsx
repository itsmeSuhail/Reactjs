// yaha mai error boundry use kr rha hu
// error se bachne ke liye ek page bana lo
/*
1.state bana lo agar error true hai toh ek page show kr do
2.other wise sab thik chalta rahega

*/
import React, { Component, useState } from 'react'
export class App extends Component {
  constructor(props){
    super(props);
    this.state={
      hasError:false
      ,
      count:0
    }
  }
  static getDerivedStateFromError(error){
    console.log(error ,"hello");
    return {hasError:true};
  }
  componentDidCatch(error,info){
    console.log(error,info);
  }
  er=()=>{
    this.setState(state=>({
      count:state.count+1
    }))
  }
  render() {
    if(this.state.hasError){
      return <>
      <Errora/>
      </>
    }
    return <>
    
    <div>App</div>
      <h1>{this.state.count}</h1>
      <Button fun={this.er} count={this.state.count} />
    
    </>
  }
}
// ye error show karega
const Errora=()=>{
  return <>
  <h1 style={{textAlign:"center"}}>Error aa bhai</h1>
  <p style={{textAlign:"center"}}>Error 404</p>
  
  </>
}
// ye button counter ki value 5 hone pr error throw kr rha hai
const Button=(props)=>{
  if(props.count===5){
    throw new Error("i crashed.....")
  }
  return<>
  <h1>im counter{props.count}</h1>
  <button onClick={props.fun}>increase</button>
  
  </>
}
export default App