// mounting methods use kar rhe hai
// purecomponent or usememo use kr rhe hai
// yah thats it
import React, { Component,PureComponent } from 'react'
export class Child extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            grp:"B",
            uuid:"2106239026"
        }
        console.log("B 1")
    }
    static getDerivedStateFromProps(props,state){
        console.log("B 2 ",props,state)
  return null;


    }
    componentDidMount(){
        console.log("B 4")

    }
  render() {
    console.log("B 3")

    return (
      <div>
          <h1>{this.state.grp}</h1>
          <h1>{this.state.uuid}</h1>
          <h1>{this.props.name}</h1>
      </div>
    )
  }
}

export default Child