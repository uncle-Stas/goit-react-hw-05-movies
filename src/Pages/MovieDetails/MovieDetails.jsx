import scss from './MovieDetails.module.scss';

import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getMovieById } from 'Services/movieApi';

import Section from 'Components/Section/Section';
import MovieInfo from 'Components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieById(movieId).then(response => setMovie(response));
  }, [movieId]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main>
      <Section>
        <button type="button" onClick={goBack} className={scss.btnBack}>
          Go back
        </button>
        {movie === null ? <b>...Loading</b> : <MovieInfo movie={movie} />}
      </Section>
    </main>
  );
};

export default MovieDetails;
