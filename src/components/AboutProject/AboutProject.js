import './AboutProject.css';
import '../LandingTitle/LandingTitle.css';


function AboutProject() {

  return (
    <section className="about-project" id="1">
      <h2 className="about-project__title landing-title">О проекте</h2>
      <ul className="about-project__info">
        <li className="about-project__info-block">
          <h2 className="about-project__info-title">Дипломный проект включал 5 этапов</h2>
          <p className="about-project__info-description">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__info-block">
          <h2 className="about-project__info-title">На выполнение диплома ушло 5 недель</h2>
          <p className="about-project__info-description">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="about-project__tracker">
        <div className="about-project__tracker-progress">1 неделя</div>
        <div className="about-project__tracker-progress">4 недели</div>
      </div>
      <div className="about-project__tracker">
        <p className="about-project__tracker-technology">Back-end</p>
        <p className="about-project__tracker-technology">Front-end</p>
      </div>
    </section>
  );

}

export default AboutProject;
