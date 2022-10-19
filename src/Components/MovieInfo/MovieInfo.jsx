import scss from './MovieInfo.module.scss';

import { Link, Outlet } from 'react-router-dom';

const MovieInfo = ({ movie }) => {
  const { title, genres, poster_path, overview, vote_average, release_date } =
    movie;

  const genresString = genres.map(genre => genre.name).join(' ');
  return (
    <>
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
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieInfo;
