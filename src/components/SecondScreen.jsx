import React from "react";
import FoodCard from "./FoodCard";
import styles from "../styles/SecondScreen.module.css";
import { clothingBanks } from "../data";
import { useLocation, useNavigate } from "react-router-dom";

const SecondScreen = () => {
  const location = useLocation();
  console.log("Postal Code:", location.state);

  return (
    <>
      {/* <Navbar2 /> */}
      <nav
        className={
          styles.my_navbar +
          " d-flex justify-content-between align-items-center px-5"
        }
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className={styles.btn_menu + " me-4"}>
            <i class="fa-solid fa-bars text-sucess"></i>
          </div>
          <div className={styles.logo + " text-sucess"}>
            Green <span className="fw-bold">Heart</span>
          </div>
        </div>
        <div className={styles.search_field + " d-flex align-items-center"}>
          <i class="fa-solid fa-magnifying-glass me-3"></i>
          <input
            className={styles.input_field}
            type="text"
            placeholder="Find Clothing Bank"
          />
        </div>
      </nav>
      <div className="d-flex flex-wrap px-4 mt-5 bg-white">
        {clothingBanks.map((clothingBank) => (
          <FoodCard clothingBank={clothingBank} />
        ))}
      </div>
    </>
  );
};

export default SecondScreen;
