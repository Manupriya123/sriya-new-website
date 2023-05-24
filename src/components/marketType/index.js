import React, { useState } from "react";
import "./index.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const MarketTypes = ({ props }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = props.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="common-search-container">
        <h2>Imagine what we can do for you – find out here!</h2>
        <div className="market-type-search">
          <SearchIcon />
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search..."
          />
        </div>
      </div>
      <div>
        <div className="market-item container_wrapper">
          {filteredData.map((item, index) => (
            <div className="items-container">
              <img src={item.img} />
              <Link to="">
                <h2 key={index}>{item.title}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketTypes;
