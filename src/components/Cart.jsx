// import React, { useContext } from "react";
// import { context } from "./store/Context";
// import { API_URL } from "../pages/api";
// import { useNavigate } from "react-router-dom";
// import TopBar from "./TopBar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Footer from "./Footer";

// const Cart = () => {
//   const { cartNumber, cartedItems, setCartNumber, setCartedItems, loggin } =
//     useContext(context);
//   const navigate = useNavigate();

//   const incrementItemQuantity = (id) => {
//     const updatedCartItems = cartedItems.map((item) =>
//       item._id === id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setCartedItems(updatedCartItems);
//   };

//   const decrementItemQuantity = (id) => {
//     const updatedCartItems = cartedItems.map((item) =>
//       item._id === id && item.quantity > 1
//         ? { ...item, quantity: item.quantity - 1 }
//         : item
//     );
//     setCartedItems(updatedCartItems);
//   };

//   const removeItemFromCart = (id) => {
//     const updatedCartItems = cartedItems.filter((item) => item._id !== id);
//     setCartedItems(updatedCartItems);
//     setCartNumber(cartNumber - 1);
//     toast.warn("Item Removed from Cart", {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };

//   const clearCart = () => {
//     setCartedItems([]);
//     setCartNumber(0);
//     toast.error("Cart Cleared", {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });
//   };

//   const calculateTotalPrice = () => {
//     return cartedItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   const placeOrder = () => {
//     if (loggin) {
//       if (cartedItems.length > 0) {
//         // setCartedItems([]);
//         // setCartNumber(0);
//         navigate("/confirmAddress");
//       } else {
//         toast.error("Your Cart is Empty", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       }
//     } else {
//       navigate("/signupLogin");
//     }
//   };

//   const handleImageError = (e) => {
//     e.target.src = "/assets/item/defaultproduct.jpg"; // Set the path to your default image
//   };

//   return (
//     <div>
//       <TopBar />
//       <div className="cartComponent">
//           <h2 className="m-4 ps-4">YOUR CART</h2>
//           <div className="  cartbox">

//         <div className="container mt-3 w-75 px-4 cartItems">
//           {cartedItems.length > 0 ? (
//             <>
//               <table className="table table-hover">
//                 <thead className="table-secondary h-125">
//                   <tr>
//                     <th>PRODUCT</th>
//                     <th>PRICE</th>
//                     <th>QUANTITY</th>
//                     <th>SUB-TOTAL</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {cartedItems.map((item) => (
//                     <tr key={item._id}>
//                       <td>
//                         <div className="d-flex align-items-center">
//                           <img
//                             src={`${API_URL}/uploads/${item.image}`}
//                             alt={item.productName}
//                             onError={handleImageError}
//                             className="img-thumbnail"
//                             style={{
//                               width: "100px",
//                               height: "100px",
//                               objectFit: "cover",
//                             }}
//                           />
//                           <div className="ml-3">
//                             <h5>{item.productName}</h5>
//                             <button
//                               className="btn btn-outline-secondary"
//                               onClick={() => removeItemFromCart(item._id)}
//                             >
//                               Remove
//                             </button>
//                           </div>
//                         </div>
//                       </td>
//                       <td>₹{item.price}</td>
//                       <td>
//                         <div className="d-flex align-items-center">
//                           <button
//                             className="btn btn-outline-warning"
//                             onClick={() => decrementItemQuantity(item._id)}
//                           >
//                             -
//                           </button>
//                           <span className="mx-2">{item.quantity}</span>
//                           <button
//                             className="btn btn-outline-warning"
//                             onClick={() => incrementItemQuantity(item._id)}
//                           >
//                             +
//                           </button>
//                         </div>
//                       </td>
//                       <td>₹{item.price * item.quantity}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <div className="d-flex justify-content-between align-items-center">
//                 <button className="btn btn-danger" onClick={clearCart}>
//                   Clear Cart
//                 </button>
//               </div>
//             </>
//           ) : (
//             <>
//               <h2 className="text-center cartEmptyTitle">Your cart is empty</h2>
//             </>
//           )}
//         </div>
//         <div className="cartSummary">
//         <div className="card cart-totals-card">
//       <div className="card-body">
//         <h5 className="card-title">CART TOTALS</h5>
//         <hr />
//         <div className="d-flex justify-content-between m-2">
//           <span>Subtotal</span>
//           <span className="text-danger"><b>₹{calculateTotalPrice()}</b></span>
//         </div>
//         <div className="d-flex justify-content-between m-2">
//           <span>Items</span>
//           <span>{cartNumber}</span>
//         </div>
//         <div className="d-flex justify-content-between m-2">
//           <span>Shipping</span>
//           <span className="text-success">Free</span>
//         </div>
//         <div className="d-flex justify-content-between m-2">
//           <span>Total</span>
//           <span className="text-danger"><b>₹{calculateTotalPrice()}</b></span>
//         </div>
//         <div className="text-center mt-3">
//           <button className="btn btn-danger checkout-btn" onClick={placeOrder}>
//             <i className="bi bi-bag-check"></i> Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//         </div>
//         <ToastContainer />
//           </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Cart;





// import React, { useContext } from "react";
// import { context } from "./store/Context";
// import { API_URL } from "../pages/api";
// import { useNavigate } from "react-router-dom";
// import TopBar from "./TopBar";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Footer from "./Footer";

// const Cart = () => {
//   const { cartNumber, cartedItems, setCartNumber, setCartedItems, loggin } =
//     useContext(context);
//   const navigate = useNavigate();

//   const incrementItemQuantity = (id) => {
//     const updatedCartItems = cartedItems.map((item) =>
//       item._id === id ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     setCartedItems(updatedCartItems);
//   };

//   const decrementItemQuantity = (id) => {
//     const updatedCartItems = cartedItems.map((item) =>
//       item._id === id && item.quantity > 1
//         ? { ...item, quantity: item.quantity - 1 }
//         : item
//     );
//     setCartedItems(updatedCartItems);
//   };

//   const removeItemFromCart = (id) => {
//     const updatedCartItems = cartedItems.filter((item) => item._id !== id);
//     setCartedItems(updatedCartItems);
//     setCartNumber(cartNumber - 1);
//     toast.warn("Item Removed from Cart", {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };

//   const clearCart = () => {
//     setCartedItems([]);
//     setCartNumber(0);
//     toast.error("Cart Cleared", {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "dark",
//     });
//   };

//   const calculateTotalPrice = () => {
//     return cartedItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   const placeOrder = () => {
//     if (loggin) {
//       if (cartedItems.length > 0) {
//         navigate("/confirmAddress");
//       } else {
//         toast.error("Your Cart is Empty", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//         });
//       }
//     } else {
//       navigate("/signupLogin");
//     }
//   };

//   const handleImageError = (e) => {
//     e.target.src = "/assets/item/defaultproduct.jpg"; // Set the path to your default image
//   };

//   return (
//     <div>
//       <TopBar />
//       <div className="cartComponent">
//         <h2 className="m-4 ps-4">YOUR CART</h2>
//         <div className="cartbox">
//           <div className="container mt-3 w-75 px-4 cartItems">
//             {cartedItems.length > 0 ? (
//               <>
//                 <table className="table table-hover">
//                   <thead className="table-secondary h-125">
//                     <tr>
//                       <th>PRODUCT</th>
//                       <th>PRICE</th>
//                       <th>QUANTITY</th>
//                       <th>SUB-TOTAL</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {cartedItems.map((item) => (
//                       <tr key={item._id}>
//                         <td>
//                           <div className="d-flex align-items-center">
//                             <img
//                               src={`${API_URL}/uploads/${item.image}`}
//                               alt={item.productName}
//                               onError={handleImageError}
//                               className="img-thumbnail"
//                             />
//                             <div className="ml-3">
//                               <h5>{item.productName}</h5>
                              
//                             </div>
//                           </div>
//                         </td>
//                         <td>₹{item.price}</td>
//                         <td>
//                           <div className="d-flex align-items-center">
//                             <button
//                               className="btn btn-outline-warning"
//                               onClick={() => decrementItemQuantity(item._id)}
//                             >
//                               -
//                             </button>
//                             <span className="mx-2">{item.quantity}</span>
//                             <button
//                               className="btn btn-outline-warning"
//                               onClick={() => incrementItemQuantity(item._id)}
//                             >
//                               +
//                             </button>
//                           </div>
//                         </td>
//                         <td>
                          
//                           ₹{item.price * item.quantity}
//                           &nbsp;
//                           <button
//                                 className="btn btn-dark ms-5 "
//                                 onClick={() => removeItemFromCart(item._id)}
//                               >
//                                 x
//                               </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <button className="btn btn-danger" onClick={clearCart}>
//                     Clear Cart
//                   </button>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <h2 className="text-center cartEmptyTitle">Your cart is empty</h2>
//               </>
//             )}
//           </div>
//           <div className="cartSummary">
//             <div className="card cart-totals-card">
//               <div className="card-body">
//                 <h5 className="card-title">CART TOTALS</h5>
//                 <hr />
//                 <div className="d-flex justify-content-between m-2">
//                   <span>Subtotal</span>
//                   <span className="text-danger"><b>₹{calculateTotalPrice()}</b></span>
//                 </div>
//                 <div className="d-flex justify-content-between m-2">
//                   <span>Items</span>
//                   <span>{cartNumber}</span>
//                 </div>
//                 <div className="d-flex justify-content-between m-2">
//                   <span>Shipping</span>
//                   <span className="text-success">Free</span>
//                 </div>
//                 <div className="d-flex justify-content-between m-2">
//                   <span>Total</span>
//                   <span className="text-danger"><b>₹{calculateTotalPrice()}</b></span>
//                 </div>
//                 <div className="text-center mt-3">
//                   <button className="btn btn-danger checkout-btn" onClick={placeOrder}>
//                     <i className="bi bi-bag-check"></i> Place Order
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <ToastContainer />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Cart;

import React, { useContext } from "react";
import { context } from "./store/Context";
import { API_URL } from "../pages/api";
import { useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

const Cart = () => {
  const { cartNumber, cartedItems, setCartNumber, setCartedItems, loggin } =
    useContext(context);
  const navigate = useNavigate();

  const incrementItemQuantity = (id) => {
    const updatedCartItems = cartedItems.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartedItems(updatedCartItems);
  };

  const decrementItemQuantity = (id) => {
    const updatedCartItems = cartedItems.map((item) =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartedItems(updatedCartItems);
  };

  const removeItemFromCart = (id) => {
    const updatedCartItems = cartedItems.filter((item) => item._id !== id);
    setCartedItems(updatedCartItems);
    setCartNumber(cartNumber - 1);
    toast.warn("Item Removed from Cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const clearCart = () => {
    setCartedItems([]);
    setCartNumber(0);
    toast.error("Cart Cleared", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const calculateTotalPrice = () => {
    return cartedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const placeOrder = () => {
    if (loggin) {
      if (cartedItems.length > 0) {
        navigate("/confirmAddress");
      } else {
        toast.error("Your Cart is Empty", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      navigate("/signupLogin");
    }
  };

  const handleImageError = (e) => {
    e.target.src = "/assets/item/defaultproduct.jpg"; // Set the path to your default image
  };

  return (
    <div>
      <TopBar />
      <div className="cartComponent">
        <h2 className="m-4 ps-4">YOUR CART</h2>
        <div className="cartbox">
          <div className="container mt-3 cartItems">
            {cartedItems.length > 0 ? (
              <>
                <table className="table table-hover">
                  <thead className="table-secondary h-125">
                    <tr>
                      <th>PRODUCT</th>
                      {/* <th>PRICE</th> */}
                      <th>QUANTITY</th>
                      <th>SUB-TOTAL</th>
                      <th></th> {/* Empty header for the remove button */}
                    </tr>
                  </thead>
                  <tbody>
                    {cartedItems.map((item) => (
                      <tr key={item._id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <img
                              src={`${API_URL}/uploads/${item.image}`}
                              alt={item.productName}
                              onError={handleImageError}
                              className="img-thumbnail"
                            />
                            <div className="ml-3">
                              <h5>{item.productName}</h5>
                              ₹{item.price}
                            </div>
                          </div>
                        </td>
                        {/* <td>₹{item.price}</td> */}
                        <td>
                          <div className="d-flex align-items-center">
                            <button
                              className="btn btn-outline-warning"
                              onClick={() => decrementItemQuantity(item._id)}
                            >
                              -
                            </button>
                            <span className="mx-2">{item.quantity}</span>
                            <button
                              className="btn btn-outline-warning"
                              onClick={() => incrementItemQuantity(item._id)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>₹{item.price * item.quantity}</td>
                        <td>
                          <button
                            className="btn btn-dark"
                            onClick={() => removeItemFromCart(item._id)}
                          >
                            x
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-danger" onClick={clearCart}>
                    Clear Cart
                  </button>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-center cartEmptyTitle">Your cart is empty</h2>
              </>
            )}
          </div>
          <div className="cartSummary">
            <div className="card cart-totals-card">
              <div className="card-body">
                <h5 className="card-title">CART TOTALS</h5>
                <hr />
                <div className="d-flex justify-content-between m-2">
                  <span>Subtotal</span>
                  <span className="text-danger"><b>₹{calculateTotalPrice()}</b></span>
                </div>
                <div className="d-flex justify-content-between m-2">
                  <span>Items</span>
                  <span>{cartNumber}</span>
                </div>
                <div className="d-flex justify-content-between m-2">
                  <span>Shipping</span>
                  <span className="text-success">Free</span>
                </div>
                <div className="d-flex justify-content-between m-2">
                  <span>Total</span>
                  <span className="text-danger"><b>₹{calculateTotalPrice()}</b></span>
                </div>
                <div className="text-center mt-3">
                  <button className="btn btn-danger checkout-btn" onClick={placeOrder}>
                    <i className="bi bi-bag-check"></i> Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;

