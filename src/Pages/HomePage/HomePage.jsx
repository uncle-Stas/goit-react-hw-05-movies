//

import Section from 'Components/Section/Section';
import MoviesList from 'Components/MoviesList/MoviesList';

import { useEffect, useState } from 'react';
import { getTrandingMovies } from 'Services/movieApi';

const HomePage = () => {
  const [moviesArr, setMoviesArr] = useState(null);

  useEffect(() => {
    getTrandingMovies()
      .then(response => {
        setMoviesArr(response.results);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <main>
      <Section>
        {moviesArr === null ? (
          <p>...Loading</p>
        ) : (
          <MoviesList movies={moviesArr} />
        )}
      </Section>
    </main>
  );
};

export default HomePage;
