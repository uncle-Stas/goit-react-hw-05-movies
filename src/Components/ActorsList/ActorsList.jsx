import scss from './ActorsList.module.scss';

import ActorCard from './ActorCard';

const ActorsList = ({ actorsArr }) => {
  const actorsArrLength = actorsArr.length;

  return (
    <>
      {!actorsArrLength ? (
        <p>Sorry, We don't have information about actors</p>
      ) : (
        <ul className={scss.actorList}>
          {actorsArr.map(actor => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ActorsList;
