import './SidebarStyle.css';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Sidebar = (props) => {

    let navigateToForms = useNavigate();
    let navigateToInfo = useNavigate();
    let navigateToGoals = useNavigate();
    let navigateToSeeGoals = useNavigate();

    const [text,setText] = useState(props.text);

    const clickHandler = () => {
        setText('Text updated');
        console.log(text);
    };

    const clickHandlerForms = () => {
        navigateToForms('/Formpage');
    };

    const clickHandlerInfo = () => {
        navigateToInfo('/Infopage');
    };

    const clickHandlerGoals = () => {
        navigateToGoals('/Goals');
    };

    const clickHandlerSeeGoals = () => {
        navigateToSeeGoals('/SeeGoals');
    };

    return (
    <div className='sidebar'> {text}
        <div className="page-buttons">
            <button className="button1" onClick={clickHandler}> Do something </button>
            <button className="button2" onClick={clickHandlerForms}> Form </button>
            <button className="button3" onClick={clickHandlerInfo}> See info </button>
            <button className="button4" onClick={clickHandlerGoals}> Add Goals </button>
            <button className="button5" onClick={clickHandlerSeeGoals}> See goals </button>
        </div>
    </div>
    );
}

export default Sidebar;
