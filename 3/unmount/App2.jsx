// class component use kar rhe hai
/*
    Unmounting use kr rge gau

*/
import React, { Component } from 'react'
import { unmountComponentAtNode } from 'react-dom';
export class App2 extends Component {
  constructor(props){
    super(props);
    // yaha hum bind wale functions us ekar rhe hai 
    // hum inko call krne ke liye this.<function name> use karna hai
    this.in=this.in.bind(this);
    this.de=this.de.bind(this);
    
    this.state={
      count:0,
      id:"389hd76j3",
      cd:10000
    }
    console.log("constructor 1")
  }
  in(){
    this.setState(state=>({count:this.state.count+1}))

  }
  de(){
    this.setState(state=>({cd:state.cd-1}))
  }
static getDerivedStateFromProps(prop,state){
  console.log("getDerivedState 2",prop,state)
  return null;
}
componentDidUpdate(p,s,sd){
  console.log("mount 6 ",p,s,sd)
}
UNSAFE_componentWillUnmount(){
    console.log("i will unmount")
}
shouldComponentUpdate(prop,state){
  console.log(prop,state," should update")
  if(state.count>=5){
    return false;
  }
 else{ return true;}

}
componentDidMount(){
  console.log("mount 8")
}
getSnapshotBeforeUpdate(p,s){
  console.log("getsnap 5",p,s)
  return 90;
}
componentWillUnmount(){
    // this method will work at the end 
    console.log("going to unmount........")
  }
  render() {
    console.log("Render 4")
    return <>
    <div>
        <hr />
        <h1>....................................................................................................</h1>
      <h1>{this.props.name}</h1>
      <h1>count: {this.state.count}</h1>
      <h1>count: {this.state.cd}</h1>
      <button onClick={this.in}>increase value</button>
      <button onClick={()=>{
          unmountComponentAtNode(document.getElementById("root"))
      }}>uNMOUNT</button>
    </div>
    </>
  }
}
{/* <function or class name>.propTypes={
  name:pro.number.isRequired
} */}

export default App2