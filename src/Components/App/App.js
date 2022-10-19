import { Route, Routes } from 'react-router-dom';

import SharedLayout from 'Components/SharedLayout/SharedLayout';
import Home from 'Pages/Home/Home';
import Movies from 'Pages/Movies/Movies';
import MovieDetails from 'Pages/MovieDetails/MovieDetails';
import Cast from 'Pages/Cast/Cast';
import Reviews from 'Pages/Reviews/Reviews';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;