import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pupils from './Pages/Pupils';
import Parents from './Pages/Parents';
import Home from './Pages/Home';

function App() {
  
  return (
    <Router>
      <div className='header'>
      <h1 id='schoolName'>Kickstarter Primary School</h1>
      <img src='http://clipart-library.com/images/6croKK5di.png' alt='school logo' id='logo'/>
      <p id='moto'>Working together to reach our potential</p>
      </div>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Parents" element={<Parents />} />
        <Route path="/Pupils" element={<Pupils />} />

      </Routes>
    </Router>
  );
}

export default App;
