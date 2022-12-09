import React from 'react';
import poster from '../images/breakingbad.jpg';

export default function MovieCard() {
    return (
        <div className='moviecard--container'>
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