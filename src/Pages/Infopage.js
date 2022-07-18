import './InfopageStyle.css';

const Info = (props) => {
    return (
        <div>
            <div className='info'> new page </div>
            <div style={{color:"black"}}>{JSON.stringify(props.formdata)}</div>
        </div>
    );
}

export default Info;