import scss from './ActorCard.module.scss';

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
        character: <b>{character}</b>
      </p>
    </li>
  );
};

export default ActorCard;
