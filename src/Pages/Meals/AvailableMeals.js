import MealItem from './MealItem';
import './AvailableMealsStyle.css';
import { useState, useEffect } from 'react';

const AvailableMeals = (props) => {

  const [meals,setMeals] = useState([]);

  useEffect(()=>{
    fetchMealsHandler();
  },[]);

  function fetchMealsHandler() {

    fetch('http://localhost:3000/Meals')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const transformedMeals = data.mealsList.map((mealsData) => {
            return {
              id: mealsData.id,
              key: mealsData.id,
              name: mealsData.name,
              description: mealsData.description,
              price: mealsData.price,
            };
          });
          setMeals(transformedMeals);
        });
  }

  return (
    <div className="meals">
        {meals.map((meal) => (
            <MealItem className="unordered_meal_list"
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />))
        }
    </div>
  );
};

export default AvailableMeals;