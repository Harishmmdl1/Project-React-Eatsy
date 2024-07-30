  import React, { useContext, useState } from "react";
  import "bootstrap/dist/css/bootstrap.min.css";
  import { Link, useNavigate } from "react-router-dom";
  import { context } from "./store/Context";
  import TopBar from "./TopBar";
  import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

  const SignupLogin = () => {
    const { loggin, setLoggin } = useContext(context);

    const users = JSON.parse(localStorage.getItem("use")) || [];
    const [login, setLogin] = useState({ name: "", password: "" });
    const navigate = useNavigate();

    console.log(users);

    const handleLogin = (e) => {
     
      e.preventDefault();

      if (!login.name || !login.password) {
        toast.error('Please fill in both fields', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        return;
      }

      const filtered = users.filter(
        (ele) => ele.name === login.name && ele.password === login.password
      );

      console.log(filtered);

      if (filtered.length !== 0) {
        localStorage.setItem("loggedIndetails", JSON.stringify(filtered[0]));
        setLoggin(true);
        navigate("/");
      } else {
        toast.error('Invalid Email and Password', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
    };

    return (
      <>
        <TopBar />
        <div className="loginComponent">
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title text-center">Login</h3>
                    <form className="p-4">
                      <div className="form-group m-2">
                        <label htmlFor="name">Username</label>
                        <input
                          value={login.name}
                          onChange={(e) =>
                            setLogin({ ...login, name: e.target.value })
                          }
                          type="text"
                          className="form-control my-2"
                          id="name"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="form-group m-2">
                        <label htmlFor="password">Password</label>
                        <input
                          value={login.password}
                          onChange={(e) =>
                            setLogin({ ...login, password: e.target.value })
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
                          type="submit"
                          onClick={(e) => handleLogin(e)}
                          className="btn btn-primary btn-block w-50"
                        >
                          Login
                        </button>
                      </div>
                      <div className="d-flex justify-content-center align-items-center mt-3">

                      New User ?
                      <Link className="ps-3 fs-5 text-decoration-none" to="/register">
                        Create a Account
                      </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <ToastContainer />
          </div>
        </div>
      </>
    );
  };

  export default SignupLogin;
