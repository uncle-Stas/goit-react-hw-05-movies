import scss from './MovieInfo.module.scss';
import PropTypes from 'prop-types';

import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import ErrorPage from 'Pages/ErrorPage/ErrorPage';
import ButtonBack from 'Components/ButtonBack/ButtonBack';

const MovieInfo = ({ movie, forBtnBack }) => {
  if (!movie) {
    return <ErrorPage />;
  }

  const { title, genres, poster_path, overview, vote_average, release_date } =
    movie;

  const genresString = genres.map(genre => genre.name).join(' ');
  return (
    <>
      <ButtonBack location={forBtnBack} />
      <div className={scss.flexWrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt="poster"
        />
        <div className="textContent">
          <h2 className={scss.title}>
            {title} ({Number.parseInt(release_date)})
          </h2>
          <p className={scss.rating}>
            <b>User Score:</b> {Math.round(vote_average * 10)}%
          </p>
          <h3>Overview</h3>
          <p className={scss.overview}>{overview}</p>
          <h3>Genres</h3>
          <p>{genresString}</p>
        </div>
      </div>
      <div className={scss.additionInfo}>
        <h3>Additional information</h3>
        <ul className={scss.additionList}>
          <li>
            <Link
              to="cast"
              className={scss.additionLink}
              state={{ from: forBtnBack }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to="reviews"
              className={scss.additionLink}
              state={{ from: forBtnBack }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieInfo;

// --------------------------- PropTypes ----------------------

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    poster_path: PropTypes.string,
    overview: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
  }),
  forBtnBack: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
