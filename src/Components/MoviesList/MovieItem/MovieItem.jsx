import scss from './MovieItem.module.scss';
import PropTypes from 'prop-types';

import { Link, useLocation } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  const { title, id, poster_path } = movie;
  const location = useLocation();

  return (
    <li>
      <Link
        to={`/movies/${id}`}
        className={scss.link}
        state={{ from: location }}
      >
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

// --------------------------- PropTypes ----------------------

MovieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
  }),
};
