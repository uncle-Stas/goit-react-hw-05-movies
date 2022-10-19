//

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const query = event.target.query.value;
    onSubmit(query.toLowerCase());

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        autoFocus
        placeholder="Search movie"
        autoComplete="off"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
