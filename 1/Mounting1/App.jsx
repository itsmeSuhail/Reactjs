// class use ki hai isme 
// yah pr mounting ke saare function likhe hai 
// parent props pass kr rha hai name property hai props.name
// isme proptype bhi use kiya hai
          /*
          1.constructor
          2.getDerivedStateFromProps();
          3.render
          4.componendDidMount();
          5.proptype
          */
import React, { Component } from 'react'
import Pro from "prop-types";
import Child from './Child';
export class App extends Component {
  constructor(props){
    super(props);
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
componentDidMount(){
  console.log("mount 4")
}
  render() {
    console.log("Render 3")
    return <>
    <div>
      <h1>{this.props.name}</h1>
      <h1>count: {this.state.count}</h1>
      <h1>count: {this.state.cd}</h1>
      <button onClick={this.in}>increase value</button>
      <button onClick={this.de}>decrease value</button>
      {/* 
        .child ko 2 props pass kiye hai
        .jo value child ko nhi mil rhi hai uske change hone pr child update nhi hoga 
        .bs getderivedstate function call hoga page render nhi hoga
        .other wise value pass ki hogi child mai
        .or parent se update ho rhi hai toh child render hoga
      
      
      */}
      <Child name="raju" paper={this.state.count}/>

    </div>
    </>
  }
}

// App.propTypes = {
//   name: Pro.number.isRequired
// };

export default App