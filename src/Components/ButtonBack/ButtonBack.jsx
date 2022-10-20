import scss from './ButtonBack.module.scss';
import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';

const ButtonBack = ({ location }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(location);
  };

  return (
    <button type="button" onClick={goBack} className={scss.btnBack}>
      Go back
    </button>
  );
};

export default ButtonBack;

// --------------------------- PropTypes ----------------------

ButtonBack.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};
