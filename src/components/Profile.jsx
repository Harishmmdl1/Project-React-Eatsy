// import React, { useContext, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";
// import { context } from "./store/Context";
// import TopBar from "./TopBar";

// const Profile = () => {
//   const userData = JSON.parse(localStorage.getItem("loggedIndetails"));
//   const { setLoggin } = useContext(context);
//   const [name, setName] = useState(userData.name);
//   const [phone, setPhone] = useState(userData.phone);
//   const [currentPassword, setCurrentPassword] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setLoggin(false);
//     navigate("/signupLogin");
//   };

//   const handleSave = () => {
//     const updatedUserData = { ...userData, name, phone };
//     localStorage.setItem("loggedIndetails", JSON.stringify(updatedUserData));
//     alert("Profile updated successfully!");
//   };

//   const handleChangePassword = () => {
//     if (password !== confirmPassword) {
//       alert("New password and confirm password do not match!");
//       return;
//     }
//     // Add logic to update the password here
//     alert("Password changed successfully!");
//   };

//   return (
//     <>
//       <div className="profileComponent">
//         <TopBar />
//         <div className="container mt-5">
//           <h3 className="text-center">MY ACCOUNT</h3>
//           <ul className="nav nav-tabs justify-content-center">
//             <li className="nav-item">
//               <a className="nav-link active" data-bs-toggle="tab" href="#editProfile">Edit Profile</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" data-bs-toggle="tab" href="#changePassword">Change Password</a>
//             </li>
//           </ul>
//           <div className="tab-content">
//             <div id="editProfile" className="container tab-pane active">
//               <div className="card mt-3" style={{ backgroundColor: "#f0f8ff" }}>
//                 <div className="card-body">
//                   <div className="d-flex justify-content-center mb-3">
                    
//                   </div>
//                   <div className="row mb-3">
//                     <div className="col-md-6">
//                       <label className="form-label">Name</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                       />
//                     </div>
//                     <div className="col-md-6">
//                       <label className="form-label">Email</label>
//                       <input
//                         type="email"
//                         className="form-control"
//                         value={userData.email}
//                         readOnly
//                       />
//                     </div>
//                   </div>
//                   <div className="row mb-3">
//                     <div className="col-md-6">
//                       <label className="form-label">Phone</label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         value={phone}
//                         onChange={(e) => setPhone(e.target.value)}
//                       />
//                     </div>
//                   </div>
//                   <div className="d-flex justify-content-center">
//                     <button onClick={handleSave} className="btn btn-primary">
//                       Save
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div id="changePassword" className="container tab-pane fade">
//               <div className="card mt-3" style={{ backgroundColor: "#f0f8ff" }}>
//                 <div className="card-body">
//                   <div className="mb-3">
//                     <label className="form-label">Current Password</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       value={currentPassword}
//                       onChange={(e) => setCurrentPassword(e.target.value)}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">New Password</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label className="form-label">Confirm Password</label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       value={confirmPassword}
//                       onChange={(e) => setConfirmPassword(e.target.value)}
//                     />
//                   </div>
//                   <div className="d-flex justify-content-center">
//                     <button onClick={handleChangePassword} className="btn btn-primary">
//                       Change Password
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="d-flex justify-content-center mt-4">
//             <button onClick={handleLogout} className="btn btn-danger">
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;

import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { context } from "./store/Context";
import TopBar from "./TopBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("loggedIndetails"));
  const { setLoggin } = useContext(context);
  const [name, setName] = useState(userData.name);
  const [phone, setPhone] = useState(userData.phone);
  const [email, setEmail] = useState(userData.email);
  const [passwordValid, setPasswordValid] = useState(userData.password);
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggin(false);
    navigate("/signupLogin");
  };

  const handleSave = () => {
    if (phone.length !== 10) {
      toast.warn('Phone number must be exactly 10 digits long.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored"
        });
      return;
    }
    // if (phone === userData.phone) {
    //   alert("New phone number cannot be the same as the existing phone number.");
    //   return;
    // }
    
    const users = JSON.parse(localStorage.getItem("use"));
  
    const updatedData = users.map((u) => {
      if(u.email === email){
        u.name = name;
        u.phone = phone;
      }
      return u;
    })
    localStorage.setItem("use", JSON.stringify(updatedData))
    
    // console.log(updatedData);
    
    // const updatedUseStore = users.find( (u) => u.email === email)
    // updatedUseStore.name = name;
    // updatedUseStore.phone = phone;

    // localStorage.setItem("use", JSON.stringify(users))
    // console.log(users);
    const updatedUserData = { ...userData, name, phone,  };
    localStorage.setItem("loggedIndetails", JSON.stringify(updatedUserData));
    toast.success('Profile updated successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  };
  
  const handleChangePassword = () => {
    if (password.length <= 7) {
      toast.info('New password must be longer than 8 characters.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
        });
      return;
    }
    if (password === currentPassword) {
      toast.warn('New password cannot be the same as the current password.', {
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
    if (password !== confirmPassword) {
      toast.warn('New password and confirm password do not match.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
        });
      return;
    }
    // Add logic to update the password here
    

    
    if(passwordValid !== currentPassword){
      toast.warn('Current Password is not Valid', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
        });
      return;
      
    }
      const users = JSON.parse(localStorage.getItem("use"));
      
      const updatedData = users.map((u) => {
        if(u.email === email){
        u.password = password;
      }
      return u;
    })


    localStorage.setItem("use", JSON.stringify(updatedData))
    
    const updatedUserData = { ...userData, password };
    localStorage.setItem("loggedIndetails", JSON.stringify(updatedUserData));
    toast.success('Password changed successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    });
    
    setCurrentPassword("");
    setPassword("");
    setConfirmPassword("");
    
  };
  
  return (
    <>
      <div className="profileComponent">
        <TopBar />
        <div className="container mt-5">
          <h3 className="text-center">MY ACCOUNT</h3>
          <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
              <a className="nav-link active" data-bs-toggle="tab" href="#editProfile">Edit Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#changePassword">Change Password</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="editProfile" className="container tab-pane active">
              <div className="card mt-3" style={{ backgroundColor: "#f0f8ff" }}>
                <div className="card-body">
                  
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        value={userData.email}
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button onClick={handleSave} className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div id="changePassword" className="container tab-pane fade">
              <div className="card mt-3" style={{ backgroundColor: "#f0f8ff" }}>
                <div className="card-body">
                  <div className="mb-3">
                    <label className="form-label">Current Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <button onClick={handleChangePassword} className="btn btn-primary">
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button onClick={handleLogout} className="btn btn-danger">
              Logout
            </button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Profile;

