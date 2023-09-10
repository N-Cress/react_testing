import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' > </Route>
          <Route path='/contact'> </Route>
          <Route path='/about'> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
