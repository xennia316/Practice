import React from "react";
import styles from "./button.module.css";

const button = (param) => {
  return (
    <div className={styles.buttonBody}>
      <button className={styles.button} id={param.id} onClick={param.onClick}>
        <p className={styles.buttonText}>{param.value}</p>
      </button>
    </div>
  );
};

export default button;
