import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from './Nav';
import Pensamientos from './pages/Pensamientos';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pensamientos" element={<Pensamientos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}
  
  
  
export default App;
