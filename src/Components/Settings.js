import './SettingsStyle.css'
import { useState } from 'react';

const Settings = () => {

    const date = new Date();
    const [enteredDate, setEnteredDate] = useState();
    console.log(date);

    return(

        <div className="settings_items"> Settings {JSON.stringify(date.toLocaleString())} </div>

    );
}

export default Settings;