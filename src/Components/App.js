// import logo from './logo.svg';
import GearPage from './GearPage'
import './App.css';
import Home from './Home.js'
import { BrowserRouter as Router } from 'react-router-dom'
import GearForm from "./GearForm.js"

function App() {
  return (
    <Router>
      
       <div className="App">
          <Home />
          <GearForm />
          <GearPage />
       </div>
     
    </Router>
  );
}

export default App;
