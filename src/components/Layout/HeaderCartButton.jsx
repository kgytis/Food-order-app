// css
import classes from "./HeaderCartButton.module.css";
// components
import CartIcon from "../Cart/CartIcon";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartitems = cartCtx.items.reduce((curr, item) => {
    return curr + item.quantity;
  }, 0);
  return (
    <button onClick={props.onShowCart} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartitems}</span>
    </button>
  );
};

export default HeaderCartButton;
