import { Link } from "react-router-dom";
import { useTheme } from './context/ThemeContext';
import {useState} from 'react';

function Nav() {
     const { theme, toggleTheme } = useTheme();
     const [inputText, setInputText] = useState('');

     const handleSubmit = (e) => {
        e.preventDefault();
        if(inputText.trim() == 'gabriela') {
            alert('Me enseñas las tetas? :v');
        }
        setInputText('');
        }

    return (
        <nav className={`navbar navbar-expand-lg ${theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} sticky-top`}>
      <div className="container">
        <Link className="navbar-brand" to="/">La Chica de la Ventana </Link>

        <form className="d-flex ms-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Escribe algo..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit" className="btn btn-outline-primary">Buscar</button>
      </form>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pensamientos">Pensamientos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Yo</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-secondary ms-2" onClick={toggleTheme}>
                {theme === 'dark' ? '☀️ Claro' : '🌙 Oscuro'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
};

export default Nav;