import React from 'react';
import './SeeGoalsStyle.css';

const SeeGoals = (props) =>
{
    return(
        <div className="goals_displayed" >{JSON.stringify(props.formGoals)}</div>
    );
}

export default SeeGoals;