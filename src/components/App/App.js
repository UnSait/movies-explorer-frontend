import './App.css';

import { Route, useHistory, useLocation, Switch} from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Overlay from '../Overlay/Overlay';
import Preloader from '../Preloader/Preloader';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../../context/CurrentUserContext';
import * as api from "../../utils/MainApi";
import * as apiMovies from "../../utils/MoviesApi";
import * as auth from "../../utils/Auth";

function App() {
  //Токен
  const [token, setToken] = useState(localStorage.jwt);
  //Вход в систему
  const [loggedIn, setLoggedIn] = useState();
  //Текущий пользователь
  const [currentUser, setCurrentUser] = useState({});
  //Все фильмы с beatfilm-movies
  const [films, setFilms] = useState([]);
  //Запрошенные пользователем фильм
  const [requiredFilms, setRequiredFilms] = useState([]);
  //Результат поиска в /movies
  const [notFound1, setNotFound1] = useState(false);
  //Результат поиска в /saved-movies
  const [notFound2, setNotFound2] = useState(false);
  //Сохраненные пользователем фильмы
  const [savedFilms, setSavedFilms] = useState([]);
   //Запрошенные пользователем фильм
   const [requiredSavedFilms, setRequiredSavedFilms] = useState([]);
  //Код ошибки сервера
  const [errorCode, setErrorCode] = useState("");
  //Ошибка при загрузке данных
  const [error, setError] = useState(false);
  //Оверлей
  const [isOverlayOpen, setOverlayOpen] = useState(false);
  //Тип экрана
  const [screen, setScreen] = useState("");
  //Количество отображамыемых фильмов в зависимости от разрешения экрана
  const [quantity, setQuantity] = useState();
  //Прелоадер
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      handlerCheckToken();
      setLoading(true);
      Promise.all([api.getProfile(token), api.getSavedMovies(token), apiMovies.getAllFilms()])
        .then(([user, savedFilms, films]) => {
          setCurrentUser(user);
          setSavedFilms(savedFilms);
          setRequiredSavedFilms(savedFilms);
          setFilms(films);
          setErrorCode("");
          setLoading(false);
          setError(false);
          if (localStorage.getItem("reqFilms")) {
            setRequiredFilms(JSON.parse(localStorage.getItem("reqFilms")));
          }
        })
        .catch((err) => {
          console.log("Не удалось загрузить:", err);
          setLoading(false);
          setError(true);
        })
        .finally(() => {
          setLoading(false);
        })
    } else {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  useEffect(() => {
    if (window.innerWidth > 1280) {
      setScreen("isDesktop");
      setQuantity(12);
    } else if(window.innerWidth > 768 && window.innerWidth < 1280) {
      setScreen("isTabletPC");
      setQuantity(8)
    } else {
      setScreen("isMobile");
      setQuantity(5)
    }
  }, []);

  useEffect(() => {
    if(requiredFilms.length === 0) {
      setNotFound1(true)
    } else {
      setNotFound1(false)
    }
  }, [requiredFilms]);

  useEffect(() => {
    if(requiredSavedFilms.length === 0) {
      setNotFound2(true)
    } else {
      setNotFound2(false)
    }
  }, [requiredSavedFilms]);

//Функции авторизации

  //Функция проверки авторизации по токену
  const handlerCheckToken = () => {
    auth.checkToken(token)
      .then(() => {
        //Изменяем стейт на "Вошел в систему"
        setLoggedIn(true);
      })
      .catch(() => {
        //Редиректим на общую страницу
        history.push("/");
        //Изменяем стейт на "Вышел из системы"
        setLoggedIn(false);
        console.log("Необходимо авторизоваться");
      });
  }

  //Функция регистрации
  const handlerSignupProfile = ({password, email, name}) => {
    auth.signup({password, email, name})
    .then(() => {
      auth.signin({password, email})
      .then((res) => {
        //Изменяем стейт на "Вошел в систему"
        setLoggedIn(true);
        //Добавляем токе в хранилище
        localStorage.setItem('jwt', res.token);
        //Добавляем токен в стейт
        setToken(res.token);
        //Обнуляем код ошибки
        setErrorCode("");
        //Редиректим на страницу с фильмами
        history.push("/movies");
      })
      .catch((err) => {
        console.log("Не удалось выполнить:", err);
        ///Изменяем стейт кода ошибки
        setErrorCode(err);
      });
    })
    .catch((err) => {
      console.log("Не удалось выполнить:", err);
      ///Изменяем стейт кода ошибки
      setErrorCode(err);
    });
  }

  //Функция авторизации
  const handlerSigninProfile = ({password, email}) => {
    auth.signin({password, email})
    .then((res) => {
      //Изменяем стейт на "Вошел в систему"
      setLoggedIn(true);
      //Добавляем токе в хранилище
      localStorage.setItem('jwt', res.token);
      //Добавляем токен в стейт
      setToken(res.token);
      //Редиректим на страницу с фильмами
      history.push("/movies");
      //Обнуляем код ошибки
      setErrorCode("");
    })
    .catch((err) => {
      console.log("Не удалось выполнить:", err);
      ///Изменяем стейт кода ошибки
      setErrorCode(err);
    });
  }

  //Функция выхода из системы
  const handlerSignoutProfile = () => {
    //Изменяем стейт на "Вышел из системы"
    setLoggedIn(false);
    //Очищаем хранилище токена
    localStorage.removeItem('jwt');
    //Очищаем хранилище c результом поиска
    localStorage.removeItem('reqFilms');
    //Очищаем стейт токена
    setToken('');
    //Редиректим на общую страницу
    history.push('/')
  }

//Функции обработки пользовательских запросов

  //Обработчик редактирования пользовательских данных
  const handlerEditProfile = ({name, email}) => {
    api.editProfile({name, email}, token)
    .then((res) => {
      //Изменяем пользовательские данные
      setCurrentUser(res);
      //Обнуляем код ошибки
      setErrorCode("");
    })
    .catch((err) => {
      console.log("Не удалось выполнить:", err);
      ///Изменяем стейт кода ошибки
      setErrorCode(err);
    });
  }

  //Обработчик поиска запрашиваемых фильмов
  const handlerSearchMovies = ({textRequest, shortFilm}) => {
    if (shortFilm) {
      setRequiredFilms(films.filter(movie => movie.nameRU.toLowerCase().includes(textRequest.toLowerCase()) && movie.duration <= 40))
      localStorage.setItem("reqFilms", JSON.stringify(films.filter(movie => movie.nameRU.toLowerCase().includes(textRequest.toLowerCase()) && movie.duration <= 40)))
    } else {
      setRequiredFilms(films.filter(movie => movie.nameRU.toLowerCase().includes(textRequest.toLowerCase()) && movie.duration > 40))
      localStorage.setItem("reqFilms", JSON.stringify(films.filter(movie => movie.nameRU.toLowerCase().includes(textRequest.toLowerCase()) && movie.duration > 40)))
    }
  };

  //Обработчик поиска запрашиваемых сохраненных фильмов
  const handlerSearchSavedMovies = ({textRequest, shortFilm}) => {
    if (shortFilm) {
      setRequiredSavedFilms(savedFilms.filter(movie => movie.nameRU.toLowerCase().includes(textRequest.toLowerCase()) && movie.duration <= 40));
    } else {
      setRequiredSavedFilms(savedFilms.filter(movie => movie.nameRU.toLowerCase().includes(textRequest.toLowerCase()) && movie.duration > 40))
    }
  };

  //Функция сохранения фильма
  function handlerSaveMovies(movie) {
    api.saveMovie(
      movie.country,
      movie.director,
      movie.duration,
      movie.year,
      movie.description,
      `https://api.nomoreparties.co/${movie.image.url}`,
      movie.trailerLink,
      `https://api.nomoreparties.co/${movie.image.url}`,
      movie.id,
      movie.nameRU,
      movie.nameEN,
      token
    )
      .then((newMovie) => {
        setSavedFilms([newMovie, ...savedFilms]);
        setRequiredSavedFilms([newMovie, ...requiredSavedFilms]);
      })
      .catch((err) => {
        console.log("Не удалось выполнить:", err);
      });
  }

  //Функция удаления фильма фильма
  function handlerDeleteMovie(id) {
    if (String(id).length < 24) {
    const film = savedFilms.filter(movie => movie.movieId === id);

    api.deletMovie(token, film[0]._id)
      .then(() => {
        setSavedFilms(savedFilms.filter(movie => movie.movieId !== id));
      })
      .catch((err) => {
        console.log("Не удалось выполнить:", err);
      });
    } else {
      api.deletMovie(token, id)
      .then(() => {
        setSavedFilms(savedFilms.filter(movie => movie._id !== id));
        setRequiredSavedFilms(requiredSavedFilms.filter(movie => movie._id !== id));
      })
      .catch((err) => {
        console.log("Не удалось выполнить:", err);
      });
    }
  }

//Функции оверлея

  //Функции открытия оверлея
  const handleOpenOverlay = () => {
    setOverlayOpen(true);
  }
  //Функции закрытия оверлея
  const handleCloseOverlay = () => {
    setOverlayOpen(false);
  }

//Функции обработки ошибок

  //Обработчик ошибок
  const handlerErrors = (error) => {
    //Принимаем код ошибки сервера и возвращаем сооответсвующее коду сообщение
    if (error === "Ошибка 409") {
      return "Почта уже используется"
    } else if (error === "Ошибка 400") {
      return "Переданы некорректные данные"
    } else if (error === "Ошибка 401") {
      return "Неправильные почта или пароль"
    } else {
      return "Непредвиденная ошибка"
    }
  }

  return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="App">
      <Switch>

      <ProtectedRoute path="/movies" loggedIn={loggedIn}>
        <Overlay path={location.pathname} statusOverlay={isOverlayOpen} closeMenu={handleCloseOverlay} />
        <Header isLogined={loggedIn} path={location.pathname} openMenu={handleOpenOverlay}/>
        <SearchForm onSearching={handlerSearchMovies}/>
        {notFound1 &&
           <h2 style={{
            color: 'red',
            textAlign: 'center',
            fontSize: 15,
            width: 300,
            margin: 'auto',
            marginTop: 100,
          }}> Ничего не найдено, введите название фильма</h2>
        }

        {error &&
          <h2 style={{
            color: 'red',
            textAlign: 'center',
            fontSize: 15,
            width: 300,
            margin: 'auto',
            marginTop: 100,
        }}> Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h2>
        }
        {loading ?
        <Preloader />
        :
        <MoviesCardList screen={screen} quantity={quantity} setQuantity={setQuantity} films={requiredFilms} savedFilms={savedFilms} save={handlerSaveMovies} deleteMovie={handlerDeleteMovie} path={location.pathname} />
        }
        <Footer />
      </ProtectedRoute>

      <ProtectedRoute path="/saved-movies" loggedIn={loggedIn}>
        <Overlay path={location.pathname} statusOverlay={isOverlayOpen} closeMenu={handleCloseOverlay} />
        <Header isLogined={loggedIn} path={location.pathname} openMenu={handleOpenOverlay} />
        <SearchForm onSearching={handlerSearchSavedMovies} />
        {notFound2 &&
           <h2 style={{
            color: 'red',
            textAlign: 'center',
            fontSize: 15,
            width: 300,
            margin: 'auto',
            marginTop: 100,
          }}> Ничего не найдено, введите название фильма</h2>
        }

        {error &&
          <h2 style={{
            color: 'red',
            textAlign: 'center',
            fontSize: 15,
            width: 300,
            margin: 'auto',
            marginTop: 100,
        }}> Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</h2>
        }
        {loading ?
        <Preloader />
        :
        <MoviesCardList screen={screen} quantity={quantity} setQuantity={setQuantity} films={requiredSavedFilms} savedFilms={savedFilms} save={handlerSaveMovies} deleteMovie={handlerDeleteMovie} path={location.pathname} />
        }
        <Footer />
      </ProtectedRoute>

      <ProtectedRoute path="/profile" loggedIn={loggedIn}>
        <Overlay path={location.pathname} statusOverlay={isOverlayOpen} closeMenu={handleCloseOverlay} />
        <Header isLogined={loggedIn} openMenu={handleOpenOverlay} />
        <Profile signout={handlerSignoutProfile} onEdit={handlerEditProfile} errorCode={errorCode} handlerErrors={handlerErrors} />
      </ProtectedRoute>

      <Route path="/signin">
        <Login onLogin={handlerSigninProfile} errorCode={errorCode} handlerErrors={handlerErrors}/>
      </Route>

      <Route path="/signup">
        <Register onRegister={handlerSignupProfile} errorCode={errorCode} handlerErrors={handlerErrors}/>
      </Route>

      <Route exact path="/">
        <Overlay path={location.pathname} statusOverlay={isOverlayOpen} closeMenu={handleCloseOverlay} />
        <Header isLogined={loggedIn} openMenu={handleOpenOverlay} />
        <Main />
        <Footer />
      </Route>

      <Route path='*'>
        <NotFound redirect={history.goBack}/>
      </Route>

      </Switch>
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
