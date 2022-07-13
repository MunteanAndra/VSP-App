import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import FormPage from './Pages/Formpage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Sidebar />
        <FormPage />
      </header>

    </div>

  );
}

export default App;
