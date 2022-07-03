import React from "react";
import styles from "./button.module.css";

const button = (param) => {
  return (
    <div className={styles.buttonBody}>
      <button className={`num ${styles.button}`} onClick={param.onClick}>
        <p className={styles.buttonText}>{param.value}</p>
      </button>
    </div>
  );
};

export default button;
