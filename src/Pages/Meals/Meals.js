import './MealsStyle.css';
import AvailableMeals from './AvailableMeals';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Meals = () => {
    return(
        <div className="meals_text">
            <Card className="card_wrapper">
                <CardContent className="new_meal">
                    <input className="meal_input" type="text" placeholder="Title" />
                    <input className="meal_input" type="text" placeholder="Description" />
                    <input className="meal_input" type="number" placeholder="Price" />
                    <button className="meal_button">Add new meal</button>
                </CardContent>
            </Card>
            <Card variant="outlined">
                <CardContent>
                    <AvailableMeals />
                </CardContent>
            </Card>
        </div>
    );
}

export default Meals;