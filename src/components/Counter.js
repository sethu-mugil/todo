import {Component} from 'react'; 
import '../App.css'

class Counter extends Component { 
  state = {count : 0,isLoggedin : true,searchInput  : ''}  
  
  onChangeEvent = (event)=>{  
    console.log(event.target.value)
    this.setState({searchInput : event.target.value})

  }
  onIncrement = ()=>{ 
    this.setState ((prevState)=>({count:prevState.count + 1}))
  } 


  onDecrement = ()=>{ 
    this.setState((prevState)=>({count:prevState.count - 1}))
  } 

    shoot = ()=>{
      
    alert("Good Short")
   }

  render(){  
    const {count} = this.state 
    const {isLoggedin} = this.state 
    const {searchInput}  = this.state
    return( 
      <>
      <div className = "container">
      <h1 className = "Heading">Counter</h1> 
       <p className = "counting">Count {count}</p>
       <div> 
       <input  type ="text" 
       onChange={this.onChangeEvent}
       value = {searchInput}/>
       <button className ="button" onClick = {this.onIncrement}>increase</button> 
       <button className = "button" onClick = {this.onDecrement}>Decrease</button> 
      <button ClassName ="button" onClick = {this.shoot}>Take The Shoot</button>
    {isLoggedin ? <button ClassName ="button" type = "button">Login</button> : <button ClassName ="button" type ="button">Logout</button>}
    </div> 
    </div>
      </>

    )
  }
} 

export default Counter