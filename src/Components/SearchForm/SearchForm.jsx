import scss from './SearchForm.module.scss';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const query = event.target.query.value;
    onSubmit(query.toLowerCase());

    // event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        autoFocus
        placeholder="Search movie"
        autoComplete="off"
        className={scss.input}
      />
      <button type="submit" className={scss.btn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;

// --------------------------- PropTypes ----------------------

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
