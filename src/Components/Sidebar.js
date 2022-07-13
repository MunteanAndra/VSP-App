import './SidebarStyle.css';
import React, {useState} from 'react';

const Sidebar = (props) => {

    const [text,setText] = useState(props.text);

    const clickHandler = () => {
        setText('Text updated');
        console.log(text);
    }

    return (
    <div className='sidebar'> {text}
        <button onClick={clickHandler}> Do something </button>
    </div>
    );
}

export default Sidebar;
