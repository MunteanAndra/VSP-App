import './SidebarStyle.css';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Sidebar = (props) => {

    let navigatetoForms = useNavigate();
    let navigatetoInfos = useNavigate();
    let navigatetoGoals = useNavigate();

    const [text,setText] = useState(props.text);

    const clickHandler = () => {
        setText('Text updated');
        console.log(text);
    };

    const clickHandlerForms = () => {
        navigatetoForms('/Formpage');
    };

    const clickHandlerInfos = () => {
        navigatetoInfos('/Infopage');
    };

    const clickHandlerGoals = () => {
        navigatetoGoals('/Goals');
    };

    return (
    <div className='sidebar'> {text}
        <div className="page-buttons">
            <button className="button1" onClick={clickHandler}> Do something </button>
            <button className="button2" onClick={clickHandlerForms}> Go to forms </button>
            <button className="button3" onClick={clickHandlerInfos}> Go to info </button>
            <button className="button4" onClick={clickHandlerGoals}> Go to Goals </button>
        </div>
    </div>
    );
}

export default Sidebar;
