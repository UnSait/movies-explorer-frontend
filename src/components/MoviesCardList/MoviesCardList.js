import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
import { Movies } from '../../utils/MoviesList';

function MoviesCardList({userId, path}) {

  const sevedMovies = Movies.filter(movie => movie.owner === userId);
  const isMoviesPath = path === "movies";
  const isSavedMoviesPath = path === "saved-movies";

  let button;

  const excessMovies = Movies.length > 15;
  const excessSevedMovies = sevedMovies.length > 15;

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__cards-container">

      {
      isMoviesPath &&
      Movies.map((movies) => (
        <MoviesCard movies={movies} path={path} userId={userId} key={movies.movieId}  />
        ))
      }

      {
      isSavedMoviesPath &&
      sevedMovies.map((movies) => (
        <MoviesCard movies={movies} path={path} key={movies.movieId} />
        ))
      }

      </ul>

      {
        isMoviesPath && excessMovies &&
        <button className="movies-card-list__btn">Еще</button>
      }


      {
        isSavedMoviesPath && excessSevedMovies &&
        <button className="movies-card-list__btn">Еще</button>
      }
    </section>
  );

}

export default MoviesCardList;
