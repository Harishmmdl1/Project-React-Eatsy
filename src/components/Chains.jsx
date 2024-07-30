// import React, { useEffect, useState } from "react";
// import { API_URL } from "../pages/api";
// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";
// import { MagnifyingGlass } from "react-loader-spinner";
// import { Link } from "react-router-dom";

// const Chains = () => {
//   const [vendorData, setVendorData] = useState([]);
//   const [scrollPosotion, setScrollPosotion] = useState(0);
//   const [loading, setLoading] = useState(true);

//   const vendorFirmHandler = async () => {
//     try {
//       const response = await fetch(`${API_URL}/vendor/all-vendors`);
//       const newData = await response.json();

//       setVendorData(newData);
//       console.log("This is Api Data", newData);
//       setLoading(false);
//     } catch (error) {
//       alert("failed to fetch Data");
//       console.log("failed to fetch Data");
//       setLoading(true);
//     }
//   };

//   useEffect(() => {
//     vendorFirmHandler();
//   }, []);

//   const handleSCroll = (direction) => {
//     const gallery = document.getElementById("chainGallery");
//     const scrollAmount = 500;

//     if (direction === "left") {
//       gallery.scrollTo({
//         left: gallery.scrollLeft - scrollAmount,
//         behavior: "smooth",
//       });
//     } else if (direction === "right") {
//       gallery.scrollTo({
//         left: gallery.scrollLeft + scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };
//   return (
//     <div className="mediaChainSection">
//       <div className="loaderSection">
//         {loading && (
//           <>
//             <div className="loader">🍽️ Fetching Delicious Meals...</div>
//             <MagnifyingGlass
//               visible={true}
//               height="80"
//               width="80"
//               ariaLabel="magnifying-glass-loading"
//               wrapperStyle={{}}
//               wrapperClass="magnifying-glass-wrapper"
//               glassColor="#c0efff"
//               color="#e15b64"
//             />
//           </>
//         )}
//       </div>
//       <div className="btnSection">
//         <button onClick={() => handleSCroll("left")}>
//           <IoIosArrowBack className="btnIcons" />
//         </button>
//         <button onClick={() => handleSCroll("right")}>
//           <IoIosArrowForward className="btnIcons" />
//         </button>
//       </div>

//       <h3>Top restaurant chains in Hyderabad</h3>
//       <section
//         className="chainSection"
//         id="chainGallery"
//         onScroll={(e) => setScrollPosotion(e.target.scrollLeft)}
//       >
//         {vendorData.vendors &&
//           vendorData.vendors.map((vendor) => {
//             return (
//               <>
//                 <div className="vendorBox">
//                   {vendor.firm.map((item) => {
//                     return (
//                       <>
//                         {/* <div>{item.firmName}</div> */}
//                         <Link
//                           to={`/products/${item._id}/${item.firmName}`}
//                           className="link"
//                           key={item._id}
//                         >
//                           <div className="firImage">
//                             <img
//                               src={`${API_URL}/uploads/${item.image}`}
//                               alt=""
//                             />
//                           </div>
//                         </Link>
//                       </>
//                     );
//                   })}
//                 </div>
//               </>
//             );
//           })}
//       </section>
//     </div>
//   );
// };

// export default Chains;

import React, { useEffect, useState } from "react";
import { API_URL } from "../pages/api";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { MagnifyingGlass } from "react-loader-spinner";
import { Link } from "react-router-dom";

const Chains = () => {
  const [vendorData, setVendorData] = useState([]);
  const [scrollPosotion, setScrollPosotion] = useState(0);
  const [loading, setLoading] = useState(true);

  const vendorFirmHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`);
      const newData = await response.json();

      setVendorData(newData);
      console.log("This is Api Data", newData);
      setLoading(false);
    } catch (error) {
      alert("failed to fetch Data");
      console.log("failed to fetch Data");
      setLoading(true);
    }
  };

  useEffect(() => {
    vendorFirmHandler();
  }, []);

  const handleSCroll = (direction) => {
    const gallery = document.getElementById("chainGallery");
    const scrollAmount = 500;

    if (direction === "left") {
      gallery.scrollTo({
        left: gallery.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    } else if (direction === "right") {
      gallery.scrollTo({
        left: gallery.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleImageError = (e) => {
    e.target.src = '/assets/item/defaultrestorent.jpg'; // Set the path to your default image
  };
  return (
    <div className="mediaChainSection">
      {loading ? (
        <div className="loaderSection">
          <div className="loader">🍽️ Fetching Delicious Meals...</div>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="magnifying-glass-loading"
            wrapperStyle={{}}
            wrapperClass="magnifying-glass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      ) : (
        <>
          <div>
            <div className="btnSection">
              <button onClick={() => handleSCroll("left")}>
                <IoIosArrowBack className="btnIcons" />
              </button>
              <button onClick={() => handleSCroll("right")}>
                <IoIosArrowForward className="btnIcons" />
              </button>
            </div>

            <h3>Top restaurant chains in Hyderabad</h3>
          </div>
          <section
            className="chainSection"
            id="chainGallery"
            onScroll={(e) => setScrollPosotion(e.target.scrollLeft)}
          >
            {vendorData.vendors &&
              vendorData.vendors.map((vendor) => {
                return (
                  <div className="vendorBox" key={vendor._id}>
                    {vendor.firm.map((item) => (
                      <Link
                        to={`/products/${item._id}/${item.firmName}`}
                        className="link"
                        key={item._id}
                      >
                        <div className="firImage">
                          <img
                            src={`${API_URL}/uploads/${item.image}`}
                            alt=""
                            onError={handleImageError}
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                );
              })}
          </section>
        </>
      )}
    </div>
  );
};

export default Chains;
