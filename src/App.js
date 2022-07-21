import './App.css';
import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import FormPage from './Pages/Formpage';
import InfoPage from './Pages/Infopage';
import Goals from './Pages/GoalsItems/Goals';
import SeeGoals from './Pages/GoalsItems/SeeGoals';
import Login from './Components/Login';
import {Routes, Route} from 'react-router-dom';

function App() {

   const [formData, setFormData] = useState('');
   const [formGoals, setFormGoals] = useState([]);

   const submitHandlerGoals = (textGoal1,textGoal2) => {
    setFormGoals((prevGoalList) =>
       ( [...prevGoalList, { text1: textGoal1, text2: textGoal2, id: Math.random().toString()}] )
    );
   };

  return (
    <div className = "App">
      <header className = "App-header">
        <Navbar />
        <div style = {{display:"flex"}}>
            <Sidebar />
                <Routes>
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
                </Routes>
        </div>
      </header>
    </div>

  );
}

export default App;
