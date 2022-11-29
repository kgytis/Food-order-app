import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import Card from "../UI/Card";
const Meals = () => {
  return (
    <>
      <MealsSummary />
      <Card>
        <AvailableMeals />
      </Card>
    </>
  );
};

export default Meals;
