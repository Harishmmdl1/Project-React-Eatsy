import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";

const OrderSuccess = () => {
  const navigate = useNavigate();

  const handleHomeNavigation = () => {
    navigate("/");
  };

  return (
    <>
      <div className="orderSuccessComp mt-3">
        <TopBar />
        <div className="order-success-component d-flex flex-column align-items-center justify-content-center vh-100">
          <div className="text-center">
            
            <h1 className="display-4 text-success">THANK YOU</h1>
            <h2 className="text-secondary">FOR YOUR ORDER</h2>
            <p className="mt-4">
              We cannot say it enough thank you for all your support!
              <br />
            </p>
            <button
              className="btn btn-danger btn-lg mt-4"
              onClick={handleHomeNavigation}
            >
              Back To Eatsy
            </button>
            <p className="mt-3 text-muted">
              Anything miss? Email us or call us at (610) 888-1111
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
