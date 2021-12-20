function SearchForm() {
  return (
    <div className="searchForm">
      <form className="form">
        <label className="stateSearchInputLabel" htmlFor="stateName">
          <input
            type="text"
            className="stateSearchInputBox"
            placeholder="Type your state"
            name="stateName"
            id=";stateName"
            autoFocus
          ></input>
        </label>
        <input
          type="submit"
          className="searchInputSubmitButton"
          value="Search"
        />
      </form>
    </div>
  );
}

export default SearchForm;
