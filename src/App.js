import { Fragment } from "react";
import Meals from "./conponents/Meals/Meals";
import Header from "./conponents/LayOut/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
