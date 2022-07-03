import React from "react";
import styles from "./Buttons/button.module.css";

const button = (param) => {
  return (
    <div className={styles.buttonBody1}>
      <button className={`op ${styles.button1}`}>
        <p className={styles.buttonText} onClick={param.onClick}>
          {param.value}
        </p>
      </button>
    </div>
  );
};

export default button;
