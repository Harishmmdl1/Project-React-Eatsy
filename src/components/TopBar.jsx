import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "./store/Context";

const TopBar = () => {

  let userData; 
  
  const { cartNumber, setCartNumber, loggin, setLoggin } = useContext(context);

  if(loggin){

    userData =JSON.parse(localStorage.getItem("loggedIndetails"));
  }
  
  return (
    <section className="topBarSection">
      <ul className="list-unstyled d-flex justify-content-evenly w-100 gap-5 fs-4 mt-4">               
        <li>
          <Link className="text-decoration-none companyTitle" to="/">Eatsy</Link>
        </li>
        <li>             
          <Link className="text-decoration-none" to="/search">
          <input type="text" class="form-control" placeholder="Search..."/>
          </Link>
        </li> 
        <li>
          <Link className="text-decoration-none" to="/help">Help</Link>
        </li>
        <li>
          <Link className="text-decoration-none" to="/cart">Cart <sup>({cartNumber})</sup></Link>
        </li>
        {loggin ? (<li>
          <Link className="text-decoration-none" to="/signupLogin">{userData.name}</Link>
        </li>) : (<li>
          <Link className="text-decoration-none" to="/signupLogin">SignUp/Login</Link>
        </li>)}
          
      </ul>
              
    </section>
  );
};

export default TopBar;

