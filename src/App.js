import './App.css';
import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import FormPage from './Pages/Formpage';
import InfoPage from './Pages/Infopage';
import Goals from './Pages/GoalsItems/Goals';
import SeeGoals from './Pages/GoalsItems/SeeGoals';
import Login from './Components/Login';
import Home from './Pages/Home';
import Cart from './Components/Cart';
import CartProvider from './store/CartProvider';
import Profile from './Components/Profile';
import Settings from './Components/Settings';
import Meals from './Pages/Meals/Meals';
import {Routes, Route} from 'react-router-dom';

function App() {

   const [formData, setFormData] = useState('');
   const [formGoals, setFormGoals] = useState([]);
   const [cartShown, setCartShown] = useState(false);

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
  <CartProvider>
    <div className = "App">
      <header className = "App-header">
        { cartShown && <Cart onClose = {hideCartHandler} /> }
        <Navbar onShowCart = {showCartHandler} />
        <div style = {{display:"flex"}}>
            <Sidebar />
                <Routes>
                    <Route path = "/" element = { <Home /> } />
                    <Route path = "/Formpage"
                        element = { <FormPage setFormData = {setFormData} /> }
                    />
                    <Route path = "/Infopage"
                        element = { <InfoPage formData = {formData} /> }
                    />
                    <Route path = "/Goals"
                        element = { <Goals setFormGoals = {submitHandlerGoals} /> }
                    />
                    <Route path = "/SeeGoals"
                        element = { <SeeGoals formGoals = {formGoals} /> }
                    />
                    <Route path = "/Login"
                        element = { <Login /> }
                    />
                    <Route path = "/Home"
                        element = { <Home /> }
                    />
                    <Route path = "/Profile" element = { <Profile/> } />
                    <Route path = "/Settings" element = { <Settings/> } />
                    <Route path = "/Meals" element = { <Meals/> } />
                </Routes>
        </div>
      </header>
    </div>
  </CartProvider>
  );
}

export default App;
