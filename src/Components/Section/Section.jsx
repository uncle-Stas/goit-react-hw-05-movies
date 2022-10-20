import scss from './Section.module.scss';
import PropTypes from 'prop-types';

const Section = ({ children }) => {
  return (
    <section className={scss.section}>
      <div className={scss.container}>{children}</div>
    </section>
  );
};

export default Section;

// --------------------------- PropTypes ----------------------

Section.propTypes = {
  children: PropTypes.element.isRequired,
};
