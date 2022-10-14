import HomePage from 'Pages/HomePage/HomePage';
import MoviesPage from 'Pages/MoviesPage/MoviesPage';
import { Route, Routes } from 'react-router-dom';
import {
  getMovieActors,
  // getMovieById,
  getMovieReviews,
  getMoviesByQuery,
  // getTrandingMovies,
} from 'Services/movieApi';

function App() {
  // getTrandingMovies();
  getMoviesByQuery('str');
  // getMovieById('894205');
  getMovieActors('894205');
  getMovieReviews('894205');

  return (
    <>
      <p>My new App</p>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </>
  );
}

export default App;
