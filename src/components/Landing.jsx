import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const [postalCode, setPostalCode] = useState("");

  const handleClick = () => {
    navigate("/foods");
  };

  return (
    <div className="landing_content ms-5">
      <h1 className="title mb-5 text-white">
        Find Nearest Clothing Bank Charity
      </h1>
      <div className="d-flex">
        <div className="search_field me-2">
          <i class="fa-solid fa-location-dot me-3"></i>
          <input
            type="number"
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Enter Your Postal Code"
          />
        </div>
        <Link
          to="foods"
          state={postalCode}
          className="btn_search"
          onClick={handleClick}
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default Landing;
