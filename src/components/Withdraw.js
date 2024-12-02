import{Component} from 'react'


class Withdraw extends Component{  

    state = {balance:2000} 

    withdraw50 = () =>{
        this.setState((prevState)=>({balance:prevState.balance - 50})) 

    }
    withdraw100 = () =>{
        this.setState((prevState)=>({balance:prevState.balance - 100})) 

    }
    withdraw200 = () =>{
        this.setState((prevState)=>({balance:prevState.balance - 200})) 

    }
    withdraw500 = () =>{
        this.setState((prevState)=>({balance:prevState.balance - 500})) 

    }
 

render(){  
    const {balance} = this.state

    return(
        <>
    <div  className = "container"> 
        <div>
            <h1 className = "name-heading"> Sarah Wiliams</h1>  
            <div className = "balance-containter"> 
                <p className = "balance-deatils"> Your Balance</p>  
                <p className = "total-balance"> {balance} </p> 
            </div>
            <p className = "balance-para">In Rupees</p>
         </div> 
        <h1 className = "withdrawal-heading">withdraw</h1> 
        <p className = "rupees-para">CHOOSE SUM (IN RUPPES)</p> 
        <div>  
            <div>
                <button className = "withdraw-button" onClick = {this.withdraw50}>50</button> 
                <button className = "withdraw-button" onClick={this.withdraw100}>100</button> 
            </div>
            <div>
                <button className = "withdraw-button" onClick = {this.withdraw200}>200</button>
                <button className = "withdraw-button" onClick = {this.withdraw500}>500</button>
            </div>
        </div>
    
    </div> 
    </>
    )
}
} 
export default Withdraw