import './App.css';
import React,{useState} from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import FormPage from './Pages/Formpage';
import InfoPage from './Pages/Infopage';
import Goals from './Pages/GoalsItems/Goals';
import {Routes, Route} from 'react-router-dom';

function App() {

   const [formdata, setFormData] = useState('');

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
                        element = { <InfoPage formdata = {formdata} /> }
                    />
                    <Route path = "/Goals" element = { <Goals /> } />
                </Routes>
        </div>
      </header>
    </div>

  );
}

export default App;
