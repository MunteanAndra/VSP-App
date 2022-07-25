import './MealsStyle.css';
import AvailableMeals from './AvailableMeals';
import { Fragment } from 'react';

const Meals = () => {
    return(
        <div className="meals_text">
            <AvailableMeals />
        </div>
    );
}

export default Meals;