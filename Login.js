import React, { Component } from "react";
import './App.css';
import Child from './Child';
class Login extends Component{
    
 constructor(props) {
        super(props)
        this.state={
            username: '',
            Password:''
        }
     }
     handleuser=(e)=>{
         this.setState({
             username:e.target.value
         })
     }
     handleemail=(e)=>{
        this.setState({
            Password:e.target.value
        })
    }
     handlesubmit = (e)=>{
        alert(`${this.state.username} ${this.state.Password} `)
    }
     
    // callme(){
    //     this.setState({
     //        username: 'saran'
             
     //    });
    // }
     clickeme()
     {
         alert(`hi`)
     }
     
      render()
      {

        return (
            
            <div>
                <h2 className="s">Login Form</h2>
                <form onSubmit={this.handlesubmit}>
                <div className="container">   
                    <label>Username : </label>   
                    <input type="text" placeholder="Enter Username"
                    value={this.state.username} 
                    onChange={this.handleuser}
                    className="text" required/> <br></br> 
                    <label>Password : </label>   
                    <input type="password" placeholder="Enter Password"
                     name="password" className="text" 
                     value={this.state.email} 
                    onChange={this.handleemail}
                      required/>  <br></br>  
                    <p>{this.state.username}</p>
                    <button onClick={()=>this.callme()} id="btn">submit</button>  
                    <button onClick={this.clickeme}>clickme</button>
                    
                </div>

                </form>
            </div>  
          
            
          );
      }
  
}
export default Login;

