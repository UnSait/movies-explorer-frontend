import AuthForm from '../AuthForm/AuthForm';

function Login () {

  return (
    <AuthForm greeting="Рады видеть!" btnText="Войти" message="Ещё не зарегистрированы?" redirect="Регистрация" path="signup">
        <h3 className="auth-form__input-title">E-mail</h3>
        <input className="auth-form__input" type="email" required/>
        <div className="auth-form__input-line"></div>
        <p className="auth-form__error-message"></p>
        <h3 className="auth-form__input-title">Пароль</h3>
        <input className="auth-form__input" type="text" required/>
        <div className="auth-form__input-line"></div>
        <p className="auth-form__error-message"></p>
    </AuthForm>
  );

}

export default Login;
