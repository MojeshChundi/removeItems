import { Fragment, useState } from "react";
import Meals from "./conponents/Meals/Meals";
import Header from "./conponents/LayOut/Header";
import Cart from "./conponents/Cart/Cart";

function App() {
  const [cartShown, SetcartShown] = useState(false);
  const showCartHanler = () => {
    SetcartShown(true);
  };
  const hideCartHandler = () => {
    SetcartShown(false);
  };
  return (
    <Fragment>
      {cartShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHanler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
