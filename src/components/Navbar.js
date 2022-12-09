import logo from '../images/logo.png';
import React from 'react';

export default function Navbar() {
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
                </ul>
            </div>
            <div className="navbar--search">
                <button><i className="fa-solid fa-magnifying-glass"></i></button>
                <input type="text" className="navbar--searchbar" placeholder="Wyszukaj..."></input>
            </div>
            <div className="navbar--profile">
                <i className="fa-solid fa-user"></i>
            </div>
        </div>
    </React.Fragment>
    )
}