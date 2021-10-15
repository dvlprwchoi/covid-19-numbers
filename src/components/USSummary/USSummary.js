import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';

function USSummary() {
  const [usSummary, setUsSummary] = useState([]);
  const getApiData = async () => {
    const url = 'https://covid-api.mmediagroup.fr/v1/cases';
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.US.All);
      setUsSummary(data.US.All);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div className="usSummaryData">
      <h2>US Summary Data</h2>
      <div className="data">
        <li>
          Confirmed:{' '}
          <NumberFormat
            thousandsGroupStyle="thousand"
            value={usSummary.confirmed}
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
            value={usSummary.recovered}
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
            value={usSummary.deaths}
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

export default USSummary;
