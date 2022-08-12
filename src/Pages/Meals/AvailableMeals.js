import MealItem from './MealItem';
import './AvailableMealsStyle.css';

const AvailableMeals = (props) => {

  return (
    <div className="meals">
        {props.meals.map((meal) => {
            return <MealItem className="unordered_meal_list"
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          })
        }
    </div>
  );
};

export default AvailableMeals;