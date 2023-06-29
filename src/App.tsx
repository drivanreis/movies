import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';
import movies from './services/movieData';

function App() {
  localStorage.setItem('movies', JSON.stringify(movies));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MovieList /> } />
        <Route path="/movies/new" element={ <NewMovie /> } />
        <Route path="/movies/:movieId/edit" element={ <EditMovie /> } />
        <Route path="/movies/:movieId" element={ <MovieDetails /> } />
        <Route element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
