import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

export const MoviesList = ({ array, query }) => {
  const location = useLocation();
  return (
    <ul className={css.moviesList}>
      {array.map(({ id, title, name }) => (
        <li className={css.listItem} key={id}>
          <Link
            className={css.movieItem}
            to={`/movie/${id}`}
            state={{
              from: query ? `/movie?query=${query}` : location.pathname,
            }}
          >
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
