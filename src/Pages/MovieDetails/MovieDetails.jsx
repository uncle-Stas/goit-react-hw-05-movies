import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from 'Services/movieApi';

import Section from 'Components/Section/Section';
import MovieInfo from 'Components/MovieInfo/MovieInfo';
import ButtonBack from 'Components/ButtonBack/ButtonBack';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId).then(response => setMovie(response));
  }, [movieId]);

  return (
    <main>
      <Section>
        <>
          <ButtonBack />
          {movie === null ? <p>Loading...</p> : <MovieInfo movie={movie} />}
        </>
      </Section>
    </main>
  );
};

export default MovieDetails;
