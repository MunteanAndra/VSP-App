import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import FormPage from './Pages/Formpage';
import InfoPage from './Pages/Infopage';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div style={{display:"flex"}}>
            <Sidebar />
                <Routes>
                    <Route path="/Formpage" element={<FormPage />} />
                    <Route path="/Infopage" element={<InfoPage />} />
                </Routes>
        </div>
      </header>

    </div>

  );
}

export default App;
