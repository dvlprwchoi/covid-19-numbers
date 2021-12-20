import NumberFormat from 'react-number-format';

function SearchData({ searchByCountry }) {
  // console.log(searchByCountry);
  if (searchByCountry.length === 0) {
    return (
      <div className="searchData">
        <div className="data">
          <li>No data to show</li>
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
