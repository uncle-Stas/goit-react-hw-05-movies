import scss from './ActorsList.module.scss';

import ActorCard from './ActorCard';

const ActorsList = ({ actorsArr }) => {
  return (
    <ul className={scss.actorList}>
      {actorsArr.map(actor => (
        <ActorCard key={actor.id} actor={actor} />
      ))}
    </ul>
  );
};

export default ActorsList;
