import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';

function SearchByState() {
  const [searchByState, setSearchByState] = useState([]);
  const getApiData = async () => {
    const url = 'https://covid-api.mmediagroup.fr/v1/cases';
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.US.All);
      setSearchByState(data.US.All);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div className="searchByState">
      <h2>Search By State</h2>
      <div className="data">
        <li>
          Confirmed:{' '}
          <NumberFormat
            thousandsGroupStyle="thousand"
            value={searchByState.confirmed}
            prefix="   "
            decimalSeparator="."
            displayType="text"
            type="text"
            thousandSeparator={true}
            allowNegative={true}
          />
        </li>
        <li>
          Recovered:{' '}
          <NumberFormat
            thousandsGroupStyle="thousand"
            value={searchByState.recovered}
            prefix="   "
            decimalSeparator="."
            displayType="text"
            type="text"
            thousandSeparator={true}
            allowNegative={true}
          />
        </li>
        <li>
          Deaths:{' '}
          <NumberFormat
            thousandsGroupStyle="thousand"
            value={searchByState.deaths}
            prefix="   "
            decimalSeparator="."
            displayType="text"
            type="text"
            thousandSeparator={true}
            allowNegative={true}
          />
        </li>
      </div>
    </div>
  );
}

export default SearchByState;
