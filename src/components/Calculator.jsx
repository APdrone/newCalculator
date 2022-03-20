import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeTotal } from "../store/dataSlice";

const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const dispatch = useDispatch();
  const storedTotal = useSelector((state) => state.dataActions.userTotal);
  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (val) => {
    if (
      (ops.includes(val) && calc === "") ||
      (ops.includes(val) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + val);

    if (!ops.includes(val)) {
      // eslint-disable-next-line no-eval
      setResult(eval(calc + val).toString());
    }
  };

  const calculateTotal = () => {
    // eslint-disable-next-line no-eval
    const total = eval(calc).toString();
    setCalc(total);
    dispatch(storeTotal(total));
  };

  const deleteLastInput = () => {
    if (calc === "") {
      return;
    } else {
      const newVal = calc.slice(0, -1);
      setCalc(newVal);
    }
  };
  const ClearResult = () => {
    if (calc === "" && result === "") {
      return;
    } else {
      setResult("");
      setCalc("");
    }
  };

  const setToTotalResult = () => {
    if (storedTotal === "") {
      return;
    } else {
      setResult(storedTotal);
      setCalc(storedTotal);
    }
  };

  return (
    <div className="calc-container">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""} {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={deleteLastInput}>DEL</button>
          <button onClick={ClearResult}>AC</button>
          <button onClick={setToTotalResult}>ANS</button>
        </div>
        <div className="digits">
          <button onClick={() => updateCalc("1")}>1</button>
          <button onClick={() => updateCalc("2")}>2</button>
          <button onClick={() => updateCalc("3")}>3</button>
          <button onClick={() => updateCalc("4")}>4</button>
          <button onClick={() => updateCalc("5")}>5</button>
          <button onClick={() => updateCalc("6")}>6</button>
          <button onClick={() => updateCalc("7")}>7</button>
          <button onClick={() => updateCalc("8")}>8</button>
          <button onClick={() => updateCalc("9")}>9</button>
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculateTotal}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
