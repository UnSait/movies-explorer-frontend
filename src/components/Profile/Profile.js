import './Profile.css';
import { Link } from 'react-router-dom';


function Profile({name, email}) {

  return (
    <form className="profile-form">
      <h2 className="profile-form__greeting">Привет, {name}!</h2>
      <ul className="profile-form__inputs-container">
        <li className="profile-form__input-container">
          <h3 className="profile-form__input-title">Имя</h3>
          <input className="profile-form__input" type="text" placeholder={name} required/>
        </li>
        <div className="profile-form__input-line"></div>
        <li className="profile-form__input-container">
          <h3 className="profile-form__input-title">E-mail</h3>
          <input className="profile-form__input" type="email" placeholder={email} required/>
        </li>
      </ul>
      <div></div>
      <button className="profile-form__btn profile-form__btn-edit" type="submit">Редактировать</button>
      <Link to="/">
      <button className="profile-form__btn profile-form__btn-exite" type="button">Выйти из аккаунта</button>
      </Link>
    </form>
  );

}

export default Profile;
