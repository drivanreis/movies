import React, { useState } from 'react';
import { Movie } from '../../types/movieType';

type MovieFormProps = {
  movie: Movie | null;
  onSubmit: (newMovie: Movie) => void;
};
type PartialMovie = Partial<Movie>;

function MovieForm({ onSubmit, movie }: MovieFormProps) {
  const [state, setState] = useState<PartialMovie>(movie || {});

  const handleSubmit = () => {
    if (!state) return;
    onSubmit(state as Movie);
  };

  const updateMovie = (
    field: keyof PartialMovie,
    newValue: (string | number | boolean),
  ) => {
    setState((prevState) => ({ ...prevState, [field]: newValue }));
  };

  const renderTitleInput = () => (
    <div className="row">
      <div className="input-field col s12">
        <label className="active" htmlFor="movie_title">Título</label>
        <input
          placeholder="Insira o título"
          id="movie_title"
          type="text"
          className="validate"
          value={ state?.title || '' }
          onChange={ (event) => updateMovie('title', event.target.value) }
        />
      </div>
    </div>
  );

  const renderSubtitleInput = () => (
    <div className="row">
      <div className="input-field col s12">
        <label className="active" htmlFor="movie_subtitle">Subtítulo</label>
        <input
          placeholder="Insira o subtítulo"
          id="movie_subtitle"
          type="text"
          className="validate"
          value={ state?.subtitle || '' }
          onChange={ (event) => updateMovie('subtitle', event.target.value) }
        />
      </div>
    </div>
  );

  const renderImagePathInput = () => (
    <div className="row">
      <div className="input-field col s12">
        <label className="active" htmlFor="movie_image">Imagem</label>
        <input
          placeholder="Insira o caminho da imagem"
          id="movie_image"
          type="text"
          className="validate"
          value={ state?.imagePath || '' }
          onChange={ (event) => updateMovie('imagePath', event.target.value) }
        />
      </div>
    </div>
  );

  const renderStorylineInput = () => (
    <div className="row">
      <div className="input-field col s12">
        <label className="active" htmlFor="movie_storyline">Sinopse</label>
        <textarea
          id="movie_storyline"
          className="materialize-textarea"
          value={ state?.storyline || '' }
          onChange={ (event) => updateMovie('storyline', event.target.value) }
        />
      </div>
    </div>
  );

  const renderGenreSelection = () => (
    <div className="row col">
      <label htmlFor="movie_genre">Genre Select</label>
      <select
        className="browser-default"
        value={ state?.genre || '' }
        onChange={ (event) => updateMovie('genre', event.target.value) }
      >
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </div>
  );

  const renderRatingInput = () => (
    <div className="row">
      <div className="input-field col s12">
        <label className="active" htmlFor="movie_rating">Avaliação</label>
        <input
          placeholder="Dê a avaliação do filme"
          id="movie_rating"
          type="number"
          className="form-control"
          step={ 0.1 }
          min={ 0 }
          max={ 5 }
          value={ state?.rating || '' }
          onChange={ (event) => updateMovie('rating', event.target.value) }
        />
      </div>
    </div>
  );

  const renderSubmitButton = () => (
    <div className="row">
      <button
        className="btn waves-effect waves-light"
        type="button"
        onClick={ handleSubmit }
      >
        Submit
      </button>
    </div>
  );

  return (
    <div className="movie-form">
      <div className="row">
        <form className="col s12">
          {renderTitleInput()}
          {renderSubtitleInput()}
          {renderImagePathInput()}
          {renderStorylineInput()}
          {renderGenreSelection()}
          {renderRatingInput()}
          {renderSubmitButton()}
        </form>
      </div>
    </div>
  );
}

export default MovieForm;
