import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';

function GlobalVaccination() {
  const [globalVaccinationData, setGlobalVaccinationData] = useState([]);
  const getApitData = async () => {
    const vaccineUrl = 'https://covid-api.mmediagroup.fr/v1/vaccines';
    try {
      const response = await fetch(vaccineUrl);
      const data = await response.json();
      setGlobalVaccinationData(data.World.All);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApitData();
  }, []);

  return (
    <div className="globalVaccinationData">
      <h2>Global Vaccination Data</h2>
      <div className="data">
        <li>
          Administered:{' '}
          <NumberFormat
            thousandsGroupStyle="thousand"
            value={globalVaccinationData.administered}
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
            value={globalVaccinationData.people_vaccinated}
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
            value={globalVaccinationData.people_partially_vaccinated}
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

export default GlobalVaccination;
