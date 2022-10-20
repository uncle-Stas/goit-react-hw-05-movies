import scss from './MoviesList.module.scss';
import PropTypes from 'prop-types';

import MovieItem from './MovieItem/MovieItem';

const MoviesList = ({ movies }) => {
  return (
    <ul className={scss.list}>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesList;

// --------------------------- PropTypes ----------------------

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
