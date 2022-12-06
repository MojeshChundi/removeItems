import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const exstingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const exstingCartItem = state.items[exstingCartItemIndex];
    let updateditems;
    if (exstingCartItem) {
      const updateditem = {
        ...exstingCartItem,
        amount: exstingCartItem.amount + action.item.amount,
      };
      updateditems = [...state.items];
      updateditems[exstingCartItemIndex] = updateditem;
    } else {
      updateditems = state.items.concat(action.item);
    }

    return {
      items: updateditems,
      totalAmount: updateTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const exstingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const exstingItem = state.items[exstingCartItemIndex];
    const updatedtoatalAmount = state.totalAmount - exstingItem.price;
    let updatedItems;
    if (exstingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateditem = { ...exstingItem, amount: exstingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[exstingCartItemIndex] = updateditem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedtoatalAmount,
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
