import './MealsStyle.css';
import AvailableMeals from './AvailableMeals';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {useEffect, useState} from "react";

const Meals = (props) => {

    const [meals,setMeals] = useState([]);
    const [enteredMeal,setEnteredMeal] = useState({});

    useEffect(()=>{
        fetchMealsHandler();
    },[]);

    function fetchMealsHandler() {
        fetch('http://localhost:3000/Meals')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMeals(data.mealsList);
            });
    }

    const mealHandler = (event) => {
        setEnteredMeal({...enteredMeal, [event.target.name]: event.target.value});
    }

    const submitAddMeals = (event) => {

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(enteredMeal)
        };

        fetch('http://localhost:3000/Meals', requestOptions)
            .then((data) => {
                fetchMealsHandler();
            });
    }

    return(
        <div className="meals_text">
            <Card className="card_wrapper">
                <CardContent className="new_meal">
                    <input className="meal_input" onChange={mealHandler} name="name" type="text" placeholder="Title" />
                    <input className="meal_input" onChange={mealHandler} name="description" type="text" placeholder="Description" />
                    <input className="meal_input" onChange={mealHandler} name="price" type="number" placeholder="Price" />
                    <button className="meal_button" onClick={submitAddMeals}>Add new meal</button>
                </CardContent>
            </Card>
            <Card variant="outlined">
                <CardContent>
                    <AvailableMeals meals={meals}/>
                </CardContent>
            </Card>
        </div>
    );
}

export default Meals;