import './Overlay.css';
import closeBtn from '../../images/Group.svg';
import { Link } from 'react-router-dom';

function Overlay({path, closeMenu, statusOverlay}) {

  const isMainPath = path === "/"
  const isMoviesPath = path === "/movies";
  const isSavedMoviesPath = path === "/saved-movies";
  const isProfilePath = path === "/profile";

  return (
    <div className={`overlay ${statusOverlay ? 'overlay_active' : ''}`}>
      <div className="overlay__menu-container">
        <div className="overlay__menu">
        <img className="overlay__menu-button" src={closeBtn} alt="закрыть" onClick={closeMenu} />
          <div className="overlay__menu-link-container">
            <span className={`overlay__menu-link ${isMainPath ? 'active-menu-link' : ''}`} onClick={closeMenu}><Link to="/">Главная</Link></span>
            <span className={`overlay__menu-link ${isMoviesPath ? 'active-menu-link' : ''}`} onClick={closeMenu}><Link to="/movies">Фильмы</Link></span>
            <span className={`overlay__menu-link ${isSavedMoviesPath ? 'active-menu-link' : ''}`} onClick={closeMenu}><Link to="/saved-movies">Сохраненные фильмы</Link></span>
            <div className={`overlay__account-container ${isProfilePath ? 'active-menu-link' : ''}`}>
              <Link to="/profile"><span className="overlay__account" onClick={closeMenu}>Аккаунт</span></Link>
              <Link to="/profile"><button className="overlay__account-button" type="button" onClick={closeMenu}></button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Overlay;
