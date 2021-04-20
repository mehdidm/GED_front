import axios from "axios";
import { Component } from "react";


export default class Auth extends Component{
  
    handleSubmit = e =>{
        e.preventDefault();
        const data ={
            username : this.username,
            password:this.password
        }
        axios.post('authenticate', data)
        
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token);
            
            
        })
        .catch(err =>{
            console.log(err)
        })
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit}> 
            <h3>Login</h3>
            <div className="form-group">
                <label>Usernamee</label>
                <input type="email" className="form-control" placeholder="Email" onChange={e =>this.username = e.target.value}/>
                
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" onChange={e =>this.password = e.target.value}/>
                
            </div>
            <button className="btn btn-primary btn-block">Login</button>
            </form>
        )
    }
}