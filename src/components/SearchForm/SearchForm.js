import './SearchForm.css';
import { useState } from 'react';

function SearchForm({onSearching}) {

  const [textRequest, setTextRequest] = useState("");
  const [shortFilm, setShortFilm] = useState(false);


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
            onChange={e => setTextRequest((e.target.value))}
            required
          />
          <button className="search-form__btn" type="submit">Поиск</button>
        </div>
        <div className="search-form__filter-сheckbox-container">
          <label className="search-form__filter-сheckbox-label">
            <input className="search-form__filter-сheckbox" type="checkbox" onChange={() => setShortFilm(!shortFilm)}></input>
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
