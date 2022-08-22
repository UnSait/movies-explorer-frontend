import AuthForm from '../AuthForm/AuthForm';

function Register() {

  return (
    <AuthForm greeting="Добро пожаловать!" btnText="Зарегистрироваться" message="Уже зарегистрированы?" redirect="Войти" path="signin">
        <h3 className="auth-form__input-title">Имя</h3>
        <input className="auth-form__input" type="text" required/>
        <div className="auth-form__input-line"></div>
        <p className="auth-form__error-message"></p>
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

export default Register;
