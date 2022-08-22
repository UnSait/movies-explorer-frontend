import './App.css';
import { Route, Redirect, useHistory, Switch} from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';

import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';



function App() {
  const isLogined = true;
  const currentUser = {id: 1, name: "Admin", mail: "Admin@admin.ru"};
  const history = useHistory();

  return (
    <div className="App">
      <Switch>

      <Route path="/movies">
        <Header isLogined={isLogined} path="movies" />
        <SearchForm />
        <MoviesCardList userId={currentUser.id} path="movies" />
        <Footer />
      </Route>

      <Route path="/saved-movies">
        <Header isLogined={isLogined} path="saved-movies" />
        <SearchForm />
        <MoviesCardList userId={currentUser.id} path="saved-movies" />
        <Footer />
      </Route>

      <Route path="/profile">
        <Header isLogined={isLogined} />
        <Profile name={currentUser.name} email={currentUser.mail}/>
      </Route>

      <Route path="/signin">
        <Login />
      </Route>

      <Route path="/signup">
        <Register />
      </Route>

      <Route exact path="/">
        <Header />
        <Main />
        <Footer />
      </Route>

      <Route path='*'>
        <NotFound redirect={history.goBack}/>
      </Route>

      </Switch>
    </div>
  );
}

export default App;
