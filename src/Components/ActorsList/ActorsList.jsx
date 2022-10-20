import scss from './ActorsList.module.scss';
import PropTypes from 'prop-types';

import ActorCard from './ActorCard/ActorCard';

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

// --------------------------- PropTypes ----------------------

ActorsList.propType = {
  actorsArr: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
      character: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
