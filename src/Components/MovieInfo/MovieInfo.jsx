//

const MovieInfo = ({ movie }) => {
  console.log('movie: ', movie);
  const { title, id, genres, poster_path, overview, vote_average } = movie;

  const genresString = genres.map(genre => genre.name).join(', ');
  return (
    <div className="flexWrapper">
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="poster" />
      <div className="textContent">
        <h2>{title}</h2>
        <p>User Score: {vote_average}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genresString}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
