import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'Services/movieApi';

import Section from 'Components/Section/Section';
import MovieInfo from 'Components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const back = location.state?.from ?? '/';

  useEffect(() => {
    getMovieById(movieId)
      .then(response => {
        return setMovie(response);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <main>
      <Section>
        <>
          {movie === null ? (
            <p>Loading...</p>
          ) : (
            <MovieInfo movie={movie} forBtnBack={back} />
          )}
        </>
      </Section>
    </main>
  );
};

export default MovieDetails;
