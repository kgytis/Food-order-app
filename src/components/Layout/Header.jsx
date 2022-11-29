// css + assets
import classes from "./Header.module.css";
import foodImage from "../../assets/food.png";

// components
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImage} alt="Food image" />
      </div>
    </>
  );
};

export default Header;
