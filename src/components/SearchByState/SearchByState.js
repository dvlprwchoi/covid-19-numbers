import { useEffect, useState } from 'react';
// import NumberFormat from 'react-number-format';
import SearchData from './SearchData/SearchData';
import SearchForm from './SearchForm/SearchForm';

function SearchByState() {
  const [searchByState, setSearchByState] = useState([]);
  const getApiData = async () => {
    const url = 'https://covid-api.mmediagroup.fr/v1/cases';
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.US.Texas);
      setSearchByState(data.US.Texas);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  //   function handleSubmit(e) {
  //     alert('State name was submitted: ' + this.state.value);
  //     e.preventdefault();
  //   }

  //   function handleChange(e) {
  //     this.setState({ value: e.target.value });
  //   }

  return (
    <div className="searchByState">
      <h2>Search By State</h2>
      {/* <div className="search"> */}
      <SearchForm />
      {/* </div> */}

      {/* <div className="stateName">
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
      <SearchData searchByState={searchByState} />
    </div>
  );
}

export default SearchByState;
