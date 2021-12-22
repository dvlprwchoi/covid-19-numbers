import { useState, useEffect } from 'react';

function CountryList({ API_URL }) {
  //   console.log(API_URL);
  const [countryList, setCountryList] = useState([]);
  console.log(countryList);

  const getCountryNameData = async () => {
    try {
      const response = await fetch(API_URL);
      const API_DATA = await response.json();
      //   console.log(API_DATA);
      setCountryList(API_DATA);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountryNameData();
  }, []);

  const countryNames = Object.keys(countryList);
  console.log(countryNames);

  return (
    <div className="countryList">
      <h1>This is country list page</h1>
    </div>
  );
}

export default CountryList;
