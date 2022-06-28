import React, { useEffect, useState } from "react";
import Button from "./Buttons/Button";
import ButtonSection from "./ButtonSection";
import styles from "./FullPage.module.css";

const FullPage = () => {
  const [number, setNumber] = useState(0);
  const [finale, setFinale] = useState(0);
  const [arrNumbers, setArrNumbers] = useState([]);

  useEffect(() => {
    console.log("current number array: ", arrNumbers);
    console.log("current final array", finale);
  }, [arrNumbers]);

  const clear = () => {
    setNumber(0);
    setArrNumbers([]);
    setFinale(0);
  };

  const handler = (e) => {
    e.preventDefault();
    let i = e.target.innerText;
    let temp = [...arrNumbers, i];
    let a = temp.reduce((prev, curr) => prev + curr);
    setArrNumbers(temp);
    setNumber(a);
  };
  const calculate = () => {
    console.log(number);
    console.log(typeof number);
    let a = eval(number);
    setFinale(a);
    console.log(a);
  };

  const listOfButtons = [
    { value: "√", id: "op" },
    { value: 1, id: "num" },
    { value: 2, id: "num" },
    { value: 3, id: "num" },
    { value: "+", id: "op" },
    { value: 4, id: "num" },
    { value: 5, id: "num" },
    { value: 6, id: "num" },
    { value: "-", id: "op" },
    { value: 7, id: "num" },
    { value: 8, id: "num" },
    { value: 9, id: "num" },
    { value: "x", id: "op" },
    { value: 0, id: "num" },
    { value: ".", id: "op" },
    { value: "%", id: "op" },
    { value: "/", id: "op" },
    { value: "(", id: "op" },
    { value: ")", id: "op" },
    { value: "PI", id: "op" },
    { value: "^", id: "op" },
    { value: "sin", id: "op" },
    { value: "cos", id: "op" },
    { value: "tan", id: "op" },
    { value: "|", id: "op" },
  ];

  const listOfOperations = [
    { value: "±", id: "op", onClick: handler },
    { value: "CLR", id: "op", onClick: clear },
    { value: "DEL", id: "op", onClick: clear },
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
        <p>{finale}</p>
      </section>
      <section className={styles.buttonSection}>
        <section className={styles.Numbers}>
          <div className={styles.But}>
            {Operations}
            {inputs}
          </div>
          <button onClick={calculate} className={styles.equal}>
            =
          </button>
        </section>
        <section className={styles.Operations}></section>
      </section>
    </div>
  );
};

export default FullPage;
