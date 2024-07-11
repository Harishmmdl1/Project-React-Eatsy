
import React, { useContext } from "react";
import { context } from "./store/Context";
import { API_URL } from "../pages/api";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartNumber, cartedItems, setCartNumber, setCartedItems,loggin, setLoggin } =
    useContext(context);
const navigate = useNavigate()
  const incrementItemQuantity = (id) => {
    const updatedCartItems = cartedItems.map((item) =>
      item._id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartedItems(updatedCartItems);
  };

  const decrementItemQuantity = (id) => {
    const updatedCartItems = cartedItems.map((item) =>
      item._id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartedItems(updatedCartItems);
  };

  const removeItemFromCart = (id) => {
    const updatedCartItems = cartedItems.filter((item) => item._id !== id);
    setCartedItems(updatedCartItems);
    setCartNumber(cartNumber - 1);
  };

  const calculateTotalPrice = () => {
    return cartedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const placeOrder = () => {
    if(loggin){
      alert("Order placed successfully!");
    setCartedItems([]);
    setCartNumber(0);
    }else{
      alert("please login to place the order..");
      navigate("/signupLogin")
      
    }
    
  };

  return (
    <div>
      <h2>Cart</h2>
      <p>Total Items: {cartNumber}</p>
      <div className="cartItems">
        {cartedItems.map((item) => (
          <div className="cartItem" key={item._id}>
            <img
              src={`${API_URL}/uploads/${item.image}`}
              alt={item.productName}
            />
            <div>
              <h4>{item.productName}</h4>
              <p>₹{item.price}</p>
              <div className="quantityControl">
                <button onClick={() => decrementItemQuantity(item._id)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementItemQuantity(item._id)}>
                  +
                </button>
              </div>
              <button onClick={() => removeItemFromCart(item._id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="totalPrice">
        <h3>Total Price: ₹{calculateTotalPrice()}</h3>
      </div>
      <button className="placeOrderButton" onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
};

export default Cart;

