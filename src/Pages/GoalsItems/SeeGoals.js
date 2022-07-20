import React from 'react';
import './SeeGoalsStyle.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const SeeGoals = (props) =>
{
    return(
        <div className="goals_displayed">
            <Card variant="outlined" className="card_goals">
                <CardContent>
                    <ul className="unordered_list">
                        { props.formGoals.map((goal) => (
                            <li key={goal.id}>
                                {goal.text1} <br></br> {goal.text2}
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}

export default SeeGoals;