import SharedLayout from 'Components/SharedLayout/SharedLayout';
import HomePage from 'Pages/HomePage/HomePage';
import MoviesPage from 'Pages/MoviesPage/MoviesPage';
import { Route, Routes } from 'react-router-dom';
// import {
//   getMovieActors,
//   getMovieById,
//   getMovieReviews,
//   getMoviesByQuery,
//   getTrandingMovies,
// } from 'Services/movieApi';

const App = () => {
  // getTrandingMovies();
  // getMoviesByQuery('str');
  // getMovieById('894205');
  // getMovieActors('894205');
  // getMovieReviews('894205');

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
