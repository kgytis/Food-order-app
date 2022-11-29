// hooks
import { useState } from "react";
// components
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
// context component
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const modalHandler = () => {
    setIsCartVisible((prev) => {
      return !prev;
    });
  };
  return (
    <CartProvider>
      {isCartVisible && <Cart onShowCart={modalHandler} />}
      <Header onShowCart={modalHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
