import React from 'react';
import { useNavigate } from 'react-router-dom';
import poster from '../images/breakingbad.jpg';

export default function MovieCard() {
    const navigate = useNavigate();
    const handleNav = () => {
       navigate('/movie'); 
    }  

    return (
        <div className='moviecard--container' onClick={handleNav}>
            <div className='moviecard--poster'>
                <img src={poster}></img>
            </div>
            <div className='moviecard--info'>
                <div className='moviecard--title'>
                    <p>MOVIE TITLE</p>
                </div>
                <div className='moviecard--genre'>
                    <p>GENRE</p>
                </div>
                <div className='moviecard--rating'>
                    <p>5.0</p>
                </div>
            </div>
        </div>
    )
}