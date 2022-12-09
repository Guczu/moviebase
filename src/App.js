import './dist/css/main.css';
import './components/FontAwesome'
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import MovieSlider from './components/MovieSlider';
import MoviesThisYear from './components/MoviesThisYear';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <MovieSlider />
      <MoviesThisYear />
      <Footer />
    </div>
  );
}

export default App;
