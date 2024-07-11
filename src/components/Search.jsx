import React, { useEffect, useState } from "react";
import { API_URL } from "../pages/api";
import { Link } from "react-router-dom";

const Search = () => {
  const [firmData, setFirmData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const firmDataHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`);
      const newFirmData = await response.json();
      setFirmData(newFirmData.vendors);
    } catch (error) {
      alert("Firm data not fetched");
      console.log("Firm data not fetched", error);
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

  return (
    <>
      <input
        type="text"
        placeholder="Search for restaurants..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <section className="firmSection">
        {filteredFirms.length > 0 ? (
          filteredFirms.map((item) => (
            <Link
              to={`/products/${item._id}/${item.firmName}`}
              className="link"
              key={item._id}
            >
              <div className="zoomEffect">
                <div className="firmGroupBox">
                  <div className="firmGroup">
                    <img src={`${API_URL}/uploads/${item.image}`} alt="" />
                    <div className="firmOffer">{item.offer}</div>
                  </div>
                  <div className="firmDetails">
                    <div className="firmName">
                      <strong>{item.firmName}</strong>
                    </div>
                    <div className="firmArea">{item.region.join(", ")}</div>
                    <div className="firmArea">{item.area}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>No results found</div>
        )}
      </section>
    </>
  );
};

export default Search;
