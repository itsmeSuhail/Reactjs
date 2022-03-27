//high order function bana rhe hai
// isme ham pehle ek component le rhe hai

/*
1.<function> pass kr do
2.class mai function  <function props /> ko property de rhe hai
3.return <class name> only

*/
import React from 'react'
const High = (Func) => {
  class Pass extends React.Component{
      constructor(props){
          super(props);
          this.state={
              name:"High order Function",
              counter:0
          }
          this.increase=this.increase.bind(this)
          this.decrease=this.decrease.bind(this)

      }
      increase(){
          this.setState({counter:this.state.counter+1})
      }
      decrease(){
        this.setState({counter:this.state.counter-1})
    }
      render(){
          return<>
          {/* here we are giving some property kop our function */}
          <Func in={this.increase} de={this.decrease} name={this.state}/>
          </>
      }
  }
//   yah par sirf class ka name pass karna hai normally
  return Pass;
}

export default High