//

import Section from 'Components/Section/Section';
import { getMovieById } from 'Services/movieApi';

const MoviesPage = () => {
  const movie = getMovieById('894205');
  console.log('movie: ', movie);

  return (
    <main>
      <Section>
        <p>poka</p>
      </Section>
    </main>
  );
};

export default MoviesPage;
