// css
import classes from "./HeaderCartButton.module.css";
// components
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnAnim, setBtnAnim] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartitems = items.reduce((curr, item) => {
    return curr + item.quantity;
  }, 0);

  const btnClasses = `${classes.button} ${btnAnim ? classes.bump : ""}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnim(true);
    const timer = setTimeout(() => {
      setBtnAnim(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button onClick={props.onShowCart} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartitems}</span>
    </button>
  );
};

export default HeaderCartButton;
