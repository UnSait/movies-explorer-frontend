import logo from '../../images/logo.svg';
import menu from '../../images/icon__COLOR_icon-bur.svg';
import { Link } from 'react-router-dom';
import './Header.css';


function Header({isLogined, path, openMenu}) {

  const isMoviesPath = path === "/movies";
  const isSavedMoviesPath = path === "/saved-movies";

  return (
    <header className="header">

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
       <div className="header__account-container">
      <Link to="/profile">
        <span className="header__account">Аккаунт</span>
      </Link>
      <Link to="/profile">
        <button className="header__account-button" type="button"></button>
      </Link>
      </div>
      }

      {
      isLogined
      &&
      <img className="header__menu-btn" src={menu} alt="меню" onClick={openMenu}/>
      }

    </header>
  );

}

export default Header;

