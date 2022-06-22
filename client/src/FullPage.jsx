import React from "react";
import styles from "./FullPage.module.css";

const FullPage = () => {
  return (
    <div className={styles.body}>
      <section className={styles.display}>
        <p>Start Calculating ...</p>
      </section>
      <section className={styles.buttonSection}>
        <section className={styles.Numbers}></section>
        <section className={styles.Operations}></section>
      </section>
    </div>
  );
};

export default FullPage;
