import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './MovieDetails.css';
import * as movieAPI from '../../services/movieAPI';
import { Loading } from '../../components';
import { Movie } from '../../types/movieType';

function MovieDetails() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<Movie | null>(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    movieAPI.getMovie(+movieId)
      .then((movieItem) => {
        setMovie(movieItem);
        setLoading(false);
      });
  }, [movieId]);

  if (loading === true) return <Loading />;

  return (
    <div className="details-container">
      <header>
        <img alt="Movie Cover" src={ `../${movie?.imagePath}` } />
      </header>
      <h1 className="card-title">
        {movie?.title}
        {' '}
        {movie?.subtitle}
      </h1>

      <div className="card-content">
        <p>{`Sinopse: ${movie?.storyline}`}</p>
        <p>{`Genre: ${movie?.genre}`}</p>
        <p>{`Rating: ${movie?.rating}`}</p>
      </div>

      <div className="card-action">
        <Link to={ `/movies/${movieId}/edit` }>Editar </Link>
        <Link to="/">Voltar</Link>
      </div>

    </div>
  );
}

export default MovieDetails;
