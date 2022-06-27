import React from "react";

import Button from "./Buttons/Button";
import styles from "./ButtonSection.module.css";

const ButtonSection = () => {
  const listOfButtons = [
    { value: "+", id: "op" },
    { value: "-", id: "op" },
    { value: "x", id: "op" },
    { value: "CLR", id: "op" },
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

  return <></>;
};

export default ButtonSection;
