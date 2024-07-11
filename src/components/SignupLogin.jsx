import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { context } from './store/Context';

const SignupLogin = () => {

  
  const { loggin, setLoggin } = useContext(context);

  const users=JSON.parse(localStorage.getItem("use")) || []
  const [login,setLogin]=useState({name:'',password:""})
  const navigate=useNavigate()
  console.log(users)
  const handleLogin = (e) =>{
    e.preventDefault()
      const filtered=users.filter(ele=>ele.name===login.name && ele.password===login.password)
      console.log(filtered)
      if(filtered.length!==0){
        localStorage.setItem("loggedIndetails", JSON.stringify(filtered[0]))
        setLoggin(true);
       navigate('/');
      }
      else{
        alert("Invalid Email and Password")
      }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input value={login.name}   onChange={(e)=>setLogin({...login,name:e.target.value})} type="text" className="form-control" id="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input value={login.password} onChange={(e)=>setLogin({...login,password:e.target.value})} type="password" className="form-control" id="password" placeholder="Enter your password" required />
                </div>
                <button type="submit" onClick={(e)=>handleLogin(e)} className="btn btn-primary btn-block">Login</button>
                <Link className="text-decoration-none" to="/register">Register</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupLogin;
