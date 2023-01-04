import './dist/css/main.css';
import './components/FontAwesome'
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import MovieSlider from './components/MovieSlider';
import MoviesThisYear from './components/MoviesThisYear';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import MoviePreview from './components/MoviePreview';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={
        <React.Fragment>
          <Navbar />
          <MainPage />
          <MovieSlider />
          <MoviesThisYear />
          <Footer />
        </React.Fragment>
      }></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/movie" element={<React.Fragment><Navbar /><MoviePreview /></React.Fragment>}></Route>
      <Route path="/addmovie" element={<AddMovie />}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
