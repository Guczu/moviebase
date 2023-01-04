import logo from '../images/logo.png';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const handleNav = () => {
        navigate('/login');
    }

    return (
    <React.Fragment>
        <div className="navbar--container">
            <div className="navbar--logo">
                <img src={logo}></img>
            </div>
            <div className="navbar--options">
                <ul>
                    <li><a href="#" className="navbar--option">Filmy</a></li>
                    <li><a href="#" className="navbar--option">Seriale</a></li>
                    <li><a href="#" className="navbar--option">Ranking</a></li>
                    <li><Link to="/addmovie" className="navbar--option">Dodaj film</Link></li>
                </ul>
            </div>
            <div className="navbar--search">
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
                <input type="text" className="navbar--searchbar" placeholder="Wyszukaj..."></input>
            </div>
            <div className="navbar--profile">
                <i className="fa-solid fa-user" onClick={handleNav}></i>
            </div>
        </div>
    </React.Fragment>
    )
}