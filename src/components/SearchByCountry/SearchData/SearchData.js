import NumberFormat from 'react-number-format';

function SearchData({ searchByCountry, countryName, countryNames }) {
  // console.log(searchByCountry);
  if (searchByCountry.length === 0) {
    return (
      <div className="searchData">
        <div className="no-data">
          <li>No data to show</li>
        </div>
      </div>
    );
  } else if (countryNames.includes(countryName) === false) {
    const inputBoxValue = document.querySelector('.countrySearchInputBox');
    // console.log(inputBoxValue);

    function _reload() {
      window.location.reload();
    }

    inputBoxValue.addEventListener('click', _reload);

    return (
      <div className="searchData">
        <div className="no-data">
          <li>
            We CANNOT find your country name on the country list or DOES NOT
            match...Try it again!
          </li>
        </div>
      </div>
    );
  }
  return (
    <div className="searchData">
      <div className="data">
        <li>
          Confirmed:{' '}
          <NumberFormat
            thousandsGroupStyle="thousand"
            value={searchByCountry.All.confirmed}
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
            value={searchByCountry.All.recovered}
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
            value={searchByCountry.All.deaths}
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

export default SearchData;
