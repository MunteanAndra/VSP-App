import React from 'react';
import './SeeGoalsStyle.css';

const SeeGoals = (props) =>
{
    return(
        <div className="goals_displayed">
            <div className="goals_card">
                <div className="first_goal">
                    <label><b> First goal </b></label>
                    { JSON.stringify(props.formGoals.firstGoal) }
                </div>
                <div className="second_goal">
                    <label><b> Second goal </b></label>
                    { JSON.stringify(props.formGoals.secondGoal) }
                </div>
            </div>
        </div>
    );
}

export default SeeGoals;