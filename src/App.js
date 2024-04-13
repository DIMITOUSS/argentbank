import './App.css';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Home from './pages/Home/index'
import Login from './pages/Login'
import Error from './pages/Error'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path='*' element= {<Error/>} />

    </Routes>
  </Router>
  );
}

export default App;
