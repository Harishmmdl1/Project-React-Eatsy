import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { context } from "./store/Context";
import TopBar from "./TopBar";

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("loggedIndetails"));

  const { cartNumber, setCartNumber, loggin, setLoggin } = useContext(context);

  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggin(false);
    navigate("/signupLogin");
  };

  return (
    <>
      <div className="profileComponent">
        <TopBar />
        <div className="container mt-5">
          <div className="card">
            <div className="card-header text-center bg-primary text-white">
              <h2>Profile</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 text-center">
                  <h4>{userData.name}</h4>
                </div>
                <div className="col-md-8">
                  <h5>Personal Information</h5>
                  <ul className="list-group mb-3">
                    <li className="list-group-item">
                      <strong>Email:</strong> {userData.email}
                    </li>
                    <li className="list-group-item">
                      <strong>Phone:</strong> {userData.phone}
                    </li>
                  </ul>
                  <button
                    onClick={handleLogout}
                    to="/logout"
                    className="btn btn-danger"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
