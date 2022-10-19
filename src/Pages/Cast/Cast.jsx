import ActorsList from 'Components/ActorsList/ActorsList';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieActors } from 'Services/movieApi';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieActors(movieId)
      .then(response => {
        setCast(response.cast);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <>{cast === null ? <b>...loading</b> : <ActorsList actorsArr={cast} />}</>
  );
};

export default Cast;
