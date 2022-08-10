import MealItem from './MealItem';
import './AvailableMealsStyle.css';
import { useState, useEffect } from 'react';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = (props) => {

  const [meals,setMeals] = useState([]);

  useEffect(()=>{
    fetchMealsHandler();
  },[]);

  async function fetchMealsHandler() {

    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();

    const transformedMeals = data.results.map((mealsData) => {
        return{
        id: mealsData.episode_id,
        key: mealsData.episode_id,
        name: mealsData.title,
        description: mealsData.opening_crawl,
        //price: mealsData.price,
        };
    });
    setMeals(transformedMeals);
  }


  return (
    <div className="meals">
        {meals.map((meal) => (
            <MealItem className="unordered_meal_list"
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              //price={meal.price}
            />))
        }
    </div>
  );
};

export default AvailableMeals;