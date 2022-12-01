import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartitems = (
    <ul>
      {[{ id: "c1", name: "sushi", amount: 2, price: "11.5" }].map(
        (item) => item.name
      )}
    </ul>
  );
  return (
    <Modal>
      {cartitems}
      <div className={classes.total}>
        <span>total Amount</span>
        <span>333</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
