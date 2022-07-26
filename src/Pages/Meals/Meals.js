import './MealsStyle.css';
import AvailableMeals from './AvailableMeals';
import { Fragment } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Meals = () => {
    return(
        <div className="meals_text">
            <Card variant="outlined">
                <CardContent>
                    <AvailableMeals />
                </CardContent>
            </Card>
        </div>
    );
}

export default Meals;