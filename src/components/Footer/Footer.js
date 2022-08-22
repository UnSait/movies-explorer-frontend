import './Footer.css';

function Footer() {

  return (
    <footer className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__info-container">
        <p className="footer__copyright">© {new Date().getFullYear()}</p>
        <div className="footer__link-container">
          <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a className="footer__link" href="https://t.me/UnSait23" target="_blank" rel="noreferrer">Telegram</a>
          <a className="footer__link" href="https://github.com/UnSait" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );

}

export default Footer;
