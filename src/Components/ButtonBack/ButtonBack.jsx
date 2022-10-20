import scss from './ButtonBack.module.scss';

import { useNavigate } from 'react-router-dom';

const ButtonBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button type="button" onClick={goBack} className={scss.btnBack}>
      Go back
    </button>
  );
};

export default ButtonBack;
