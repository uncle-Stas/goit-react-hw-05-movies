import scss from './MoviesList.module.scss';
import PropTypes from 'prop-types';

import MovieItem from './MovieItem/MovieItem';

const MoviesList = ({ movies, query }) => {
  const moviesLength = movies.length;

  return (
    <>
      {!moviesLength ? (
        <p>
          According to your request <b>{query}</b> nothing was found. Please try
          again.
        </p>
      ) : (
        <ul className={scss.list}>
          {movies.map(movie => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </>
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
  query: PropTypes.string,
};
