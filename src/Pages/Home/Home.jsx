//

import Section from 'Components/Section/Section';
import MoviesList from 'Components/MoviesList/MoviesList';

import { useEffect, useState } from 'react';
import { getTrandingMovies } from 'Services/movieApi';

const Home = () => {
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
        <>
          <h2>Trending today</h2>
          {moviesArr === null ? (
            <p>Loading...</p>
          ) : (
            <MoviesList movies={moviesArr} />
          )}
        </>
      </Section>
    </main>
  );
};

export default Home;
