import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../../components';
import './movie-list.css';

import * as movieAPI from '../../services/movieAPI';
import { Movie } from '../../types/movieType';

function MovieList() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    let isMounted = true;
    movieAPI.getMovies().then((result) => {
      if (isMounted) {
        setLoading(false);
        setMovies(result as Movie[]);
      }
    }).catch((e) => {
      console.log(e);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading === true) {
    return <Loading />;
  }

  return (
    <div className="movies container">
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />
        ))}
      </div>
      <Link className="btn waves-effect waves-light add-movie" to="/movies/new">
        ADICIONAR CARTÃO
      </Link>
    </div>
  );
}

export default MovieList;
