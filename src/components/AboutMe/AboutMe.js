import './AboutMe.css';
import '../LandingTitle/LandingTitle.css';
import photo from '../../images/pic__COLOR_pic.png';


function AboutMe() {

  return (
    <section className="about-me" id="3">
      <h2 className="about-me__title landing-title">Студент</h2>
      <div className="about-me_container">
        <div className="about-me_info-container">
          <h2 className="about-me__name">Виталий</h2>
          <h3 className="about-me__discription">Фронтенд-разработчик, 30 лет</h3>
          <p className="about-me__adout">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <div className="about-me__link-container">
            <a className="about-me__link" href="https://t.me/UnSait23" target="_blank" rel="noreferrer">Telegram</a>
            <a className="about-me__link" href="https://github.com/UnSait" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <img className="about-me__photo" src={photo} alt="Фотография"/>
      </div>
    </section>
  );

}

export default AboutMe;
