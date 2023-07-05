import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { MovieForm } from '../../components';

import * as movieAPI from '../../services/movieAPI';
import { Movie } from '../../types/movieType';

function NewMovie() {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleSubmit = (newMovie: Movie) => {
    movieAPI.createMovie(newMovie)
      .then(() => setShouldRedirect(true));
  };

  if (shouldRedirect) {
    return <Navigate to="/movies" />;
  }

  return (
    <MovieForm onSubmit={ handleSubmit } movie={ null } />
  );
}

export default NewMovie;
