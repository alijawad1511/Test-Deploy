import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav
      className={
        styles.my_navbar +
        " d-flex justify-content-between align-items-center px-5"
      }
    >
      <div className="d-flex justify-content-between align-items-center">
        <div className={styles.btn_menu + " me-4"}>
          <i class="fa-solid fa-bars text-dark"></i>
        </div>
        <div className={styles.logo + " text-success"}>
          Green <span className="fw-bold">Heart</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
