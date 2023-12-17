import './App.css';
import Register from './components/register'
import Login from './components/login'
import Enroll from './components/enroll'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/enroll" element={<Enroll />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
