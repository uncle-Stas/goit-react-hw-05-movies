import scss from './ActorCard.module.scss';
import PropTypes from 'prop-types';

const ActorCard = ({ actor }) => {
  const { name, profile_path, character } = actor;

  return (
    <li className={scss.card}>
      <h4>{name}</h4>
      {profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${profile_path}`}
          alt="actor"
        />
      ) : (
        <p>No Photo</p>
      )}
      <p>
        Character: <b>{character}</b>
      </p>
    </li>
  );
};

export default ActorCard;

// --------------------------- PropTypes ----------------------

ActorCard.propTypes = {
  actor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
    character: PropTypes.string,
  }),
};
