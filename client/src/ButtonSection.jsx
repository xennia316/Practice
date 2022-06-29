import React from "react";
import styles from "./Buttons/button.module.css";

const button = (param) => {
  return (
    <div className={styles.buttonBody}>
      <button className={`op ${styles.button1}`} onClick={param.onClick}>
        <p className={styles.buttonText} onClick={param.onClick}>
          {param.value}
        </p>
      </button>
    </div>
  );
};

export default button;
