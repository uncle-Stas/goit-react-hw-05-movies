//

import { getTrandingMovies } from 'Services/movieApi';

const HomePage = () => {
  const moviesArr = getTrandingMovies();
  console.log('moviesArr: ', moviesArr);

  return (
    <>
      <p>privet</p>
    </>
  );
};

export default HomePage;
