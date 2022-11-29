import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (prevState, action) => {
  if (action.type === "ADD_CART_ITEM") {
    const updatedItems = prevState.items.concat(action.value);
    const updateTotalAmount =
      prevState.totalAmount + action.value.price * action.value.amount;
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    dispatchCartAction({
      type: "ADD_CART_ITEM",
      value: item,
    });
  };

  const removeItemToCart = (item) => {
    dispatchCartAction({
      type: "REMOVE_CART_ITEM",
      id: item.id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemToCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
