import React, { Component } from 'react'
import './App.css';
class Child extends Component {
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
     //oii what r u doing?eeee call le na pesataa?now ha seri iru.. okay super...now ni routing concept paducha thaa purium like click panna next page epadi oh kk
    render() {
        return (
            <div>
               <h2 className="s">Signup Form</h2>
                <form onSubmit={this.handlesubmit}>
                <div className="container">   
                    <label>Username : </label>   
                    <input type="texts" placeholder="Enter Username"
                    value={this.state.username} 
                    onChange={this.handleuser}
                    className="texts" required/> <br></br> 
                    <label>Password : </label>   
                    <input type="password" placeholder="Enter Password"
                     name="password" className="texts" 
                     value={this.state.email} 
                    onChange={this.handleemail}
                      required/>  <br></br> 
                       <button  id="btn">submit</button> 
                </div>  
                </form>
            </div>
        );
    }
}
export default Child;
//okay...