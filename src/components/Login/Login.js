import { useState, useEffect } from 'react';
import logo from '../../images/logo.svg';
import '../AuthForm/AuthForm.css';
import { Link } from 'react-router-dom';
import { regMail } from '../../utils/Constants'

function Login ({onLogin, errorCode, handlerErrors}) {

  let errorServerMessage = handlerErrors(errorCode);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("Заполните пустое поле");
  const [passwordError, setPasswordError] = useState("Заполните пустое поле");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError])

  const emailHandler = (e) => {
    setEmail(e.target.value);
    if(!regMail.test(String(e.target.value).toLowerCase())) {
      setEmailError("Указан некорректный e-mail")
      if (!e.target.value) {
        setEmailError("Заполните пустое поле")
      }
    } else {
      setEmailError("")
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError("Заполните пустое поле")
    } else {
      setPasswordError("")
    }
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    onLogin({password, email});
  }

  return (
    <form className="auth-form" onSubmit={handleSubmitForm}>
      <Link to="/">
      <img className="auth-form__logo" src={logo} alt="Логотип" />
      </Link>
      <h2 className="auth-form__greeting">Рады видеть!</h2>
      <div className="auth-form__input-container">
        <h3 className="auth-form__input-title">E-mail</h3>
        <input value={email} name="email" onChange={e => emailHandler(e)} className="auth-form__input" type="email" required/>
        <div className="auth-form__input-line"></div>
        <p className="auth-form__error-message">{emailError}</p>
        <h3 className="auth-form__input-title">Пароль</h3>
        <input value={password} name="password" onChange={e => passwordHandler(e)} className="auth-form__input" type="password" required/>
        <div className="auth-form__input-line"></div>
        <p className="auth-form__error-message">{passwordError}</p>
      </div>
      <div className="auth-form__btn-container">
        {
        errorCode.length > 0
        &&
        <p className="auth-form__server-error-message auth-form__error-message">{errorServerMessage}</p>
        }
        <button disabled={!formValid} className="auth-form__btn" type="submit">Войти</button>
        <Link to="/signup">
        <p className="auth-form__message">Ещё не зарегистрированы?<span className="auth-form__redirect"> Регистрация</span></p>
        </Link>
      </div>
    </form>
  );

}

export default Login;
