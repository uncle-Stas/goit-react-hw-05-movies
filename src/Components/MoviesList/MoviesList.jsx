import scss from './MoviesList.module.scss';

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
