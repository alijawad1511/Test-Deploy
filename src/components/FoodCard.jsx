import React from "react";
import styles from "../styles/FoodCard.module.css";

const FoodCard = ({ clothingBank }) => {
  const { id, title, imgUrl } = clothingBank;

  return (
    <div className={styles.rounded_corner + " card mb-4 me-3"}>
      <img
        src={imgUrl}
        width={300}
        height={200}
        className={styles.card_image}
        alt=""
      />
      <div className={styles.card_body + " px-2"}>
        <div className="d-flex justify-content-between align-items-center py-2">
          <div className={styles.card_title + " py-1"}>{title}</div>
          <div className={styles.location + " text-danger"}>
            <i class="fa-solid fa-location-dot"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
