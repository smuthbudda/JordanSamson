import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import HomePage from "./Pages/HomePage"
import About from "./Pages/About"
import Projects from "./Pages/Projects/Projects"
import NavBar from "./Components/NavBar"
import PointsCalculator from './Pages/Projects/PointsCalc/PointsCalc';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Projects/PointsCalculator" element={<PointsCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
