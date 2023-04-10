import './App.css';
import { BrowserRouter as Router, Routes, Route,Switch } from 'react-router-dom';
import HomePage from "./Pages/HomePage"
import About from "./Pages/About"
import Projects from "./Pages/Projects/Projects"
import NavBar from "./Components/NavBar"
import PointsCalculator from './Pages/Projects/PointsCalc/PointsCalc';
import Toolbar from './Components/BottomToolbar/BottomToolbars';
import Contact from "./Pages/Contact/Contact"



function App() {
  return (
    <Router>
      <NavBar />
      <div className='jordan-body'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Projects/PointsCalculator" element={<PointsCalculator />} />
          <Route path="/Contacts" element={<Contact />} />
        </Routes>
      </div>
      <Toolbar/>
    </Router>
  );
}

export default App;
