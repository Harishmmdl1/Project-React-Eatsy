// import React from "react";
// import LandingPage from "./pages/LandingPage";
// import "./App.css";
// // import "./extra.css"
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Route, Router, Routes } from "react-router-dom";
// import ProductMenu from "./components/ProductMenu";
// import Help from "./components/Help";
// import SignupLogin from "./components/SignupLogin";
// import Search from "./components/Search";
// import Cart from "./components/Cart";

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/search" element={<Search />} />
//         <Route path="/help" element={<Help />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/signupLogin" element={<SignupLogin />} />
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/products/:firmId/:firmName" element={<ProductMenu />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React from "react";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ProductMenu from "./components/ProductMenu";
import Help from "./components/Help";
import SignupLogin from "./components/SignupLogin";
import Search from "./components/Search";
import Cart from "./components/Cart";
import ContextProvider from "./components/store/Context";
import Register from "./components/Register";

const App = () => {
  return (
    <ContextProvider>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/help" element={<Help />} />
            <Route path="/cart" element={<Cart />} />
            
            <Route path="/signupLogin" element={<SignupLogin />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/products/:firmId/:firmName"
              element={<ProductMenu />}
            />
          </Routes>
        </div>
    </ContextProvider>
  );
};

export default App;
