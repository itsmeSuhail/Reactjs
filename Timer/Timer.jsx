// class use ki hai isme
// this wale functions use hone hai isme
// setstate mai function jo hota hai use bhi use kiya gya hai isme setState((state)=>({count:state.count+1}))



import React, { Component } from 'react'

export class App extends Component {
  constructor(){
    super();
    this.state={
      name:"vihan",
      count:0,
      tab:""
    }
    this.counter=this.counter.bind(this)
    this.stop=this.stop.bind(this)
  }
  counter(){
   let timer=setInterval(()=>{
     this.setState({count:this.state.count+1})
   },1000);
   console.log(timer +" click")
    console.log("value")
    this.setState({tab:timer});
  }

   stop(){
     console.log(this.state.tab)
     clearInterval(this.state.tab)
   }
  render() {
    return (
      <div>
        <h1>
        {this.state.name}
        </h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.counter}>click</button>
        <button onClick={this.stop}>stop</button>
      </div>
    )
  }
}

export default App