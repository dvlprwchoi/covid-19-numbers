import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';

function USVaccination() {
  const [usVaccinationData, setUSVaccinationData] = useState([]);
  const getApiData = async () => {
    const vaccineUrl = 'https://covid-api.mmediagroup.fr/v1/vaccines';
    try {
      const response = await fetch(vaccineUrl);
      const data = await response.json();
      setUSVaccinationData(data.US.All);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="usVaccinationData">
      <h2>US Vaccination Data</h2>
      <div className="data">
        <li>
          Administered:{' '}
          <NumberFormat
            thousandsGroupStyle="thousand"
            value={usVaccinationData.administered}
            prefix="   "
            decimalSeparator="."
            displayType="text"
            type="text"
            thousandSeparator={true}
            allowNegative={true}
          />
        </li>
        <li>
          Fully Vaccinated:{' '}
          <NumberFormat
            thousandsGroupStyle="thousand"
            value={usVaccinationData.people_vaccinated}
            prefix="   "
            decimalSeparator="."
            displayType="text"
            type="text"
            thousandSeparator={true}
            allowNegative={true}
          />
        </li>
        <li>
          Partially Vaccinated:{' '}
          <NumberFormat
            thousandsGroupStyle="thousand"
            value={usVaccinationData.people_partially_vaccinated}
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

export default USVaccination;
