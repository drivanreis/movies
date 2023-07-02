import { Movie } from '../types/movieType';

const baseURL = 'http://localhost:8080';

export const getMovies = async () => {
  const response = await fetch(`${baseURL}/movies`, {
    headers: { 'Content-Type': 'application/json' }
  });
  return await response.json();
}


export const getMovie = async (movieId: number): Promise<Movie | null> => {
  const response = await fetch(
    `${baseURL}/movies/${movieId}`);
  return await response.json();
}


export const updateMovie = async (updatedMovie: Movie) => {
  const response = await fetch(
    `${baseURL}/movies/${updatedMovie.id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedMovie),
    });
  return await response.json();
}

export const createMovie = async (movieData: Movie) => {
  const response = await fetch(`${baseURL}/movies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movieData),
  });
  return await response.json();
}

export const deleteMovie = async (movieId: number) => {
  const response = await fetch(`${baseURL}/movies/${movieId}`, {
    method: 'DELETE',
  });
  return await response.json();
}
