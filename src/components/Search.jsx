import React, { useEffect, useState } from "react";
import { API_URL } from "../pages/api";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import { MagnifyingGlass } from "react-loader-spinner";
import { FiSearch } from "react-icons/fi";
import Footer from "./Footer";

const Search = () => {
  const [firmData, setFirmData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const firmDataHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`);
      const newFirmData = await response.json();
      setFirmData(newFirmData.vendors);
    } catch (error) {
      alert("Firm data not fetched");
      console.log("Firm data not fetched", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    firmDataHandler();
  }, []);

  const filteredFirms = firmData.flatMap((apple) =>
    apple.firm.filter((item) =>
      item.firmName.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleImageError = (e) => {
    e.target.src = '/assets/item/defaultrestorent.jpg'; // Set the path to your default image
  };

  return (
    <>
      <TopBar />

      <div className="searchComponent my-3">
        <div className="d-flex align-items-center justify-content-center">
          <input
            type="text"
            placeholder="Search for restaurants..."
            value={searchQuery}
            className="form-control w-75 m-5"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FiSearch className="searchCompsymbol" />
        </div>

        <div className="mx-5 text-center">
          {loading ? (
            <div className="d-flex justify-content-center my-5">
              <div className="loader ">🍽️ Fetching Delicious Meals...</div>
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
          ) : searchQuery && filteredFirms.length === 0 ? (
            <div className="d-flex justify-content-center">
              <div>No match found for "{searchQuery} "</div>
            </div>
          ) : (
            <>
              <h3>Go for Your Favourite Food or Restaurants</h3>
              <section className="firmSection searchFirmSection m-4">
                {filteredFirms.map((item) => (
                  <Link
                    to={`/products/${item._id}/${item.firmName}`}
                    className="link"
                    key={item._id}
                  >
                    <div className="zoomEffect">
                      <div className="firmGroupBox">
                        <div className="firmGroup">
                          <img
                            src={`${API_URL}/uploads/${item.image}`}
                            alt=""
                            onError={handleImageError}
                          />
                          <div className="firmOfferSearch">{item.offer}</div>
                        </div>
                        <div className="firmDetails">
                          <div className="firmName">
                            <strong>{item.firmName}</strong>
                          </div>
                          <div className="firmArea">
                            {item.region.join(", ")}
                          </div>
                          <div className="firmArea">{item.area}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </section>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
