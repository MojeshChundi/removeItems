import { useContext } from "react";
import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const noOfItemsInCart = cartCtx.items.reduce((curNo, item) => {
    return curNo + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Add to Cart</span>
      <span className={classes.badge}>{noOfItemsInCart}</span>
    </button>
  );
};
export default HeaderCartButton;
