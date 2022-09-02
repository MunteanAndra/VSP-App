import './App.css';
import React, {useEffect, useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import FormPage from './Pages/Form/FormPage';
import InfoPage from './Pages/Info/InfoPage';
import Goals from './Pages/GoalsItems/Goals';
import SeeGoals from './Pages/GoalsItems/SeeGoals';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Cart from './Components/Cart/Cart';
import Profile from './Pages/Profile/Profile';
import Settings from './Pages/Settings/Settings';
import Meals from './Pages/Meals/Meals';
import Task from './Pages/Tasks/Task';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {authSelector, login} from "./store/Auth";
import CustomSnackbar from "./Components/CustomSnackbar";
import IncrementLabel from "./Components/IncrementLabel";

function App() {

    const nav = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState('');
    const [formGoals, setFormGoals] = useState([]);
    const [cartShown, setCartShown] = useState(false);
    const storeAuth = useSelector( state => authSelector(state));

   useEffect(() => {
       if(localStorage.getItem("token")) {
           dispatch(login());
       } else {
           if( !storeAuth ) {
               nav('/Login');
           }
       }

   },[]);

   const showCartHandler = () => {
    setCartShown(true);
   };

   const hideCartHandler = () => {
    setCartShown(false);
   };

   const submitHandlerGoals = (textGoal1,textGoal2) => {
    setFormGoals((prevGoalList) =>
       ( [...prevGoalList, { text1: textGoal1, text2: textGoal2, id: Math.random().toString()}] )
    );
   };

  return (
    <div className = "App">
        { cartShown && <Cart onClose = {hideCartHandler} /> }
        <Navbar onShowCart = {showCartHandler}  />
        <div style = {{display:"flex"}}>
            { storeAuth ?
                <>
                <Sidebar />
                <Routes>
                    <Route path = "/"
                           element = { <Home /> } />
                    <Route path = "/FormPage"
                           element = { <FormPage setFormData = {setFormData} /> } />
                    <Route path = "/InfoPage"
                           element = { <InfoPage formData = {formData} /> } />
                    <Route path = "/Goals"
                           element = { <Goals setFormGoals = {submitHandlerGoals} /> } />
                    <Route path = "/SeeGoals"
                           element = { <SeeGoals formGoals = {formGoals} /> } />
                    <Route path = "/Home"
                           element = { <Home /> } />
                    <Route path = "/Profile"
                           element = { <Profile/> } />
                    <Route path = "/Settings"
                           element = { <Settings/> } />
                    <Route path = "/Meals"
                           element = { <Meals/> } />
                    <Route path = "/Task"
                           element= { <Task/> } />
                    <Route path = "/IncrementLabel"
                           element ={ <IncrementLabel/>} />
                </Routes>
                </>
                :
                <Routes>
                    <Route path = "/Login"
                           element = { <Login /> }
                    />
                </Routes>
            }
        </div>
        <CustomSnackbar />
    </div>
  );
}

export default App;
