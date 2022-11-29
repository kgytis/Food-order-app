// hooks
import { useState } from "react";
// components
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const modalHandler = () => {
    setIsCartVisible((prev) => {
      return !prev;
    });
  };
  return (
    <>
      {isCartVisible && <Cart onShowCart={modalHandler} />}
      <Header onShowCart={modalHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </>
  );
}

export default App;
