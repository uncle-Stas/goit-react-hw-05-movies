//

import MovieItem from 'Components/MovieItem/MovieItem';

const MoviesList = ({ movies }) => {
  // console.log('movies: ', movies);
  return (
    <ol>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ol>
  );
};

export default MoviesList;
