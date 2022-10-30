import React,{ Component } from "react";

function Value2 (event){
    console.log(event)

}

class FirstState extends Component{
    constructor(){
        super()
        this.state = {
            name:"Jamal",
            age:22
        }

    }
  value=()=>{
   this.setState({
    name:"Deen",
    age:28
   })
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

export default FirstState
