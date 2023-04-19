import styles from "@/styles/Input.module.css";
import { useState } from "react";

export default function Input(props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <label className={styles.defaultStyleLabel} htmlFor="">
        {props.label}
      </label>
      <input
        className={styles.defaultStyleInput}
        type={props.type}
        placeholder={props.placeholder}
        value={inputValue}
        onChange={handleInputChange}
      />
    </>
  );
}
