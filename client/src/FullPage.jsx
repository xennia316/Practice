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

  const Delete = () => {
    let n = arrNumbers.pop();
    setNumber(n);
  };

  const minus = () => {
    // let l = arrNumbers.length;
    // let newArr = arrNumbers.splice(l, 0, "-");
    // let a = [...arrNumbers, newArr]
    let newArr = ["-", ...arrNumbers];
    setArrNumbers(newArr);
  };

  const squareRoot = () => {
    let n = Math.sqrt(number);
    setNumber(n);
  };

  const Pi = (e) => {
    e.preventDefault();
    let newArr = [...arrNumbers, "22/7"];
    let a = newArr.reduce((prev, curr) => prev + curr);
    setArrNumbers(newArr);
    setNumber(a);
  };

  const exp = () => {
    let n = Math.E(n);
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
    { value: 7, id: "num" },
    { value: 8, id: "num" },
    { value: 9, id: "num" },
    { value: "*", id: "op" },
    { value: 4, id: "num" },
    { value: 5, id: "num" },
    { value: 6, id: "num" },
    { value: "-", id: "op" },
    { value: 1, id: "num" },
    { value: 2, id: "num" },
    { value: 3, id: "num" },
    { value: "+", id: "op" },
    { value: ".", id: "op" },
    { value: 0, id: "num" },
    { value: "e", id: "op" },
    { value: "/", id: "op" },
  ];

  const listOfOperations = [
    { value: "±", id: "op", onClick: minus },
    { value: "√", id: "op", onClick: squareRoot },
    { value: "(", id: "op", onClick: handler },
    { value: ")", id: "op", onClick: handler },
    { value: "PI", id: "op", onClick: Pi },
    { value: "^", id: "op", onClick: handler },
    { value: "sin", id: "op", onClick: handler },
    { value: "cos", id: "op", onClick: handler },
    { value: "tan", id: "op", onClick: handler },
    { value: "ln", id: "op", onClick: handler },
    { value: "log", id: "op", onClick: handler },
    { value: "sinh", id: "op", onClick: handler },
    { value: "cosh", id: "op", onClick: handler },
    { value: "tanh", id: "op", onClick: handler },
  ];

  const deletersList = [
    { value: "CLR", id: "op", onClick: clear },
    { value: "DEL", id: "op", onClick: Delete },
  ];

  const deleters = deletersList.map((buttons, index) => {
    return (
      <Button
        className={styles.delButtons}
        key={index}
        value={buttons.value}
        onClick={buttons.onClick}
      />
    );
  });

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
      <div className={styles.del}>{deleters}</div>
      <section className={styles.buttonSection}>
        <section className={styles.Numbers}>
          <div className={styles.But}>{inputs}</div>
          <div className={styles.But1}>{Operations}</div>
        </section>
        <button onClick={calculate} className={styles.equal}>
          =
        </button>
        <section className={styles.Operations}></section>
      </section>
    </div>
  );
};

export default FullPage;
