//

import MoviesList from 'Components/MoviesList/MoviesList';
import SearchForm from 'Components/SearchForm/SearchForm';
import Section from 'Components/Section/Section';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'Services/movieApi';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [moviesArr, setMoviesArr] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsQ = searchParams.get('q');

  const handleSubmit = queryForm => {
    setQuery(queryForm);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    setSearchParams({ q: query });
  }, [query, setSearchParams]);

  useEffect(() => {
    if (!searchParamsQ) {
      return;
    }

    getMoviesByQuery(searchParamsQ)
      .then(response => setMoviesArr(response.results))
      .catch(error => console.log(error));
  }, [searchParamsQ]);

  return (
    <main>
      <Section>
        <>
          <SearchForm onSubmit={handleSubmit} />
          {moviesArr && <MoviesList movies={moviesArr} />}
        </>
      </Section>
    </main>
  );
};

export default Movies;
