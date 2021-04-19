
import hello from "../../assets/avatar.png";
import * as ReactBootstrap from "react-bootstrap" ;
import React ,{useState , useEffect  } from 'react';
function Login  (){
  const [email , setEmail]=useState("");
  const [password , setpassword]=useState("");

  async function login(){
    console.warn(email,password)
    let item={email,password};
    let result = await fetch(`http://localhost:8080/login`, {
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept" : 'application'
      }
    })
  }
    return ( 
<ReactBootstrap.Form>
  <ReactBootstrap.Form.Group controlId="formBasicEmail">
    <ReactBootstrap.Form.Label>Email address</ReactBootstrap.Form.Label>
    <ReactBootstrap.Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
    <ReactBootstrap.Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </ReactBootstrap.Form.Text>
  </ReactBootstrap.Form.Group>

  <ReactBootstrap.Form.Group controlId="formBasicPassword">
    <ReactBootstrap.Form.Label>Password</ReactBootstrap.Form.Label>
    <ReactBootstrap.Form.Control type="password" placeholder="Password"  onChange={(e)=>setpassword(e.target.value)} />
  </ReactBootstrap.Form.Group>
  <ReactBootstrap.Form.Group controlId="formBasicCheckbox">
    <ReactBootstrap.Form.Check type="checkbox" label="Check me out" />
  </ReactBootstrap.Form.Group>
  <ReactBootstrap.Button onClick={login} variant="primary" type="submit">
    Submit
  </ReactBootstrap.Button>
</ReactBootstrap.Form>  );
}
 
export default Login;
