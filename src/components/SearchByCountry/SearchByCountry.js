import { useState, useEffect } from 'react';
// import CountryList from './CountryList/CountryList';
import SearchData from './SearchData/SearchData';
import SearchForm from './SearchForm/SearchForm';

const API_URL = `https://covid-api.mmediagroup.fr/v1/cases`;
// console.log(API_URL);

function SearchByCountry() {
  const [countryList, setCountryList] = useState([]);
  // console.log(countryList);
  const [countryName, setCountryName] = useState([]);
  const [searchByCountry, setSearchByCountry] = useState([]);

  const getCountryNameData = async () => {
    try {
      const response = await fetch(API_URL);
      const API_DATA = await response.json();
      //   console.log(API_DATA);
      setCountryList(API_DATA);
    } catch (error) {
      console.log(error);
      document.getElementsByClassName('no-data').innerText =
        '<li>Misspelled...Try it again!!!</li>';
    }
  };

  useEffect(() => {
    getCountryNameData();
  }, []);

  const countryNames = Object.keys(countryList);
  // console.log(countryNames);

  const API_URL_COUNTRY = API_URL + `?country=` + countryName;
  // console.log(API_URL_COUNTRY);

  const getApiData = async () => {
    try {
      const response = await fetch(API_URL_COUNTRY);
      const COUNTRY_DATA = await response.json();
      // console.log(COUNTRY_DATA);
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
    const inputValue = e.target.value;
    const capitalizedInputValue =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    setCountryName(capitalizedInputValue);
  }

  function _submit(e) {
    e.preventDefault();
    getApiData(countryName);
  }
  // console.log(countryName);
  // console.log(searchByCountry);

  return (
    <div className="searchByCountry">
      <h2>Search By Country</h2>
      {/* <CountryList API_URL={API_URL} countryName={countryName} /> */}
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

      <SearchData
        searchByCountry={searchByCountry}
        countryName={countryName}
        countryNames={countryNames}
      />
    </div>
  );
}

export default SearchByCountry;
