// import React, { useContext } from "react";
// import { context } from "./store/Context";
// import { API_URL } from "../pages/api";
// import { useNavigate } from "react-router-dom";
// import TopBar from "./TopBar";

// const Cart = () => {
//   const {
//     cartNumber,
//     cartedItems,
//     setCartNumber,
//     setCartedItems,
//     loggin,
//     setLoggin,
//   } = useContext(context);
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
//   };

//   const calculateTotalPrice = () => {
//     return cartedItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   const placeOrder = () => {
//     if (loggin) {
//       alert("Order placed successfully!");
//       setCartedItems([]);
//       setCartNumber(0);
//     } else {
//       alert("please login to place the order..");
//       navigate("/signupLogin");
//     }
//   };

//   return (
//     <div>
//       <TopBar />
//       <div className="cartComponent">
//         <h2>Cart</h2>
//         <p>Total Items: {cartNumber}</p>
//         <div className="cartItems">
//           {cartedItems.map((item) => (
//             <div className="cartItem" key={item._id}>
//               <img
//                 src={`${API_URL}/uploads/${item.image}`}
//                 alt={item.productName}
//               />
//               <div>
//                 <h4>{item.productName}</h4>
//                 <p>₹{item.price}</p>
//                 <div className="quantityControl">
//                   <button onClick={() => decrementItemQuantity(item._id)}>
//                     -
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => incrementItemQuantity(item._id)}>
//                     +
//                   </button>
//                 </div>
//                 <button onClick={() => removeItemFromCart(item._id)}>
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="totalPrice">
//           <h3>Total Price: ₹{calculateTotalPrice()}</h3>
//         </div>
//         <button className="placeOrderButton" onClick={placeOrder}>
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useContext } from "react";
import { context } from "./store/Context";
import { API_URL } from "../pages/api";
import { Navigate, useNavigate } from "react-router-dom";
import TopBar from "./TopBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const {
    cartNumber,
    cartedItems,
    setCartNumber,
    setCartedItems,
    loggin,
    setLoggin,
  } = useContext(context);
  const navigate = useNavigate();

  const incrementItemQuantity = (id) => {
    const updatedCartItems = cartedItems.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartedItems(updatedCartItems);
    increment();
  };

  const increment = () => {
    toast.info('Product Quantity Increased', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: "Bounce",
      });
      
  };

  const decrementItemQuantity = (id) => {
    const updatedCartItems = cartedItems.map((item) =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartedItems(updatedCartItems);
    decrement();
  };

  const decrement = () => {
    toast("Product Quantity Decreased", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: "Bounce",
    });
  };

  const removeItemFromCart = (id) => {
    const updatedCartItems = cartedItems.filter((item) => item._id !== id);
    setCartedItems(updatedCartItems);
    setCartNumber(cartNumber - 1);
    remove();
  };

  const remove = () =>{
    toast.warn('Item Removed from Cart', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: "Slide",
        });
  }
  
  const clearCart = () => {
    setCartedItems([]);
    setCartNumber(0);
    clear();
  };
  
  const clear = () =>{
    toast.error('Cart CLeared', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: "Zoom",
      });
  }
  console.log("cart", cartedItems);

  const calculateTotalPrice = () => {
    return cartedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const placeOrder = () => {
    if (loggin) {
      if (cartedItems.length > 0) {
        // alert("Order placed successfully!");
        setCartedItems([]);
        setCartNumber(0);
        navigate("/confirmAddress");
      } else {
        alert("Your Cart is Empty");
      }
    } else {
      alert("Please login to place the order.");
      navigate("/signupLogin");
    }
  };

  return (
    <div>
      <TopBar />
      <div className="cartComponent">
        <div className="container mt-5">
          {cartedItems.length > 0 ? (
            <>
              <h2 className="text-center mb-4">Cart</h2>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>PRODUCT</th>
                    <th>PRICE</th>
                    <th>QUANTITY</th>
                    <th>TOTAL</th>
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
                            className="img-thumbnail"
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                            }}
                          />
                          <div className="ml-3">
                            <h5>{item.productName}</h5>
                            <button
                              className="btn btn-outline-secondary"
                              onClick={() => removeItemFromCart(item._id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>₹{item.price}</td>
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
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-danger" onClick={clearCart}>
                  Clear Cart
                </button>
                <h3>Subtotal: ₹{calculateTotalPrice()}</h3>
                <button className="btn btn-primary" onClick={placeOrder}>
                  Place Order
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-center mb-4">Your cart is empty</h2>
            </>
          )}

          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Cart;
