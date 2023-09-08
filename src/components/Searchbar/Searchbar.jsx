import { StyledSearchbar } from './Searchbar.styled';
import PropTypes from 'prop-types';

const Searchbar = ({ onSearchPictures }) => {
  const handlerSubmit = evt => {
    evt.preventDefault();
    onSearchPictures(evt.target.elements.search.value.toLowerCase().trim());
  };

  return (
    <StyledSearchbar>
      <form onSubmit={handlerSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>
        <input
          required
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </StyledSearchbar>
  );
};

Searchbar.propTypes = {
  onSearchPictures: PropTypes.func.isRequired,
};

export default Searchbar;
