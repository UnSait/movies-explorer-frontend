import './Techs.css';
import '../LandingTitle/LandingTitle.css';


function Techs() {

  return (
    <section className="techs" id="2">
      <div className="techs__container">
        <h2 className="techs__title landing-title">Технологии</h2>
        <h2 className="techs__subtitle">7 технологий</h2>
        <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <div className="techs__tech-container" >
          <div className="techs__tech landing-cells">HTML</div>
          <div className="techs__tech landing-cells">CSS</div>
          <div className="techs__tech landing-cells">JS</div>
          <div className="techs__tech landing-cells">React</div>
          <div className="techs__tech landing-cells">Git</div>
          <div className="techs__tech landing-cells">Express.js</div>
          <div className="techs__tech landing-cells">mongoDB</div>
        </div>
      </div>
    </section>
  );

}

export default Techs;
