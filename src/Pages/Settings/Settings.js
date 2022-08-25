import './SettingsStyle.css'

const Settings = () => {

    const date = new Date();
    console.log(date);

    return(

        <div className="settings_items"> Settings {JSON.stringify(date.toLocaleString())} </div>

    );
}

export default Settings;