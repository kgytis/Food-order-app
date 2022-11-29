import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (prevState, action) => {
  if (action.type === "ADD_CART_ITEM") {
    const updateTotalAmount =
      prevState.totalAmount + action.item.price * action.item.quantity;
    // checks whether previous state (array) had an item with same id (adding sushi and sushi already exists)
    const existingCartItemIndex = prevState.items.findIndex(
      (item) => item.id === action.item.id
    );
    // accessing that already existing entry to access it (item object with name, id, price, etc...)
    // othwerwise = will return null
    const existingCartItem = prevState.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        // copying already existing item (sushi) and changes only the quantity
        ...existingCartItem,
        // updating quantity with prevQuantity + additional quantity
        quantity: existingCartItem.quantity + action.item.quantity,
      };
      // copying existing item array
      updatedItems = [...prevState.items];
      // finds a item, which will be duplicate and changes it with updatedItem (in this case only quantity changes)
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = prevState.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  if ((action.type = "REMOVE_CART_ITEM")) {
    // looks through cart, whether such item already exists
    const existingCartItemIndex = prevState.items.findIndex(
      (item) => item.id === action.id
    );
    // access existing item
    const existingItem = prevState.items[existingCartItemIndex];
    // console.log(existingItem);
    // decreasing total amount by the removed items price
    const updatedTotalAmount = prevState.totalAmount - existingItem.price;
    let updatedItems;
    // checks whether it is the last item, if yes -> remove it from cart, else just decrease quantity
    if (existingItem.quantity === 1) {
      updatedItems = prevState.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems = [...prevState.items];
      updatedItems[existingCartItemIndex] = updateItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
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
      item: item,
    });
  };

  const removeItemToCart = (id) => {
    dispatchCartAction({
      type: "REMOVE_CART_ITEM",
      id: id,
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
