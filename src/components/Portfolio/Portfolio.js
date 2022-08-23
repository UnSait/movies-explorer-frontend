import './Portfolio.css';
import arrow from '../../images/text__COLOR_font-main.svg'


function Portfolio() {

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__container">
        <li className="portfolio__link-container">
          <a className="portfolio__link" href="https://github.com/UnSait/mesto" target="_blank" rel="noreferrer">Статичный сайт</a>
          <a className="portfolio__arrow" href="https://github.com/UnSait/mesto" target="_blank" rel="noreferrer">
            <img className="portfolio__arrow-icn" src={arrow} alt="Стрелка"/>
          </a>
        </li>
        <li className="portfolio__link-container">
          <a className="portfolio__link" href="https://github.com/UnSait/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт</a>
          <a className="portfolio__arrow" href="https://github.com/UnSait/russian-travel" target="_blank" rel="noreferrer">
            <img className="portfolio__arrow-icn" src={arrow} alt="Стрелка"/>
          </a>
        </li>
        <li className="portfolio__link-container">
          <a className="portfolio__link" href="https://github.com/UnSait/react-mesto-api-full" target="_blank" rel="noreferrer">Одностраничное приложение</a>
          <a className="portfolio__arrow" href="https://github.com/UnSait/react-mesto-api-full" target="_blank" rel="noreferrer">
            <img className="portfolio__arrow-icn" src={arrow} alt="Стрелка"/>
          </a>
        </li>
      </ul>
    </section>
  );

}

export default Portfolio;
