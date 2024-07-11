import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

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
    let userDetails = JSON.parse(localStorage.getItem("use")) || [];
    userDetails.push(user);
    localStorage.setItem("use", JSON.stringify(userDetails));
    navigate("/");
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Register</h3>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    value={user.phone}
                    onChange={(e) =>
                      setUser({ ...user, phone: e.target.value })
                    }
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button
                  onClick={(e) => submitHandler(e)}
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Register
                </button>

                <Link className="text-decoration-none" to="/signupLogin">
                  Login
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
