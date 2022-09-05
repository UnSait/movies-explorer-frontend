import './MoviesCard.css';
import saveBtn from '../../images/save6d.svg'
import deleteBtn from '../../images/d6.svg'


function MoviesCard({ movies, path, save, liked, deleteMovie}) {

  const isMoviesPath = path === "/movies";
  const isSavedMoviesPath = path === "/saved-movies";

  function handlerSaveBtnClick() {
    save(movies);
  }

  function handlerDeleteBtnClick(movie) {
    deleteMovie(movie);
  }

  return (
    <li className="movies-card-list__card-container">
      <div className="movies-card-list__requisites">
        <p className="movies-card-list__name">{movies.nameRU}</p>
        <p className="movies-card-list__duration">{movies.duration} минут</p>
      </div>
      <a className="movies-card-list__trailer-link" href={movies.trailerLink} target="_blank" rel="noreferrer">
        {isMoviesPath ?
        <img className="movies-card-list__fragment" src={`https://api.nomoreparties.co/${movies.image.url}`} alt={movies.nameRU} />
        :
        <img className="movies-card-list__fragment" src={movies.image} alt={movies.nameRU} />
        }
        </a>
      <div className="movies-card-list__btn-container">
        {!liked(movies.id) && isMoviesPath &&
        <button className="movies-card-list__save-btn" type="button" onClick={handlerSaveBtnClick}>
        Сохранить
        </button>
        }
        {liked(movies.id) && isMoviesPath &&
        <img className="movies-card-list__save-btn" src={saveBtn} onClick={() => handlerDeleteBtnClick(movies.id)} alt="Сохранено" />
        }
        {isSavedMoviesPath &&
        <img className="movies-card-list__save-btn" src={deleteBtn} onClick={() => handlerDeleteBtnClick(movies._id)} alt="Удалить" />
        }
      </div>
    </li>
  );

}

export default MoviesCard;
