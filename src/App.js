import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import HomePage from "./Pages/HomePage"
import About from "./Pages/About"
import NavBar from "./Components/NavBar"

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
