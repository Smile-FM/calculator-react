import { useState } from "react";

export default function Calculator() {
  const [currentOperand, setCurrentOperand] = useState("");
  const [previousOperand, setPreviousOperand] = useState("");
  const [operation, setOperation] = useState("");


  function appendNumber(number: string) {
    setCurrentOperand(prev => prev + number);
  }


  function chooseOperation(op: string) {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      compute();
    }
    setOperation(op);
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
  }

 

  function compute() {
    let result: number;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "x":
        result = prev * current;
        break;
      case "÷":
        result = prev / current;
        break;
      default:
        return;
    }

    setCurrentOperand(result.toString());
    setOperation("");
    setPreviousOperand("");
  }

  function clear() {
    setCurrentOperand("");
    setPreviousOperand("");
    setOperation("");
  }

  function deleteDigit() {
    setCurrentOperand(currentOperand.slice(0, -1));
  }

  return (
    <div className="cal-grid">
      <div className="op">
        <div className="prev-operand">
          {previousOperand} {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>

      <button className="span" onClick={clear}>AC</button>
      <button onClick={deleteDigit}>DEL</button>
      <button onClick={() => appendNumber(".")}>.</button>
      <button onClick={() => appendNumber("1")}>1</button>
      <button onClick={() => appendNumber("2")}>2</button>
      <button onClick={() => appendNumber("3")}>3</button>
      <button onClick={() => chooseOperation("+")}>+</button>
      <button onClick={() => appendNumber("4")}>4</button>
      <button onClick={() => appendNumber("5")}>5</button>
      <button onClick={() => appendNumber("6")}>6</button>
      <button onClick={() => chooseOperation("-")}>-</button>
      <button onClick={() => appendNumber("7")}>7</button>
      <button onClick={() => appendNumber("8")}>8</button>
      <button onClick={() => appendNumber("9")}>9</button>
      <button onClick={() => chooseOperation("x")}>x</button>
      <button onClick={() => appendNumber("0")}>0</button>
      <button onClick={() => chooseOperation("÷")}>÷</button>
      <button className="span" onClick={compute}>=</button>
    </div>
  );
}
