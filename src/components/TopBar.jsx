import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { context } from "./store/Context";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { LuBadgeHelp } from "react-icons/lu";

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
          <Link className="text-decoration-none d-flex align-items-center" to="/search"><FiSearch /> Search
          </Link>
        </li> 
        <li>
          <Link className="text-decoration-none d-flex align-items-center" to="/help"><LuBadgeHelp />Help</Link>
        </li>
        <li>
          <Link className="text-decoration-none" to="/cart"><HiMiniShoppingCart /> <sup>({cartNumber})</sup></Link>
        </li>
        {loggin ? (<li>
          <Link className="text-decoration-none" to="/profile"><CgProfile className="fs-3"/></Link>
        </li>) : (<li>
          <Link className="text-decoration-none" to="/signupLogin">SignUp/Login</Link>
        </li>)}
          
      </ul>
              
    </section>
  );
};

export default TopBar;

