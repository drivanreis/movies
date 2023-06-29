import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { Loading, MovieForm } from '../../components';
import * as movieAPI from '../../services/movieAPI';
import { Movie } from '../../types/movieType';

function EditMovie() {
  const [loading, setLoading] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);
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

  const handleSubmit = (updatedMovie: Movie) => {
    movieAPI.updateMovie(updatedMovie)
      .then(() => setShouldRedirect(true));
  };

  if (shouldRedirect) {
    return <Navigate to={ `/movies/${movie?.id}` } />;
  }

  if (loading === true) {
    return <Loading />;
  }

  return (
    <MovieForm movie={ movie } onSubmit={ handleSubmit } />
  );
}

export default EditMovie;
