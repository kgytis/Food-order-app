// css + assets
import classes from "./Header.module.css";
import foodImage from "../../assets/food.png";

// components
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImage} alt="Food" />
      </div>
    </>
  );
};

export default Header;
