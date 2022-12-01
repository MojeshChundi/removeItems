import { React, useState } from "react";
import Meals from "./conponents/Meals/Meals";
import Header from "./conponents/LayOut/Header";
import Cart from "./conponents/Cart/Cart";
import CartProvider from "./store/cartContext-provider";

function App() {
  const [cartShown, SetcartShown] = useState(false);
  const showCartHanler = () => {
    SetcartShown(true);
  };
  const hideCartHandler = () => {
    SetcartShown(false);
  };
  return (
    <CartProvider>
      {cartShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHanler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
