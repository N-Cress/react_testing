
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Nav from './components/Nav.jsx'

function App() {
  
  return (
      <Router>
          <Nav /> 
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/contact' element={<Contact />}> </Route>
          <Route path='/about' element={<About />}> </Route>
        </Routes>
      </Router>
  );
}

export default App;
