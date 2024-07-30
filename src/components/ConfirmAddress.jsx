import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./TopBar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { context } from "./store/Context";

const ConfirmAddress = () => {

  const {  setCartNumber, setCartedItems } = useContext(context);
  const [address, setAddress] = useState({
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
  });

  
  const navigate = useNavigate();

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  const validatePostalCode = (postalCode) => {
    return /^[0-9]{6}$/.test(postalCode);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !address.addressLine1 ||
      !address.city ||
      !address.state ||
      !validatePostalCode(address.postalCode)
    ) {
      toast.warn('Please fill in all required fields and ensure postal code is valid.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      return;
    }

    navigate("/orderSuccess");
            setCartedItems([]);
        setCartNumber(0);
    
  };

  return (
    <>
      <div className="confirmAddressCompo">
        <TopBar />

        <div className="addressComponent">
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title text-center">Shipping Address</h3>
                    <form className="p-4" onSubmit={handleSubmit}>
                      <div className="form-group m-2">
                        <label htmlFor="addressLine1">Address Line 1</label>
                        <input
                          value={address.addressLine1}
                          onChange={handleChange}
                          type="text"
                          className="form-control my-2"
                          id="addressLine1"
                          name="addressLine1"
                          placeholder="Enter your address line 1"
                          required
                        />
                      </div>
                      <div className="form-group m-2">
                        <label htmlFor="addressLine2">Address Line 2</label>
                        <input
                          value={address.addressLine2}
                          onChange={handleChange}
                          type="text"
                          className="form-control my-2"
                          id="addressLine2"
                          name="addressLine2"
                          placeholder="Enter your address line 2"
                        />
                      </div>
                      <div className="form-group m-2">
                        <label htmlFor="city">City</label>
                        <input
                          value={address.city}
                          onChange={handleChange}
                          type="text"
                          className="form-control my-2"
                          id="city"
                          name="city"
                          placeholder="Enter your city"
                          required
                        />
                      </div>
                      <div className="form-group m-2">
                        <label htmlFor="state">State</label>
                        <select
                          value={address.state}
                          onChange={handleChange}
                          className="form-control my-2"
                          id="state"
                          name="state"
                          required
                        >
                          <option value="">Select your state</option>
                          {indianStates.map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group m-2">
                        <label htmlFor="postalCode">Postal Code</label>
                        <input
                          value={address.postalCode}
                          onChange={handleChange}
                          type="text"
                          className="form-control my-2"
                          id="postalCode"
                          name="postalCode"
                          placeholder="Enter your postal code"
                          required
                        />
                      </div>
                      <div className="d-flex justify-content-center mt-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block w-50"
                        >
                          Confirm Order
                        </button>
                      </div>
                    </form>
                  </div>
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

export default ConfirmAddress;
