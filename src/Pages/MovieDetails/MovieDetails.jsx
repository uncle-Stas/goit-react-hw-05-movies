//

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'Services/movieApi';

import Section from 'Components/Section/Section';
import MovieInfo from 'Components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(movieId).then(response => setMovie(response));
  }, [movieId]);

  return (
    <main>
      <Section>{movie && <MovieInfo movie={movie} />}</Section>
    </main>
  );
};

export default MovieDetails;
