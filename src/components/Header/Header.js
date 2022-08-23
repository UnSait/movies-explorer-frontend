import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import './Header.css';


function Header({isLogined, path }) {

  const isMoviesPath = path === "movies";
  const isSavedMoviesPath = path === "saved-movies";

  function handleClick() {
    const overlay = document.querySelector('.overlay');
    overlay.classList.toggle('overlay_active')
  }

  return (
    <header className="header">

      <div className="overlay"></div>

      <Link to="/">
      <img className="header__logo" src={logo} alt="Логотип"/>
      </Link>
      {
      isLogined
      ?
      <nav className="header__nav">
        <Link to="/movies">
        <span className={`header__link ${isMoviesPath ? 'active-link' : ''}`}>Фильмы</span>
        </Link>
        <Link to="/saved-movies">
        <span className={`header__link ${isSavedMoviesPath ? 'active-link' : ''}`}>Сохраненные фильмы</span>
        </Link>
      </nav>
      :
      <div className="header-auth">
        <Link to="/signup">
        <button className="header-auth__signin" type="button">Региcтрация</button>
        </Link>
        <Link to="/signin">
        <button className="header-auth__signup" type="button">Войти</button>
        </Link>
      </div>
      }

      {
      isLogined
      &&
      <Link to="/profile">
      <div className="header__account-container">
        <span className="header__account">Аккаунт</span>
        <button className="header__account-button" type="button"></button>
      </div>
      </Link>
      }

      {
      isLogined
      &&
        <input className="header__toggle" id="toggle" type="checkbox" onClick={handleClick}/>
      }
      {
      isLogined
      &&
        <label className="header__btn" htmlFor="toggle">
          <span></span>
        </label>
      }
      {
      isLogined
      &&
        <div className="header__menu">
          <ul className="header__menu-container">
            <li><span className="header__menu-link">Главная</span></li>
            <Link to="/movies">
            <li><span className={`header__menu-link ${isMoviesPath ? 'active-menu-link' : ''}`}>Фильмы</span></li>
            </Link>
            <Link to="/saved-movies">
            <li><span className={`header__menu-link ${isSavedMoviesPath ? 'active-menu-link' : ''}`}>Сохраненные фильмы</span></li>
            </Link>
            <Link to="/profile">
            <li className="header__menu-account-container">
              <span className="header__account header__menu-account">Аккаунт</span>
              <button className="header__account-button header__menu-account-button" type="button"></button>
            </li>
            </Link>
          </ul>
        </div>
      }

    </header>
  );

}

export default Header;

