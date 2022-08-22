import logo from '../../images/logo.svg';
import './AuthForm.css';
import { Link } from 'react-router-dom';


function AuthForm({greeting, btnText, message, redirect, children, path}) {

  return (
    <form className="auth-form">
      <Link to="/">
      <img className="auth-form__logo" src={logo} alt="" />
      </Link>
      <h2 className="auth-form__greeting">{greeting}</h2>
      <div className="auth-form__input-container">
        {children}
      </div>
      <button className="auth-form__btn" type="submit">{btnText}</button>
      <Link to={`/${path}`}>
      <p className="auth-form__message">{message}<span className="auth-form__redirect"> {redirect}</span></p>
      </Link>
    </form>
  );

}

export default AuthForm;
