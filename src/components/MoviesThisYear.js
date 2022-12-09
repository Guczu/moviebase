import React from 'react';
import MovieCard from './MovieCard';

export default function MoviesThisYear() {
    return (
        <div className="thisyear--maincontainer">
            <div className='thisyear--text'>
                <p className='thisyear--title'>
                    2022 ROK
                </p>
            </div>
                <div className='thisyear--container'>
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                    <MovieCard />
                </div>
        </div>
    )
}