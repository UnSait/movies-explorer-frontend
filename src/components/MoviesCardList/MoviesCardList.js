import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({screen, quantity, setQuantity, films, savedFilms, path, save, deleteMovie}) {

  const isMoviesPath = path === "/movies";
  const isSavedMoviesPath = path === "/saved-movies";

  function isLiked(id) {
    const likedMovies = savedFilms.some((movie) => movie.movieId === id);
    return likedMovies;
  };

  function moreMoviesBtn() {
    if (screen === "isDesktop") {
      setQuantity(quantity + 3);
    } else if (screen === "isMobile" || screen === "isTabletPC") {
      setQuantity(quantity + 2);
    }
  }

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__cards-container">

      {
      isMoviesPath &&
      films.slice(0, quantity).map((movies) => (
        <MoviesCard movies={movies} path={path} save={save} liked={isLiked} deleteMovie={deleteMovie} key={movies.id}  />
        ))
      }

      {
      isSavedMoviesPath &&
      films.map((movies) => (
        <MoviesCard movies={movies} path={path} save={save} liked={isLiked} deleteMovie={deleteMovie} key={movies._id}  />
        ))
      }

      </ul>

      {screen === "isDesktop" && films.length > 12 && films.length > quantity && isMoviesPath &&
        <button className="movies-card-list__btn" onClick={moreMoviesBtn}>Еще</button>
      }

      {screen === "isTabletPC" && films.length > 8 && films.length > quantity && isMoviesPath &&
        <button className="movies-card-list__btn" onClick={moreMoviesBtn}>Еще</button>
      }

      {screen === "isMobile" && films.length > 5 && films.length > quantity && isMoviesPath &&
        <button className="movies-card-list__btn" onClick={moreMoviesBtn}>Еще</button>
      }

    </section>
  );

}

export default MoviesCardList;
