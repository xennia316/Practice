import React from "react";
import { useState } from "react";

import Button from "./Buttons/Button";
import styles from "./ButtonSection.module.css";

const ButtonSection = () => {
  const adder = (e) => {
    e.preventDefault();
    if (clear) {
      setClear(false);
    }
    let currentNum = document.querySelector("#num").value;
    if ((currentNum = "")) return;
    let sum = currentSum + parseInt(currentNum);
    setcurrentSum(sum);
  };
  const Clear = (e) => {
    e.preventDefault();
    setClear(true);
    setcurrentSum(0);
  };
  const Subtract = (e) => {
    e.preventDefault();
    if (clear) setClear(false);
    let currentNum = document.querySelector("#num").value;
    let sum = currentSum - parseInt(currentNum);
    setcurrentSum(sum);
  };

  const listOfButtons = [
    { value: "+", id: "op", onclick: adder },
    { value: "-", id: "op", onclick: Subtract },
    { value: "x", id: "op" },
    { value: "CLR", id: "op", onclick: Clear },
    { value: 1, id: "num" },
    { value: 2, id: "num" },
    { value: 3, id: "num" },
    { value: "DEL", id: "op" },
    { value: 4, id: "num" },
    { value: 5, id: "num" },
    { value: 6, id: "num" },
    { value: "%", id: "op" },
    { value: 7, id: "num" },
    { value: 8, id: "num" },
    { value: 9, id: "num" },
    { value: "/", id: "op" },
    { value: 0, id: "num" },
    { value: ".", id: "op" },
    { value: "( )", id: "op" },
    { value: "+/-", id: "op" },
  ];

  const inputs = listOfButtons.map((buttons, index) => {
    return (
      <Button
        key={index}
        value={buttons.value}
        id={buttons.id}
        onClick={buttons.onclick}
      />
    );
  });

  const [currentSum, setcurrentSum] = useState(0);
  const [clear, setClear] = useState(false);

  //   Adder function

  return (
    <>
      <div className={styles.But}>{inputs}</div>
      <button className={styles.equal}>=</button>
    </>
  );
};

export default ButtonSection;
