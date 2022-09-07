import './SearchForm.css';
import { useState, useEffect } from 'react';

function SearchForm({onSearching, path}) {

  const isMoviesPath = path === "/movies";

  const [textRequest, setTextRequest] = useState("");
  const [shortFilm, setShortFilm] = useState(false);

  useEffect(() => {
    if (isMoviesPath && localStorage.getItem("reqFilms")) {
      setTextRequest(localStorage.getItem("textQuery"));
      setShortFilm(localStorage.getItem("shortFilmQuery"));
    }
  }, [])

  console.log(shortFilm)

  function handleSubmitForm(e) {
    e.preventDefault();
    onSearching({textRequest, shortFilm});
  }

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmitForm} noValidate>
        <div className="search-form__input-container">
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            value={textRequest}
            onChange={e => setTextRequest((e.target.value))}
            required
          />
          <button className="search-form__btn" type="submit">Поиск</button>
        </div>
        <div className="search-form__filter-сheckbox-container">
          <label className="search-form__filter-сheckbox-label">
            {shortFilm ?
              <input className="search-form__filter-сheckbox" checked={true} type="checkbox" onChange={() => setShortFilm(!shortFilm)}></input>
              :
              <input className="search-form__filter-сheckbox" checked={false} type="checkbox" onChange={() => setShortFilm(!shortFilm)}></input>
            }
            <div className="search-form__filter-сheckbox-tumbler"></div>
            <div className="search-form__filter-сheckbox-checker"></div>
            Короткометражки
          </label>
        </div>
      </form>
      <div className="search-form__line" />
    </section>
  );

}

export default SearchForm;
