import './SidebarStyle.css';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Sidebar = (props) => {

    let navigatetoForms = useNavigate();
    let navigatetoInfos = useNavigate();
    const [text,setText] = useState(props.text);

    const clickHandler = () => {
        setText('Text updated');
        console.log(text);
    }

    const clickHandlerForms = () => {
        navigatetoForms('/Formpage');
    }

    const clickHandlerInfos = () => {
        navigatetoInfos('/Infopage');
    }

    return (
    <div className='sidebar'> {text}
        <button onClick={clickHandler}> Do something </button>
        <button onClick={clickHandlerForms}> Go to forms </button>
        <button onClick={clickHandlerInfos}> Go to info </button>
    </div>
    );
}

export default Sidebar;
