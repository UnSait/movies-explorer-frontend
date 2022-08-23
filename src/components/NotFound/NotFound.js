import './NotFound.css';

function NotFound({redirect}) {

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__message">Страница не найдена</p>
      <button className="not-found__btn" type="button" onClick={redirect}>Назад</button>
    </section>
  );

}

export default NotFound;
