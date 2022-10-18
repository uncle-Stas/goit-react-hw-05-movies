//
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  const { title, id } = movie;

  return (
    <li>
      <Link to={`movies/${id}`}>{title}</Link>
    </li>
  );
};

export default MovieItem;
