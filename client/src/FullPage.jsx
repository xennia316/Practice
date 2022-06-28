import React, { useEffect, useState } from "react";
import Button from "./Buttons/Button";
import ButtonSection from "./ButtonSection";
import styles from "./FullPage.module.css";

const FullPage = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [finale, setFinale] = useState(0);
  const [arrNumbers, setarrNumbers] = useState([]);

  const handler = (e) => {
    e.preventDefault();
    let i = e.target.innerText;
    let temp = [...arrNumbers, i];
    setarrNumbers(temp);
    setNumber(i);
  };

  useEffect(() => {
    console.log(arrNumbers);
  }, [arrNumbers]);

  const clear = () => {
    setarrNumbers([]);
    setFinale(0);
  };

  const adder = () => {
    setFinale(number + number2);
    console.log(finale);
  };

  const listOfButtons = [
    { value: 1, id: "num" },
    { value: 2, id: "num" },
    { value: 3, id: "num" },
    { value: 4, id: "num" },
    { value: 5, id: "num" },
    { value: 6, id: "num" },
    { value: 7, id: "num" },
    { value: 8, id: "num" },
    { value: 9, id: "num" },
    { value: 0, id: "num" },
  ];

  const listOfOperations = [
    { value: "+", id: "op", onClick: adder },
    { value: "-", id: "op" },
    { value: "x", id: "op" },
    { value: "/", id: "op" },
    { value: "CLR", id: "op", onClick: clear },
    { value: "DEL", id: "op" },
    { value: "%", id: "op" },
    { value: ".", id: "op" },
    { value: "( )", id: "op" },
    { value: "+/-", id: "op" },
  ];

  const inputs = listOfButtons.map((buttons, index) => {
    return <Button key={index} value={buttons.value} onClick={handler} />;
  });

  const Operations = listOfOperations.map((op, index) => {
    return <ButtonSection key={index} value={op.value} onClick={op.onClick} />;
  });
  return (
    <div className={styles.body}>
      <section className={styles.display}>
        <p>{arrNumbers}</p>
      </section>
      <section className={styles.buttonSection}>
        <section className={styles.Numbers}>
          <div className={styles.But}>
            {inputs}
            {Operations}
          </div>
          <button className={styles.equal}>=</button>
        </section>
        <section className={styles.Operations}></section>
      </section>
    </div>
  );
};

export default FullPage;
