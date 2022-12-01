import { Fragment } from "react";
import Meals from "./conponents/Meals/Meals";
import Header from "./conponents/LayOut/Header";
import Cart from "./conponents/Cart/Cart";

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
