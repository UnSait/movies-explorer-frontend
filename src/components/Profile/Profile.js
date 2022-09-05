import './Profile.css';
import '../AuthForm/AuthForm.css';
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import CurrentUserContext from '../../context/CurrentUserContext';
import { regMail, regUser } from '../../utils/Constants'

function Profile({signout, onEdit, errorCode, handlerErrors}) {

  const currentUser = useContext(CurrentUserContext);

  let errorServerMessage = handlerErrors(errorCode);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);

  const [nameError, setNameError] = useState("Заполните пустое поле");
  const [emailError, setEmailError] = useState("Заполните пустое поле");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    //Если есть ошибка либо переданные данные совпадают с текущими - форма не валидна
    if (emailError || nameError || (name === currentUser.name && email === currentUser.email)) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, nameError, name, email])

  const nameHandler = (e) => {
    setName(e.target.value);
    if (!regUser.test(String(e.target.value).toLowerCase())) {
      setNameError("Имя должно быть не менее 2 символов и не содержать спецсимволов");
      if (!e.target.value) {
        setNameError("Заполните пустое поле");
      }
    } else {
      setNameError("");
    }
  };

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

  const blurHandler = (e) => {
    //Сообщение об ошибке возникнет только в случае попытки заполнить поля
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'name':
        setNameDirty(true);
        break;

    default:
      setNameDirty(false);
      setEmailDirty(false);
    }
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    onEdit({name, email});
  }


  return (
    <form className="profile-form" onSubmit={handleSubmitForm}>
      <h2 className="profile-form__greeting">Привет, {currentUser.name}!</h2>
      <ul className="profile-form__inputs-container">
        <li className="profile-form__input-container">
          <h3 className="profile-form__input-title">Имя</h3>
          <input onBlur={e => blurHandler(e)} value={name} name="name" onChange={e => nameHandler(e)} className="profile-form__input" type="text" placeholder={currentUser.name} required/>
        </li>
        {
          (nameDirty && nameError)
          &&
          <p className="profile-form__error-message auth-form__error-message">{nameError}</p>
        }
        <div className="profile-form__input-line"></div>
        <li className="profile-form__input-container">
          <h3 className="profile-form__input-title">E-mail</h3>
          <input onBlur={e => blurHandler(e)} value={email} name="email" onChange={e => emailHandler(e)} className="profile-form__input" type="email" placeholder={currentUser.email} required/>
        </li>
        {
          (emailDirty && emailError)
          &&
          <p className="profile-form__error-message auth-form__error-message">{emailError}</p>
        }
      </ul>
      <div className="auth-form__btn-container">
        {
        errorCode.length > 0
        &&
        <p className="auth-form__server-error-message auth-form__error-message">{errorServerMessage}</p>
        }
        <button disabled={!formValid} className="profile-form__btn profile-form__btn-edit" type="submit">Редактировать</button>
        <Link to="/">
        <button className="profile-form__btn profile-form__btn-exite" type="button" onClick={signout}>Выйти из аккаунта</button>
        </Link>
      </div>
    </form>
  );

}

export default Profile;
