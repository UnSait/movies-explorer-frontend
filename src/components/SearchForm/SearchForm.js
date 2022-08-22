import './SearchForm.css';

function SearchForm() {

  return (
    <section className="search-form">
      <form className="search-form__form" noValidate>
        <div className="search-form__input-container">
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            required
          />
          <button className="search-form__btn" type="submit">Поиск</button>
        </div>
        <div className="search-form__filter-сheckbox-container">
          <label className="search-form__filter-сheckbox-label">
            <input className="search-form__filter-сheckbox" type="checkbox"></input>
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
