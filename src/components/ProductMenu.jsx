// // import React, { useEffect, useState } from "react";
// // import { API_URL } from "../pages/api";
// // import { useParams } from "react-router-dom";
// // import TopBar from "../components/TopBar";

// // const ProductMenu = () => {
// //   const [products, setProducts] = useState([]);

// //   const { firmId, firmName } = useParams();

// //   const productsHandler = async () => {
// //     try {
// //       const response = await fetch(`${API_URL}/product/${firmId}/products`);
// //       const newProductData = await response.json();
// //       setProducts(newProductData.products);
// //       console.log("THis is product Data", newProductData);
// //     } catch (error) {
// //       console.log("Product failed to fetch", error);
// //     }
// //   };

// //   useEffect(() => {
// //     productsHandler();
// //   }, []);

// //   return (
// //     <>
// //       <TopBar />
// //       <section className="productSection">
// //         <h3>{firmName}</h3>
// //         {products.map((item) => {
// //           return (
// //             <div className="productBox">
// //               <div>
// //                 <div><strong>{item.productName}</strong></div>
// //                 <div>₹{item.price}</div>
// //                 <div>{item.description}</div>
// //               </div>
// //               <div className="productGroup">
// //                 <img src={`${API_URL}/uploads/${item.image}`} alt="" />
// //                 <div className="addButton">ADD</div>
// //               </div>
// //             </div>
// //           );
// //         })}
// //       </section>
// //     </>
// //   );
// // };

// // export default ProductMenu;

// import React, { useContext, useEffect, useState } from "react";
// import { API_URL } from "../pages/api";
// import { useParams } from "react-router-dom";
// import TopBar from "../components/TopBar";
// import { context } from "./store/Context";

// const ProductMenu = () => {
//   const [products, setProducts] = useState([]);
//   const [diss, setDiss] = useState(false);
//   const { cartNumber, setCartNumber,cartedItems, setCartedItems } = useContext(context);
//   const { firmId, firmName } = useParams();


//   const productsHandler = async () => {
//     try {
//       const response = await fetch(`${API_URL}/product/${firmId}/products`);
//       const newProductData = await response.json();
//       setProducts(newProductData.products);
//       console.log("THis is product Data", newProductData);
//     } catch (error) {
//       console.log("Product failed to fetch", error);
//     }
//   };

//   useEffect(() => {
//     productsHandler();
//   }, []);

//   const handleCart = (item) => {
// // console.log(item)
//     // setDiss(!diss)
//     // const updatedCartItems = [...cartedItems];
//     // updatedCartItems.push(item);
//     // setCartedItems(updatedCartItems)
//     for(let i=0;i<=cartedItems.length;i++){
//       let flag =false
//       let a=cartedItems[i]
      
//       for(let j=0;j<=cartedItems.length;i++){
//         if(a?._id==cartedItems[j]?._id){
//           flag=true
//         }
//       }
//       if(flag==false){
//         setCartNumber(cartNumber+1);

//         setCartedItems([...cartedItems,item])
//       }
//     }
    

//   };
  
//   // const handleDisable = (id) => {
//   //   for (const obj of products) {
//   //     if(obj._id === id){
//   //       return true;
//   //     }
//   //     else{
//   //       return false;
//   //     }
//   //   }
    
//   // }
//   return (
//     <>
//       <TopBar />
//       <section className="productSection">
//         <h3>{firmName}</h3>
//         {products.map((item) => {
//           return (
//             <div className="productBox" key={item._id}>
//               <div>
//                 <div>
//                   <strong>{item.productName}</strong>
//                 </div>
//                 <div>₹{item.price}</div>
//                 <div>{item.description}</div>
//               </div>
//               <div className="productGroup">
//                 <img src={`${API_URL}/uploads/${item.image}`} alt="" />
//                 <button
//                 //  disabled={handleDisable(item._id)}
//                   className="addButton"
//                   onClick={() => {
//                     handleCart(item);
//                   }}
//                 >
//                   ADD
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </section>
//     </>
//   );
// };

// export default ProductMenu;

import React, { useContext, useEffect, useState } from "react";
import { API_URL } from "../pages/api";
import { useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import { context } from "./store/Context";
import { ToastContainer, toast } from "react-toastify";

const ProductMenu = () => {
  const [products, setProducts] = useState([]);
  const { cartNumber, setCartNumber, cartedItems, setCartedItems } = useContext(context);
  const { firmId, firmName } = useParams();

  const productsHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/product/${firmId}/products`);
      const newProductData = await response.json();
      setProducts(newProductData.products);
    } catch (error) {
      console.log("Product failed to fetch", error);
    }
  };

  useEffect(() => {
    productsHandler();
  }, []);

  const handleCart = (item) => {
    const alreadyInCart = cartedItems.some(cartItem => cartItem._id === item._id);
    if (!alreadyInCart) {
      setCartNumber(cartNumber + 1);
      setCartedItems([...cartedItems, { ...item, quantity: 1 }]);
      itemAdded();
    } else {
      itemAlreadyAdded();
    }
  };

  const itemAdded = () => {
    toast.success('Item Added to Cart', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: "Flip",
      });
  }
  const itemAlreadyAdded = () => {
    toast.success('Item Already in Cart', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: "Flip",
        });
  }

  return (
    <>
      <TopBar />
      <section className="productSection">
        <h3>{firmName}</h3>
        {products.map((item) => (
          <div className="productBox" key={item._id}>
            <div>
              <div>
                <strong>{item.productName}</strong>
              </div>
              <div>₹{item.price}</div>
              <div>{item.description}</div>
            </div>
            <div className="productGroup">
              <img src={`${API_URL}/uploads/${item.image}`} alt={item.productName} />
              <button
                className="addButton"
                onClick={() => handleCart(item)}
              >
                ADD
              </button>
            </div>
          </div>
        ))}
        <ToastContainer />
      </section>
    </>
  );
};

export default ProductMenu;

