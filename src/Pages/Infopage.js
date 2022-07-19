import './InfopageStyle.css';

const Info = (props) => {
    return (
        <div className='info'>
            <div className='info_text' style={{color:"black"}}>{JSON.stringify(props.formData)}</div>
        </div>
    );
}

export default Info;