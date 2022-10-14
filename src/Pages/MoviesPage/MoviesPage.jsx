//

import { getMovieById } from 'Services/movieApi';

const MoviesPage = () => {
  const movie = getMovieById('894205');
  console.log('movie: ', movie);

  return (
    <>
      <p>poka</p>
    </>
  );
};

export default MoviesPage;
