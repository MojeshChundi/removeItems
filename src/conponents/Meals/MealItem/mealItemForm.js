import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amounIsValid, SetamountIsValid] = useState(true);
  const amountInput = useRef();
  const SubmitFormHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInput.current.value;
    const enterdAmountNum = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enterdAmountNum < 1 ||
      enterdAmountNum > 5
    ) {
      SetamountIsValid(false);
      return;
    }
    props.onAddToCart(enterdAmountNum);
  };

  return (
    <form className={classes.form} onSubmit={SubmitFormHandler}>
      <Input
        ref={amountInput}
        label="Amount"
        input={{
          id: "Amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amounIsValid && <p>please enter valid Amounts</p>}
    </form>
  );
};
export default MealItemForm;
