import './HomeStyle.css';
import RLS_photo from '../../images/Real_Life_Sciences.png';

const Home = () => {
    return(
        <div className="home_page">
            <div className="home_text"> WELCOME TO </div>
            <img alt="" src={RLS_photo} className="rls_photo"/>
        </div>
    );
}

export default Home;