import React,{ Component } from "react";


class Cycle extends Component{
    constructor(){
        super()
        this.state = {
            name:"jamal",
            age:22
        }
  
    }
  value=()=>{
   this.setState({
    name:"deen",
    age:21
   })
  } 
  
  componentDidMount(){
   // setTimeout(() =>{
        this.setState({name:"saul"
        })
   // },1000)
  
  }
  
  render(){
    
    return(
     <div>{this.state.name}
     {this.state.age}
    <button onClick={()=>this.value()}>click</button>
    <Value2 event = {this.state}/>
     </div>
    )
  }
  
  }
  
  export default Cycle;
  