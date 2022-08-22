import './MoviesCard.css';
import saveBtn from '../../images/save6d.svg'
import deleteBtn from '../../images/d6.svg'


function MoviesCard({ movies, path, userId}) {

  let isSaved = movies.owner === userId;
  const isMoviesPath = path === "movies";
  const isSavedMoviesPath = path === "saved-movies";

  let button;

  if (isMoviesPath) {
    if (isSaved) {
      button = <img className="movies-card-list__save-btn" src={saveBtn} alt="Сохранено" />
    } if (!isSaved) {
      button = <button className="movies-card-list__save-btn" type="button">
      Сохранить
      </button>;
    }
  } if (isSavedMoviesPath) {
    button = <img className="movies-card-list__save-btn" src={deleteBtn} alt="Удалить" />;
  }

  return (
    <li className="movies-card-list__card-container">
      <div className="movies-card-list__requisites">
        <p className="movies-card-list__name">{movies.nameRU}</p>
        <p className="movies-card-list__duration">{movies.duration} минут</p>
      </div>
      <img className="movies-card-list__fragment" src={movies.image} alt={movies.nameRU} />
      <div className="movies-card-list__btn-container">
        {button}
      </div>
    </li>
  );

}

export default MoviesCard;
