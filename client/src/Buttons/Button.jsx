import React from "react";
import styles from "./button.module.css";

const button = ({ param }) => {
  return (
    <div className={styles.buttonBody}>
      <button className={styles.button}>
        <p className={styles.buttonText}>12</p>
      </button>
    </div>
  );
};

export default button;
