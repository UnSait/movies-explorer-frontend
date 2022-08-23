import './Promo.css';
import '../LandingCells/LandingCells.css';

function Promo() {

  return (
    <section className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <nav className="promo__nav-tab">
        <a className="promo__link landing-cells" href="#1">О проекте</a>
        <a className="promo__link landing-cells" href="#2">Технологии</a>
        <a className="promo__link landing-cells" href="#3">Студент</a>
      </nav>
    </section>
  );

}

export default Promo;
