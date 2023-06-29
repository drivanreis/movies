import { Link } from 'react-router-dom';
import { Movie } from '../../types/movieType';
import './movie-card.css';

type MovieCardProps = {
  movie: Movie;
};

function MovieCard({ movie: { id, title, storyline, imagePath } }: MovieCardProps) {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card movie-card">
          <div className="card-image">
            <img
              alt="Movie Cover"
              className="movie-card-image"
              src={ imagePath }
              width="200s"
            />
            <h2 className="card-title">{title}</h2>
          </div>
          <div className="card-content">
            <p>{storyline}</p>
          </div>
          <div className="card-action">
            <Link data-testid={ `${title}Details` } to={ `/movies/${id}` }>
              Ver detalhes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
