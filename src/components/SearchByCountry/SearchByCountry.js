import { useState } from 'react';
import NumberFormat from 'react-number-format';
import SearchData from './SearchData/SearchData';
import SearchForm from './SearchForm/SearchForm';

const API_URL = `https://covid-api.mmediagroup.fr/v1/cases`;
// console.log(API_URL);

function SearchByCountry() {
  const [searchByCountry, setSearchByCountry] = useState([]);
  const [countryName, setCountryName] = useState([]);
  const API_URL_COUNTRY = API_URL + `?country=`;
  // console.log(API_URL_COUNTRY);

  const getApiData = async () => {
    try {
      const response = await fetch(API_URL_COUNTRY);
      const COUNTRY_DATA = await response.json();
      console.log(COUNTRY_DATA);
      setSearchByCountry(COUNTRY_DATA);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   getApiData();
  // }, []);

  //   function handleSubmit(e) {
  //     alert('State name was submitted: ' + this.state.value);
  //     e.preventdefault();
  //   }

  //   function handleChange(e) {
  //     this.setState({ value: e.target.value });
  //   }

  function _change(e) {
    setCountryName(e.target.value);
  }

  function _submit(e) {
    e.preventDefault();
    getApiData(countryName);
  }
  console.log(countryName);
  console.log(searchByCountry);

  return (
    <div className="searchByCountry">
      <h2>Search By Country</h2>
      {/* <div className="search"> */}
      <SearchForm
        _change={_change}
        _submit={_submit}
        countryName={countryName}
      />
      {/* </div> */}

      {/* <div className="countryName">
        <form onSubmit={this.handleSubmit}>
          <label>
            State:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div> */}

      <SearchData searchByCountry={searchByCountry} countryName={countryName} />
    </div>
  );
}

export default SearchByCountry;
