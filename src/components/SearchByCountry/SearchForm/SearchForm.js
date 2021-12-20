function SearchForm({ _change, _submit, countryName }) {
  return (
    <div className="searchForm">
      <form className="form" onSubmit={_submit}>
        <label className="countrySearchInputLabel" htmlFor="countryName">
          <input
            type="text"
            className="countrySearchInputBox"
            placeholder="Type your country"
            name="countryName"
            id="countryName"
            autoFocus
            required
            onChange={_change}
            value={countryName}
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
