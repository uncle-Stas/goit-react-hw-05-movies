import scss from './MovieItem.module.scss';

import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  const { title, id, poster_path } = movie;

  return (
    <li>
      <Link to={`/movies/${id}`} className={scss.link}>
        <div className={scss.wrapper}>
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt="poster"
          />
          <p className={scss.title}>{title}</p>
        </div>
      </Link>
    </li>
  );
};

export default MovieItem;
