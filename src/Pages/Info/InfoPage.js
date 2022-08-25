import './InfoPageStyle.css';

const Info = (props) => {
    return (
        <div className='info'>
            <div className='info_text'>
                <label><b> Text </b></label>
                {JSON.stringify(props.formData.text)}
            </div>
            <div className='info_date'>
                <label><b> Date </b></label>
                {JSON.stringify(props.formData.date)}
            </div>
            <div className='info_number'>
                <label><b> Number </b></label>
                {JSON.stringify(props.formData.number)}
            </div>
        </div>
    );
}

export default Info;