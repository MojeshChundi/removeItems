import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateditems = state.items.concat(action.item);
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updateditems,
      totalAmount: updateTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchcartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const AddItemCartHandler = (item) => {
    dispatchcartAction({ type: "ADD", item: item });
  };
  const RemoveItemCartHandler = (id) => {
    dispatchcartAction({ type: "REMOVE", id: id });
  };

  const cartcontext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    AddItem: AddItemCartHandler,
    removeItem: RemoveItemCartHandler,
  };

  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
