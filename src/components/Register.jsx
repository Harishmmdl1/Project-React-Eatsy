import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "./TopBar";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    // Validation checks
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!user.name) {
      alert("Please enter your name.");
      return;
    }
    if (!emailRegex.test(user.email)) {
      alert("Please enter a valid email.");
      return;
    }
    if (!phoneRegex.test(user.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if (user.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    let userDetails = JSON.parse(localStorage.getItem("use")) || [];

    // Check if email or phone already exists
    const existingUser = userDetails.find(
      (u) => u.email === user.email || u.phone === user.phone
    );
    if (existingUser) {
      alert("Email or phone number already exists.");
      return;
    }

    userDetails.push(user);
    localStorage.setItem("use", JSON.stringify(userDetails));
    navigate("/signupLogin");
  };
  return (
    <>
      <TopBar />
      <div className="registerComponent">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card registrationBody">
                <div className="card-body">
                  <h3 className="card-title text-center">Register</h3>
                  <form className="p-4">
                    <div className="form-group m-2">
                      <label htmlFor="name">Name</label>
                      <input
                        value={user.name}
                        onChange={(e) =>
                          setUser({ ...user, name: e.target.value })
                        }
                        type="text"
                        className="form-control my-2"
                        id="name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="form-group m-2">
                      <label htmlFor="email">Email</label>
                      <input
                        value={user.email}
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                        type="email"
                        className="form-control my-2"
                        id="email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="form-group m-2">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input
                        value={user.phone}
                        onChange={(e) =>
                          setUser({ ...user, phone: e.target.value })
                        }
                        type="text"
                        className="form-control my-2"
                        id="phoneNumber"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div className="form-group m-2">
                      <label htmlFor="password">Password</label>
                      <input
                        value={user.password}
                        onChange={(e) =>
                          setUser({ ...user, password: e.target.value })
                        }
                        type="password"
                        className="form-control my-2"
                        id="password"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                      <button
                        onClick={(e) => submitHandler(e)}
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Register
                      </button>
                    </div>

                    <div className="d-flex justify-content-center align-items-center mt-4">
                      Already a Customer....!
                      <Link className=" ps-3 fs-5" to="/signupLogin">
                        Login
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
